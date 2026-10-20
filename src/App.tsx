import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Lock,
  Layers,
  Moon,
  Filter,
  Sparkles,
} from "lucide-react";
import {
  ChromeIcon,
  EdgeIcon,
  FirefoxIcon,
  UserscriptIcon,
  GithubIcon,
  AppIcon,
} from "./components/Icons";
import { Navbar } from "./components/Navbar";
import { CampusSimulator } from "./components/CampusSimulator";
import { ComparisonViewer } from "./components/ComparisonViewer";
import { FeatureGrid } from "./components/FeatureGrid";
import { SpecMatrix } from "./components/SpecMatrix";
import { InstallSteps } from "./components/InstallSteps";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";

function getInitialDarkMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const saved = window.localStorage.getItem("courseweb-theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
  } catch {
    // Ignore storage access errors in strict privacy contexts
  }
  return false;
}

export default function App() {
  const [detectedBrowser, setDetectedBrowser] = useState<
    "chrome" | "edge" | "firefox"
  >("chrome");
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(getInitialDarkMode);

  // Sync dark class, color-scheme, and theme-color meta tag with document element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", darkMode ? "#0D131A" : "#0F3B5F");
    }
  }, [darkMode]);

  // Listen to OS system theme changes if user hasn't explicitly locked a manual preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!window.localStorage.getItem("courseweb-theme")) {
          setDarkMode(e.matches);
        }
      } catch {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleSetDarkMode = (val: boolean) => {
    setDarkMode(val);
    try {
      window.localStorage.setItem("courseweb-theme", val ? "dark" : "light");
    } catch {
      // Ignore storage write errors in restricted contexts
    }
  };

  // Track scroll position to seamlessly swap Telegram and Store action buttons in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const heroBtn = document.getElementById("hero-download-btn");
      if (heroBtn) {
        const rect = heroBtn.getBoundingClientRect();
        setIsScrolled(rect.bottom < 64);
      } else {
        setIsScrolled(window.scrollY > 320);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect user's browser dynamically
  useEffect(() => {
    if (typeof window !== "undefined") {
      const ua = window.navigator.userAgent;
      if (/Edg\//i.test(ua)) {
        setDetectedBrowser("edge");
      } else if (/Firefox/i.test(ua)) {
        setDetectedBrowser("firefox");
      } else {
        setDetectedBrowser("chrome");
      }
    }
  }, []);

  const browserConfigs = {
    chrome: {
      name: "Chrome",
      label: "Install for Google Chrome",
      shortLabel: "Chrome Web Store",
      url: "https://chromewebstore.google.com/detail/sliit-courseweb-cleaner/lnoadlfhebmkhmbfmehdgoffjllgadjm",
      icon: ChromeIcon,
      badgeText: "Verified on Chrome Web Store",
    },
    edge: {
      name: "Edge",
      label: "Get for Microsoft Edge",
      shortLabel: "Edge Add-ons",
      url: "https://microsoftedge.microsoft.com/addons/detail/sliit-courseweb-cleaner/gmlodfhgiopjgamoijjffcmgfenkkkhe",
      icon: EdgeIcon,
      badgeText: "Verified on Edge Add-ons Catalog",
    },
    firefox: {
      name: "Firefox",
      label: "Add to Mozilla Firefox",
      shortLabel: "Firefox AMO",
      url: "https://addons.mozilla.org/en-US/firefox/addon/sliit-courseweb-cleaner/",
      icon: FirefoxIcon,
      badgeText: "Verified on Firefox Add-ons (AMO)",
    },
  };

  const currentStore = browserConfigs[detectedBrowser];

  const trustHighlights = [
    {
      icon: Layers,
      title: "Built for SLIIT Moodle",
      desc: "Deep integration with courseweb.sliit.lk DOM structure",
    },
    {
      icon: Filter,
      title: "6 Campus Targeting",
      desc: "Malabe, Metro, Kandy, Kurunegala, Matara, and Jaffna",
    },
    {
      icon: Moon,
      title: "Eye-Friendly Dark Mode",
      desc: "Embedded Dark Reader engine for late-night study sessions",
    },
    {
      icon: Lock,
      title: "100% Private & Client-Side",
      desc: "Zero tracking, zero analytics, open-source under MIT",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] dark:bg-[#0D131A] text-neutral-900 dark:text-neutral-100 selection:bg-gold-500/25 selection:text-navy-950 dark:selection:bg-gold-400/30 dark:selection:text-gold-100 font-sans relative theme-surface-transition">
      {/* Top Navigation */}
      <Navbar
        currentStore={currentStore}
        darkMode={darkMode}
        onSetDarkMode={handleSetDarkMode}
        isScrolled={isScrolled}
      />

      {/* Hero Ambient Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[560px] bg-gradient-to-b from-navy-100/60 via-gold-100/25 to-transparent dark:from-navy-900/40 dark:via-gold-500/5 dark:to-transparent pointer-events-none -z-10 blur-3xl opacity-80" />

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="pt-8 sm:pt-16 md:pt-20 pb-10 sm:pb-16 text-center">
          {/* Top Context Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 text-navy-900 dark:text-gold-400 text-xs font-bold mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600 dark:text-gold-400 shrink-0" />
            <span className="sm:hidden">Tailored for SLIIT Students</span>
            <span className="hidden sm:inline">{currentStore.badgeText}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-navy-950 dark:text-white mb-5 sm:mb-6 max-w-4xl mx-auto leading-[1.12]">
            A clutter-free Courseweb.
            <span className="block text-navy-700 dark:text-gold-400 mt-1">
              Built for SLIIT.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Eliminate irrelevant campus notices, hide expired past-semester
            modules, and study comfortably in eye-friendly dark mode.
          </p>

          {/* Dynamic Browser Install Button & Adaptive Secondary Actions */}
          <div className="flex flex-col items-center justify-center gap-4 mb-10 sm:mb-14">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
              <a
                id="hero-download-btn"
                href={currentStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 rounded-full bg-navy-700 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 text-sm sm:text-base font-bold transition-all shadow-md hover:shadow-lg active:scale-95 border border-navy-600/30 dark:border-gold-400 group"
              >
                <currentStore.icon className="w-5 h-5 transition-transform group-hover:scale-110 shrink-0" />
                <span>{currentStore.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 dark:text-navy-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>

              {/* Mobile Quick-Jump to Live Sandbox (Replaces multi-store desktop clutter on phones) */}
              <a
                href="#interactive-demo"
                className="sm:hidden w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#161F2B] text-navy-950 dark:text-white text-sm font-bold border border-navy-900/15 dark:border-white/15 shadow-xs active:scale-95 transition-all"
              >
                <span>Try Interactive Sandbox</span>
              </a>
            </div>

            {/* Desktop/Tablet Direct Links for Other Browsers & Userscript (Hidden on phones to keep mobile Hero clean) */}
            <div className="hidden sm:flex flex-wrap items-center justify-center gap-3.5 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              <span className="font-medium text-neutral-500 dark:text-neutral-400">
                Also available on:
              </span>

              {detectedBrowser !== "chrome" && (
                <a
                  href={browserConfigs.chrome.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-navy-700/40 dark:hover:border-gold-400/50 font-semibold inline-flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <ChromeIcon className="w-3.5 h-3.5" />
                  <span>Chrome Store</span>
                </a>
              )}

              {detectedBrowser !== "edge" && (
                <a
                  href={browserConfigs.edge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-navy-700/40 dark:hover:border-gold-400/50 font-semibold inline-flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <EdgeIcon className="w-3.5 h-3.5" />
                  <span>Edge Add-ons</span>
                </a>
              )}

              {detectedBrowser !== "firefox" && (
                <a
                  href={browserConfigs.firefox.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-navy-700/40 dark:hover:border-gold-400/50 font-semibold inline-flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <FirefoxIcon className="w-3.5 h-3.5" />
                  <span>Firefox AMO</span>
                </a>
              )}

              <a
                href="#how-it-works"
                className="px-3 py-1 rounded-full bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 text-neutral-700 dark:text-neutral-200 hover:border-navy-700/40 dark:hover:border-gold-400/50 font-semibold inline-flex items-center gap-1.5 transition-all shadow-xs"
              >
                <UserscriptIcon className="w-3.5 h-3.5" />
                <span>Userscript Guide</span>
              </a>
            </div>
          </div>

          {/* Hero Device Mockup Container */}
          <div
            id="HERO_DEVICE_MOCKUP"
            className="relative mx-auto max-w-5xl rounded-[24px] sm:rounded-[40px] bg-gradient-to-b from-navy-100/70 via-white to-gold-100/40 dark:from-white/10 dark:via-white/5 dark:to-gold-500/10 p-2 sm:p-5 md:p-7 shadow-xl border border-navy-900/10 dark:border-white/10 overflow-hidden theme-surface-transition"
          >
            <div className="relative mx-auto rounded-[18px] sm:rounded-[30px] bg-white dark:bg-[#0D131A] p-1.5 sm:p-3 shadow-2xl ring-1 ring-navy-900/10 dark:ring-white/20 theme-surface-transition">
              {/* Mock Browser Window Bar that adapts to Light & Dark Theme */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 mb-1.5 sm:mb-2 rounded-t-[12px] sm:rounded-t-[20px] bg-[#F0F5FA] dark:bg-[#161F2B] border-b border-navy-200/70 dark:border-white/10 text-xs theme-surface-transition">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] font-semibold text-navy-800 dark:text-neutral-300 truncate px-2">
                  courseweb.sliit.lk — Courseweb Cleaner Active
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 hidden sm:inline">
                  Protected
                </span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-[12px] sm:rounded-[22px] bg-[#F8FAFD] dark:bg-neutral-900 border border-navy-900/5 dark:border-white/5">
                <img
                  src="/assets/sliit-courseweb-cleaner-social-preview.png"
                  alt="SLIIT Courseweb Cleaner Interface Mockup"
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Highlights Bar: Compact 2x2 grid on mobile, 4-col bar on desktop */}
        <section className="py-8 sm:py-10 border-y border-navy-900/10 dark:border-white/10 my-2 sm:my-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {trustHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs hover:border-gold-500/40 dark:hover:border-gold-500/40 hover:shadow-sm transition-all theme-surface-transition"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-navy-50 dark:bg-[#0D131A] text-navy-700 dark:text-gold-400 border border-navy-100 dark:border-white/10 flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h2 className="font-bold text-xs sm:text-sm text-navy-950 dark:text-white leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Campus Simulator Sandbox */}
        <CampusSimulator
          siteDarkMode={darkMode}
          onSetSiteDarkMode={handleSetDarkMode}
        />

        {/* Before and After Comparison Section */}
        <ComparisonViewer />

        {/* Key Features & Architecture Tour */}
        <FeatureGrid />

        {/* Feature Comparison Specifications Matrix */}
        <SpecMatrix
          installUrl={currentStore.url}
          installLabel={currentStore.label}
        />

        {/* Student Testimonial Quote */}
        <section className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10">
          <div className="max-w-4xl mx-auto bg-white dark:bg-[#161F2B] rounded-[26px] sm:rounded-[32px] p-6 sm:p-10 md:p-12 border border-navy-900/10 dark:border-white/10 shadow-sm relative overflow-hidden theme-surface-transition">
            {/* Ambient Gold Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-5 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <span
                  className="text-xl sm:text-2xl"
                  role="img"
                  aria-label="Speech bubble"
                >
                  💬
                </span>
                <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-navy-950 dark:text-white">
                  What Students Are Saying
                </h2>
              </div>

              <blockquote className="text-sm sm:text-lg md:text-xl font-normal leading-relaxed text-neutral-800 dark:text-neutral-200 border-l-4 border-gold-500 pl-4 sm:pl-6 my-1 italic">
                "Before using Courseweb Cleaner, checking for lab sheets and
                submission links was an absolute headache, scrolling through
                dozens of links for different campuses and batches just to find
                my group's slot. This extension completely transformed Courseweb
                for me. Clean, fast, and Ghost Mode gives total peace of mind.
                Must-have for every SLIITian!"
              </blockquote>

              <div className="flex items-center gap-3 pt-1">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-navy-900/10 dark:border-white/10 shrink-0">
                  <img
                    src="/assets/testimonial-student.png"
                    alt="Kesaru S., Undergraduate, SLIIT"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-navy-950 dark:text-white">
                    Kesaru S.
                  </div>
                  <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    Undergraduate, SLIIT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works & Installation Steps */}
        <InstallSteps />

        {/* FAQ Section */}
        <FaqSection />

        {/* Final CTA Banner (Visibly adapts between Light & Dark themes) */}
        <section
          id="PHOTO_CTA_BANNER"
          className="my-12 sm:my-16 relative rounded-[26px] sm:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#E6F0FA] via-white to-[#FEF6DF] dark:from-[#161F2B] dark:via-[#121923] dark:to-[#0B1118] text-navy-950 dark:text-white p-7 sm:p-14 md:p-20 text-center shadow-xl border border-navy-200/80 dark:border-white/10 theme-surface-transition"
        >
          {/* Subtle Ambient Gold Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/20 dark:bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5 sm:gap-6">
            {/* Logo Badge Container */}
            <div className="relative inline-flex items-center justify-center p-2.5 sm:p-3 bg-white dark:bg-[#0D131A] rounded-2xl shadow-lg ring-2 ring-navy-900/10 dark:ring-gold-500/30 theme-surface-transition">
              <AppIcon
                size={128}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gold-500 rounded-full border-2 border-white dark:border-[#0D131A] shadow-xs" />
            </div>

            <h2 className="text-2xl sm:text-5xl font-bold tracking-tight text-navy-950 dark:text-white">
              Ready for a cleaner CourseWeb?
            </h2>
            <p className="text-sm sm:text-lg text-neutral-600 dark:text-navy-100/85 leading-relaxed">
              Install the extension today and enjoy a clean, filtered,
              dark-mode-ready study dashboard throughout your academic semester.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mt-1 w-full sm:w-auto">
              <a
                href={currentStore.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-navy-700 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 text-sm sm:text-base font-bold transition-all shadow-lg hover:shadow-navy-700/20 dark:hover:shadow-gold-500/20 active:scale-95"
              >
                <currentStore.icon className="w-5 h-5" />
                <span>{currentStore.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 dark:text-navy-950" />
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-navy-50 dark:bg-white/10 dark:hover:bg-white/15 text-navy-950 dark:text-white text-sm sm:text-base font-semibold border border-navy-200 dark:border-white/20 shadow-xs transition-all active:scale-95"
              >
                <GithubIcon className="w-5 h-5" />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
