// Cloudflare Pages Edge Security Middleware (Red-Team Hardened)
// Enforces:
// 1. Bounded Edge Rate Limiting & Scanner Penalty Lockout (DoS / Flood Defense)
// 2. Request Size & HTTP Request Smuggling / Desync Defense
// 3. HTTP Verb Whitelisting (GET, HEAD, OPTIONS)
// 4. Crash-Proof Multi-Pass URI Decoding (Prevents unhandled URIError 500 crashes & double-encoding bypasses)
// 5. Offensive Red-Team Scanner User-Agent Blocking
// 6. Path Traversal, Dotfile, & WAF Payload Inspection (XSS, SQLi, SSTI, Log4Shell, Prototype Pollution, LFI, RCE, CRLF)
// 7. Strict Route Allowlist (Prevents Soft-404 / Ghost-200 Directory Fuzzing Amplification)
// 8. Universal High-Grade Security Headers on ALL Responses (2xx, 4xx)

interface EventContext {
  request: Request;
  next: () => Promise<Response>;
}

interface RateRecord {
  count: number;
  violations: number;
  resetAt: number;
  blockedUntil: number;
}

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 600; // 600 req/min per IP for document navigations
const MAX_VIOLATIONS_BEFORE_BAN = 30; // 30 offensive WAF hits triggers penalty ban
const PENALTY_BAN_DURATION_MS = 30_000; // 30 second ban for active scanners
const MAX_TRACKED_IPS = 5_000; // Memory bound against spoofed-IP exhaustion

const MAX_URL_LENGTH = 2048;
const MAX_PATH_LENGTH = 256;
const MAX_QUERY_LENGTH = 512;

const ipStore = new Map<string, RateRecord>();

function getClientIp(request: Request): string {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    "unknown-ip"
  );
}

function pruneIpStore(now: number): void {
  if (ipStore.size < MAX_TRACKED_IPS) return;
  for (const [ip, rec] of ipStore) {
    if (now > rec.resetAt && now > rec.blockedUntil) {
      ipStore.delete(ip);
    }
    if (ipStore.size < MAX_TRACKED_IPS * 0.8) break;
  }
  // If still full, evict oldest inserted key
  if (ipStore.size >= MAX_TRACKED_IPS) {
    const oldestKey = ipStore.keys().next().value;
    if (oldestKey) ipStore.delete(oldestKey);
  }
}

function checkRateLimit(
  ip: string,
  now: number,
): { allowed: boolean; retryAfterSec: number; reason?: string } {
  pruneIpStore(now);
  let rec = ipStore.get(ip);

  if (!rec || (now > rec.resetAt && now > rec.blockedUntil)) {
    rec = {
      count: 1,
      violations: 0,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
      blockedUntil: 0,
    };
    ipStore.set(ip, rec);
    return { allowed: true, retryAfterSec: 0 };
  }

  if (now < rec.blockedUntil) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((rec.blockedUntil - now) / 1000)),
      reason: "IP-Penalty-Lockout",
    };
  }

  rec.count += 1;
  if (rec.count > MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((rec.resetAt - now) / 1000)),
      reason: "Rate-Limit-Exceeded",
    };
  }

  return { allowed: true, retryAfterSec: 0 };
}

function recordViolation(ip: string, now: number): void {
  const rec = ipStore.get(ip);
  if (!rec) return;
  rec.violations += 1;
  if (rec.violations >= MAX_VIOLATIONS_BEFORE_BAN) {
    rec.blockedUntil = now + PENALTY_BAN_DURATION_MS;
  }
}

// Crash-proof multi-pass decoder to defeat double/triple URL encoding (%252e%252e)
// and prevent unhandled URIError 500 exceptions on malformed hex sequences (/%c0%af).
function safeMultiDecode(
  raw: string,
  maxPasses = 3,
): { ok: true; value: string } | { ok: false } {
  let current = raw;
  for (let i = 0; i < maxPasses; i++) {
    try {
      const decoded = decodeURIComponent(current);
      if (decoded === current) break;
      current = decoded;
    } catch {
      return { ok: false };
    }
  }
  // Normalize Windows-style backslashes
  const normalized = current.replace(/\\/g, "/");
  // Reject null bytes or raw ASCII control characters
  if (/[\x00-\x1f\x7f]/.test(normalized)) {
    return { ok: false };
  }
  return { ok: true, value: normalized };
}

// Known offensive red-team scanner User-Agent signatures
const BLOCKED_SCANNER_UA =
  /\b(sqlmap|nikto|nuclei|ffuf|gobuster|dirbuster|feroxbuster|wpscan|acunetix|nessus|masscan|zgrab|nmap|hydra|burpcollaborator|metasploit|havij|arachni|jaeles|dalfox|commix|wfuzz)\b/i;

