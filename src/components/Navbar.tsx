import { useState, useEffect, type ComponentType } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { AppIcon, TelegramIcon } from "./Icons";

const NAV_LINKS = [
  {
    href: "#interactive-demo",
    id: "interactive-demo",
    label: "Sandbox",
    mobileLabel: "Interactive Sandbox",
  },
  {
    href: "#comparison-preview",
    id: "comparison-preview",
    label: "Comparison",
    mobileLabel: "Before & After",
  },
  {
    href: "#features",
    id: "features",
    label: "Features",
    mobileLabel: "Key Features",
  },
  {
    href: "#matrix",
    id: "matrix",
    label: "Specs",
    mobileLabel: "Specifications",
  },
  {
    href: "#how-it-works",
    id: "how-it-works",
    label: "Setup",
    mobileLabel: "Setup Guide",
  },
  {
    href: "#faq",
    id: "faq",
    label: "FAQ",
    mobileLabel: "Student FAQ",
  },
];

export function Navbar({
  currentStore,
  darkMode,
  onSetDarkMode,
  isScrolled,
}: {
  currentStore: {
    name: string;
    label: string;
    shortLabel: string;
    url: string;
    icon: ComponentType<{ className?: string }>;
  };
  darkMode: boolean;
  onSetDarkMode: (val: boolean) => void;
  isScrolled: boolean;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const StoreIcon = currentStore.icon;

  const storeActionLabel =
    currentStore.name === "Chrome" ? "Add to Chrome" : currentStore.shortLabel;

  // Close mobile drawer automatically on desktop resize or Escape key
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Scroll-spy to highlight active navigation section smoothly
  useEffect(() => {
    const handleScrollSpy = () => {
      if (window.scrollY < 260) {
        setActiveSection("");
        return;
      }
      const viewportOffset = 180;
      let current = "";
      for (const item of NAV_LINKS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportOffset && rect.bottom > 100) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[#0D131A]/95 border-b border-navy-900/10 dark:border-white/10 shadow-xs py-2.5"
          : "bg-[#F8FAFD]/90 dark:bg-[#0D131A]/90 border-b border-navy-900/10 dark:border-white/10 py-3"
      }`}
    >
      {/* 3-Column Symmetrical Grid on Desktop (1fr | auto | 1fr) guarantees dead-center nav without overlap */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-3">
        {/* Left Column: Brand Logo */}
        <div className="flex items-center justify-start min-w-0 shrink-0">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative p-1 bg-white dark:bg-[#161F2B] rounded-xl border border-navy-900/10 dark:border-white/10 shadow-xs flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
              <AppIcon size={48} className="w-7 h-7 object-contain" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-gold-500 rounded-full border-2 border-white dark:border-[#161F2B]" />
            </div>
            <span className="font-bold text-base sm:text-[17px] tracking-tight text-navy-950 dark:text-white whitespace-nowrap group-hover:text-navy-700 dark:group-hover:text-gold-400 transition-colors">
              Courseweb Cleaner
            </span>
          </a>
        </div>

        {/* Center Column: Desktop Navigation Links (Strictly centered via CSS Grid column 2) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:inline-flex items-center justify-center justify-self-center gap-0.5 xl:gap-1 p-1 rounded-full bg-navy-900/[0.04] dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 xl:px-3.5 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap text-center transition-all duration-200 ${
                  isActive
                    ? "bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 shadow-xs"
                    : "text-neutral-700 dark:text-neutral-300 hover:text-navy-950 dark:hover:text-white hover:bg-white/80 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Column: Theme Controls & Adaptive Action Buttons */}
        <div className="flex items-center justify-end justify-self-end gap-2 shrink-0">
          {/* Desktop / Tablet Segmented Theme Pill with Smooth Sliding Thumb (sm and up) */}
          <div
            role="group"
            aria-label="Theme selection"
            className="hidden sm:grid grid-cols-2 items-center p-1 rounded-full bg-navy-100/80 dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs h-9 w-[136px] relative overflow-hidden shrink-0"
          >
            {/* Animated Sliding Background Pill */}
            <span
              aria-hidden="true"
              className={` pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                darkMode
                  ? "translate-x-full bg-gold-500 shadow-sm"
                  : "translate-x-0 bg-white shadow-sm ring-1 ring-navy-900/10"
              }`}
            />

            <button
              type="button"
              onClick={() => onSetDarkMode(false)}
              aria-pressed={!darkMode}
              className={`relative z-10 h-7 flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer ${
                !darkMode
                  ? "text-navy-950"
                  : "text-neutral-400 hover:text-white"
              }`}
              title="Switch to Light theme"
            >
              <Sun
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${
                  !darkMode
                    ? "text-amber-500 rotate-0 scale-105"
                    : "text-neutral-400 -rotate-45 scale-95"
                }`}
              />
              <span>Light</span>
            </button>

            <button
              type="button"
              onClick={() => onSetDarkMode(true)}
              aria-pressed={darkMode}
              className={`relative z-10 h-7 flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors duration-200 cursor-pointer ${
                darkMode
                  ? "text-navy-950"
                  : "text-neutral-600 hover:text-navy-950"
              }`}
              title="Switch to Dark theme"
            >
              <Moon
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${
                  darkMode
                    ? "text-navy-950 rotate-0 scale-105"
                    : "text-navy-700 rotate-12 scale-95"
                }`}
              />
              <span>Dark</span>
            </button>
          </div>

          {/* Mobile Single-Tap Animated Theme Morph Button (< sm) */}
          <button
            type="button"
            onClick={() => onSetDarkMode(!darkMode)}
            aria-label={
              darkMode ? "Switch to light theme" : "Switch to dark theme"
            }
            className="sm:hidden relative w-9 h-9 rounded-xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/15 shadow-xs flex items-center justify-center text-navy-900 dark:text-gold-400 active:scale-90 transition-all cursor-pointer"
          >
            <Sun
              className={`w-4 h-4 text-amber-500 absolute transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                darkMode
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <Moon
              className={`w-4 h-4 text-gold-400 absolute transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                darkMode
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
            />
          </button>

          {/* Dynamic Desktop Action Slot: Smooth Vertical Slide & Cross-Fade */}
          <div className="hidden md:block relative h-9 w-[156px] xl:w-[184px] overflow-hidden rounded-full shrink-0">
            {/* Telegram Contact Button (Initial Top View) */}
            <a
              href="https://t.me/dulithdivisekara"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via Telegram"
              tabIndex={isScrolled ? -1 : 0}
              className={`absolute inset-0 h-9 inline-flex items-center justify-center gap-1.5 px-3 rounded-full border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-xs font-bold ${
                !isScrolled
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto bg-white dark:bg-[#161F2B] text-navy-950 dark:text-white border-navy-900/15 dark:border-white/15 hover:border-[#229ED9]/60 dark:hover:border-[#229ED9]/60 shadow-xs"
                  : "opacity-0 -translate-y-3 scale-95 pointer-events-none bg-white dark:bg-[#161F2B] text-navy-950 dark:text-white border-navy-900/10 dark:border-white/10"
              }`}
            >
              <TelegramIcon className="w-3.5 h-3.5 text-[#229ED9] shrink-0" />
              <span className="xl:hidden">Telegram</span>
              <span className="hidden xl:inline">Contact via Telegram</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            </a>

            {/* Browser Store Download Button (Scrolled View) */}
            <a
              href={currentStore.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={currentStore.label}
              tabIndex={isScrolled ? 0 : -1}
              className={`absolute inset-0 h-9 inline-flex items-center justify-center gap-1.5 px-3 rounded-full border transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-xs font-bold ${
                isScrolled
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto bg-navy-700 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 border-navy-600/30 dark:border-gold-400 shadow-xs"
                  : "opacity-0 translate-y-3 scale-95 pointer-events-none bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 border-navy-600/30 dark:border-gold-400"
              }`}
            >
              <StoreIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{storeActionLabel}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-400 dark:text-navy-950 shrink-0" />
            </a>
          </div>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="lg:hidden relative w-9 h-9 rounded-xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/15 shadow-xs flex items-center justify-center text-navy-950 dark:text-white active:scale-90 transition-all focus:outline-none cursor-pointer"
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-200 ${
                mobileMenuOpen
                  ? "opacity-0 rotate-90 scale-50"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-200 ${
                mobileMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Smooth Animated Mobile Drawer */}
      <div
        className={`lg:hidden grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 pt-2"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pt-2 pb-5 bg-[#F8FAFD] dark:bg-[#0D131A] border-t border-navy-900/10 dark:border-white/10">
            <nav className="grid grid-cols-2 gap-2 pt-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 shadow-xs"
                        : "bg-white dark:bg-[#161F2B] text-navy-950 dark:text-neutral-200 border border-navy-900/10 dark:border-white/10 hover:border-gold-500/40"
                    }`}
                  >
                    <span>{link.mobileLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                  </a>
                );
              })}
            </nav>

            {/* Mobile Appearance Switcher Row */}
            <div className="flex items-center justify-between py-3 px-3.5 rounded-2xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 mt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
                Theme Mode
              </span>
              <div className="grid grid-cols-2 items-center p-1 rounded-full bg-navy-100/80 dark:bg-[#0D131A] border border-navy-900/10 dark:border-white/10 w-[140px] relative">
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    darkMode
                      ? "translate-x-full bg-gold-500 shadow-xs"
                      : "translate-x-0 bg-white shadow-xs ring-1 ring-navy-900/10"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => onSetDarkMode(false)}
                  className={`relative z-10 h-7 flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    !darkMode ? "text-navy-950" : "text-neutral-400"
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSetDarkMode(true)}
                  className={`relative z-10 h-7 flex items-center justify-center gap-1 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    darkMode ? "text-navy-950" : "text-neutral-600"
                  }`}
                >
                  <Moon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      darkMode ? "text-navy-950" : "text-navy-700"
                    }`}
                  />
                  <span>Dark</span>
                </button>
              </div>
            </div>

            {/* Mobile Primary & Contact CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
              <a
                href={currentStore.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 text-sm font-bold border border-navy-600/30 dark:border-gold-400 shadow-xs active:scale-95 transition-transform"
              >
                <StoreIcon className="w-4 h-4 shrink-0" />
                <span>{currentStore.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 dark:text-navy-950 shrink-0" />
              </a>
              <a
                href="https://t.me/dulithdivisekara"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#161F2B] text-navy-950 dark:text-white text-sm font-semibold border border-navy-900/10 dark:border-white/10 shadow-xs active:scale-95 transition-transform"
              >
                <TelegramIcon className="w-4 h-4 text-[#229ED9] shrink-0" />
                <span>Contact via Telegram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
