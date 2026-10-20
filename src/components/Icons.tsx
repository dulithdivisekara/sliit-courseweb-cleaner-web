export function ChromeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/chrome.svg"
      alt="Google Chrome"
      width={16}
      height={16}
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

export function EdgeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/edge.svg"
      alt="Microsoft Edge"
      width={16}
      height={16}
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

export function FirefoxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/firefox.svg"
      alt="Mozilla Firefox"
      width={16}
      height={16}
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

export function UserscriptIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} inline-block shrink-0`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Tampermonkey Userscript"
    >
      <rect x="2" y="3" width="20" height="18" rx="4" fill="#00485B" />
      <circle cx="8" cy="12" r="2.2" fill="#FFFFFF" />
      <circle cx="16" cy="12" r="2.2" fill="#FFFFFF" />
      <path
        d="M6 17C7.5 18 10 18.5 12 18.5C14 18.5 16.5 18 18 17"
        stroke="#48BB78"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={`${className} inline-block shrink-0`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="GitHub"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function AppIcon({
  size = 48,
  className = "",
}: {
  size?: 16 | 48 | 128;
  className?: string;
}) {
  const src =
    size === 128
      ? "/assets/icon_128.png"
      : size === 16
        ? "/assets/icon_16.png"
        : "/assets/icon_48.png";
  return (
    <img
      src={src}
      alt="SLIIT Courseweb Cleaner Logo"
      className={`${className} inline-block object-contain`}
      width={size}
      height={size}
      loading="eager"
    />
  );
}

export function TelegramIcon({
  className = "w-4 h-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className} inline-block shrink-0`}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label="Telegram"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}