// Prohibited path traversal, dotfile, and config/CMS exploration patterns
const BLOCKED_PATH_PATTERNS = [
  /\.\./, // Directory traversal (..)
  /\/\.well-known\/(?!security\.txt$)/i, // Only allow /.well-known/security.txt
  /\/\.(?!well-known\/security\.txt$)[a-z0-9_-]+/i, // Block all other hidden dotfiles (.git, .env, .aws, .vscode, etc.)
  /\/(package(-lock)?\.json|tsconfig\.json|vite\.config\.ts|tailwind\.config\.js|postcss\.config\.js|wrangler\.toml|_middleware\.ts|_headers|_redirects)$/i,
  /\.(php|asp|aspx|jsp|cgi|env|bak|sql|swp|old|orig|log|ini|conf|sh|py|rb|map)$/i,
  /\/(wp-admin|wp-login|wp-content|wp-includes|xmlrpc|phpmyadmin|pma|admin|administrator|actuator|server-status|cgi-bin|vendor|node_modules|functions|src)\b/i,
];

// Comprehensive WAF attack payload patterns (XSS, SQLi, SSTI, Log4Shell, Prototype Pollution, LFI, RCE, XXE)
const ATTACK_PAYLOAD_PATTERNS = [
  /<script[\s/>]/i,
  /javascript\s*:/i,
  /vbscript\s*:/i,
  /data\s*:\s*text\/html/i,
  /\bon(load|error|click|mouseover|focus|blur|submit|change|keyup|keydown|animationstart|toggle)\s*=/i,
  /\b(alert|prompt|confirm|eval|Function)\s*\(/i,
  /document\.(cookie|domain|write)/i,
  /<(iframe|object|embed|svg|math|meta|base)\b/i,
  /\bunion\s+(all\s+)?select\b/i,
  /'\s*(or|and)\s*['"0-9]/i,
  /\b(sleep|benchmark)\s*\(/i,
  /\bwaitfor\s+delay\b/i,
  /\binformation_schema\b/i,
  /--\s*$/m,
  /\$\{jndi:/i, // Log4Shell / JNDI injection
  /\{\{.*\}\}|<%.*%>/, // Server-Side Template Injection (SSTI)
  /__proto__|constructor\s*\[|prototype\s*\[/i, // Prototype pollution
  /\/(etc\/(passwd|shadow|hosts)|proc\/self|windows\/win\.ini|boot\.ini)/i, // LFI probes
  /[;&|`]\s*(cat|ls|id|whoami|uname|pwd|curl|wget|bash|sh|nc|netcat|python|perl|php)\b/i, // Command injection
  /<!ENTITY|SYSTEM\s+["']file:/i, // XXE injection
];

// Strict route allowlist for valid static application paths
const ALLOWED_EXACT_ROUTES = new Set([
  "/",
  "/index.html",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/favicon.ico",
  "/.well-known/security.txt",
]);

const ALLOWED_ASSET_ROUTE =
  /^\/assets\/([a-zA-Z0-9_-]+\/)*[a-zA-Z0-9._-]+\.(png|svg|js|css|ico|webp|jpg|jpeg|woff2)$/;

function applySecurityHeaders(headers: Headers, isStaticAsset = false): void {
  headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data:; connect-src 'self'; object-src 'none'; frame-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;",
  );
  headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  headers.set("X-Permitted-Cross-Domain-Policies", "none");
  headers.set("X-DNS-Prefetch-Control", "off");
  headers.set(
    "Permissions-Policy",
    "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), display-capture=(), document-domain=(), encrypted-media=(), fullscreen=(self), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), screen-wake-lock=(), usb=(), web-share=()",
  );
  headers.set("X-XSS-Protection", "0");

  if (isStaticAsset) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
  }
}

function jsonErrorResponse(
  status: number,
  error: string,
  message: string,
  securityAction: string,
  extraHeaders?: Record<string, string>,
): Response {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Security-Action": securityAction,
    "X-Robots-Tag": "noindex, nofollow",
    ...extraHeaders,
  });
  applySecurityHeaders(headers, false);
  return new Response(JSON.stringify({ error, message }), {
    status,
    headers,
  });
}

export async function onRequest(context: EventContext): Promise<Response> {
  const { request, next } = context;
  const now = Date.now();
  const clientIp = getClientIp(request);

  // 1. Request URI Size Bounds Check (Prevents ReDoS & CPU Exhaustion DoS)
  if (request.url.length > MAX_URL_LENGTH) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      414,
      "URI Too Long",
      "Request URI exceeds maximum permitted length.",
      "Blocked-Oversized-URI",
    );
  }

  let url: URL;
  try {
    url = new URL(request.url);
  } catch {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      400,
      "Bad Request",
      "Malformed request URL.",
      "Blocked-Malformed-URL",
    );
  }

  // 2. Edge Rate Limit Check (Only applied to dynamic/document routes; static assets bypass to prevent browser burst throttling)
  const isStaticAsset = url.pathname.startsWith("/assets/");
  if (!isStaticAsset) {
    const rateCheck = checkRateLimit(clientIp, now);
    if (!rateCheck.allowed) {
      return jsonErrorResponse(
        429,
        "Too Many Requests",
        "Rate limit exceeded. Please slow down and try again shortly.",
        rateCheck.reason || "Rate-Limit-Exceeded",
        { "Retry-After": String(rateCheck.retryAfterSec) },
      );
    }
  }

  if (
    url.pathname.length > MAX_PATH_LENGTH ||
    url.search.length > MAX_QUERY_LENGTH
  ) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      414,
      "URI Too Long",
      "Path or query string exceeds maximum permitted length.",
      "Blocked-Oversized-Path-Or-Query",
    );
  }

  // 3. HTTP Verb Whitelisting: Only allow safe read-only methods
  const method = request.method.toUpperCase();
  const ALLOWED_METHODS = ["GET", "HEAD", "OPTIONS"];
  if (!ALLOWED_METHODS.includes(method)) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      405,
      "Method Not Allowed",
      "Only GET, HEAD, and OPTIONS methods are permitted.",
      "Blocked-Method-Tampering",
      { Allow: "GET, HEAD, OPTIONS" },
    );
  }

  // 4. HTTP Request Smuggling / Desync Defense: Reject bodies on GET/HEAD/OPTIONS
  const contentLength = request.headers.get("content-length");
  const transferEncoding = request.headers.get("transfer-encoding");
  if ((contentLength && contentLength !== "0") || transferEncoding !== null) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      400,
      "Bad Request",
      "Request bodies are not permitted on safe read methods.",
      "Blocked-Request-Smuggling",
    );
  }

  // Handle CORS preflight cleanly with full security headers
  if (method === "OPTIONS") {
    const headers = new Headers({
      Allow: "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Origin": url.origin,
      "Access-Control-Max-Age": "86400",
      "Cache-Control": "no-store",
    });
    applySecurityHeaders(headers, false);
    return new Response(null, { status: 204, headers });
  }

  // 5. Offensive Scanner User-Agent Blocking
  const userAgent = request.headers.get("user-agent") || "";
  if (BLOCKED_SCANNER_UA.test(userAgent)) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      403,
      "Forbidden",
      "Automated vulnerability scanner blocked.",
      "Blocked-Scanner-UA",
    );
  }

  // 6. Crash-Proof Multi-Pass URI Decoding (Path & Query)
  const decodedPathResult = safeMultiDecode(url.pathname);
  const decodedQueryResult = safeMultiDecode(url.search);
  if (!decodedPathResult.ok || !decodedQueryResult.ok) {
    recordViolation(clientIp, now);
    return jsonErrorResponse(
      400,
      "Bad Request",
      "Malformed percent-encoding or illegal control characters in URI.",
      "Blocked-Malformed-Encoding",
    );
  }

  const decodedPath = decodedPathResult.value;
  const decodedQuery = decodedQueryResult.value;

  // 7. Path Traversal, Sensitive Dotfile, and Config Probe Defense
  for (const pattern of BLOCKED_PATH_PATTERNS) {
    if (pattern.test(url.pathname) || pattern.test(decodedPath)) {
      recordViolation(clientIp, now);
      return jsonErrorResponse(
        403,
        "Forbidden",
        "Request blocked by path security rules.",
        "Blocked-Path-Traversal",
      );
    }
  }

  // 8. WAF Payload Inspection across both Path and Decoded Query Parameters
  for (const pattern of ATTACK_PAYLOAD_PATTERNS) {
    if (
      pattern.test(decodedPath) ||
      pattern.test(decodedQuery) ||
      pattern.test(url.search)
    ) {
      recordViolation(clientIp, now);
      return jsonErrorResponse(
        403,
        "Forbidden",
        "Potential malicious payload detected by WAF.",
        "Blocked-Malicious-Payload",
      );
    }
  }

  // 9. Strict Route Allowlist (Prevents Soft-404 / Ghost-200 Enumeration)
  const isAllowedExact = ALLOWED_EXACT_ROUTES.has(decodedPath);
  const isAllowedAsset = ALLOWED_ASSET_ROUTE.test(decodedPath);

  if (!isAllowedExact && !isAllowedAsset) {
    return jsonErrorResponse(
      404,
      "Not Found",
      "The requested resource does not exist.",
      "Route-Not-Found",
    );
  }

  // 10. Proceed to static asset handler and attach hardened security headers
  try {
    const response = await next();
    const headers = new Headers(response.headers);
    applySecurityHeaders(headers, isAllowedAsset);

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  } catch {
    return jsonErrorResponse(
      500,
      "Internal Server Error",
      "An unexpected error occurred while serving the request.",
      "Edge-Handler-Fallback",
    );
  }
}
