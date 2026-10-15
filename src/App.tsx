import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Check,
  X,
  Menu,
  Sliders,
  Sparkles,
  ShieldCheck,
  RefreshCw,
  Eye,
  EyeOff,
  CheckCircle2,
  Lock,
  Zap,
  Layers,
} from "lucide-react";

function ChromeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/chrome.svg"
      alt="Google Chrome"
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

function EdgeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/edge.svg"
      alt="Microsoft Edge"
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

function FirefoxIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <img
      src="/assets/firefox.svg"
      alt="Mozilla Firefox"
      className={`${className} inline-block shrink-0 object-contain`}
      loading="eager"
    />
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [compareTab, setCompareTab] = useState<"after" | "before">("after");
  const [detectedBrowser, setDetectedBrowser] = useState<
    "chrome" | "edge" | "firefox"
  >("chrome");

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

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const browserConfigs = {
    chrome: {
      name: "Chrome",
      label: "Add to Chrome",
      url: "https://chromewebstore.google.com/detail/sliit-courseweb-cleaner/lnoadlfhebmkhmbfmehdgoffjllgadjm?authuser=0&hl=en-GB",
      icon: ChromeIcon,
    },
    edge: {
      name: "Edge",
      label: "Get for Edge",
      url: "https://microsoftedge.microsoft.com/addons/detail/sliit-courseweb-cleaner/gmlodfhgiopjgamoijjffcmgfenkkkhe",
      icon: EdgeIcon,
    },
    firefox: {
      name: "Firefox",
      label: "Get for Firefox",
      url: "https://addons.mozilla.org/en-US/firefox/addon/sliit-courseweb-cleaner/",
      icon: FirefoxIcon,
    },
  };

  const currentStore = browserConfigs[detectedBrowser];

  const trustHighlights = [
    {
      icon: Layers,
      title: "Dedicated to SLIIT Moodle",
      desc: "Optimized specifically for courseweb.sliit.lk",
    },
    {
      icon: Zap,
      title: "Zero Configuration",
      desc: "Smart auto-detect gets you started instantly",
    },
    {
      icon: Lock,
      title: "100% Private & Client-Side",
      desc: "Runs locally without collecting personal data",
    },
    {
      icon: CheckCircle2,
      title: "Multi-Browser Ready",
      desc: "Chrome, Brave, Edge & Firefox support",
    },
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: "Smart Auto-Detect",
      desc: "Identifies your registered campus and batch on first launch so you get a personalized dashboard in seconds without tedious setup.",
    },
    {
      icon: ShieldCheck,
      title: "Notice Protector",
      desc: "Ensures critical exam notices, lab rescheduling alerts, and faculty-wide shared announcements always stay visible.",
    },
    {
      icon: Sliders,
      title: "Custom Whitelist & Blacklist",
      desc: "Enjoy complete control over your feed. Define comma-separated keywords to filter niche specializations or highlight priority modules.",
    },
    {
      icon: RefreshCw,
      title: "Cloud-Synced Rules",
      desc: "Silently receives updated SLIIT naming conventions and community filtering patterns in the background, keeping rules current.",
    },
  ];

  const featurePoints = [
    {
      id: "01",
      title: "Eliminate Irrelevant Campus Noise:",
      desc: "Never see announcements meant for other physical campuses when studying at your registered location.",
    },
    {
      id: "02",
      title: "Hide Expired Past Semesters:",
      desc: "Keep only your active semester modules front and center. Completed modules stay neatly organized.",
    },
    {
      id: "03",
      title: "Night-Time Dark Mode:",
      desc: "Toggle a clean, high-contrast dark theme that reduces eye strain during late-night study sessions.",
    },
    {
      id: "04",
      title: "100% Client-Side Privacy:",
      desc: "Runs entirely in your local browser sandbox. Never reads student credentials, personal data, or passwords.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Add to Browser",
      desc: "Install the extension with a single click from the official web store.",
      image: "/assets/step1-install.png",
      photoId: "PHOTO_STEP_1",
    },
    {
      num: "02",
      title: "Open SLIIT CourseWeb",
      desc: "Log in to courseweb.sliit.lk normally. The clean setup wizard greets you on first visit.",
      image: "/assets/step3-configure.png",
      photoId: "PHOTO_STEP_2",
    },
    {
      num: "03",
      title: "Set Campus & Batch",
      desc: "Choose your campus and batch once. The extension locks in your preferences seamlessly.",
      image: "/assets/step4-apply.png",
      photoId: "PHOTO_STEP_3",
    },
    {
      num: "04",
      title: "Manage Anytime",
      desc: "Easily tweak filters or switch themes using the floating control icon on the right.",
      image: "/assets/step5-settings-icon.png",
      photoId: "PHOTO_STEP_4",
    },
  ];

  const specRows = [
    {
      label: "Filter other campus announcements",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      subDef: "Shows every campus notice",
      subAd: "Blocks raw ads only",
    },
    {
      label: "Hide expired past-semester modules",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      subDef: "Cluttered 40+ module list",
      subAd: "Cannot parse Moodle",
    },
    {
      label: "Critical Notice Protector",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      subDef: "Easily lost in feed noise",
      subAd: "May hide crucial notices",
    },
    {
      label: "Night-friendly Dark Theme",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      subDef: "Harsh white background",
      subAd: "Inverts colors haphazardly",
    },
    {
      label: "Auto-detect Campus & Batch",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      subDef: "Manual navigation only",
      subAd: "No context awareness",
    },
    {
      label: "100% Private (No data collection)",
      cleaner: true,
      defaultCourseweb: true,
      adBlocker: false,
      subDef: "Official SLIIT portal",
      subAd: "Third-party analytics",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFD] text-neutral-900 selection:bg-gold-500/25 selection:text-navy-950 font-sans relative">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#F8FAFD]/90 backdrop-blur-md border-b border-navy-900/10 transition-all">
        <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/icon_48.png"
                alt="SLIIT Courseweb Cleaner Logo"
                className="w-8 h-8 rounded-lg shadow-sm border border-navy-900/10 transition-transform group-hover:scale-105"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gold-500 rounded-full border-2 border-white"></span>
            </div>
            <span className="font-bold text-xl tracking-tight text-navy-950">
              Courseweb Cleaner
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-neutral-600">
            <a
              href="#benefits"
              className="hover:text-navy-700 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#comparison-preview"
              className="hover:text-navy-700 transition-colors"
            >
              Comparison
            </a>
            <a
              href="#features"
              className="hover:text-navy-700 transition-colors"
            >
              Features
            </a>
            <a href="#matrix" className="hover:text-navy-700 transition-colors">
              Specifications
            </a>
            <a
              href="#how-it-works"
              className="hover:text-navy-700 transition-colors"
            >
              How-to
            </a>
            <a
              href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
              target="_blank"
              rel="noreferrer"
              className="hover:text-navy-700 transition-colors inline-flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Dynamic Browser Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={currentStore.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy-700 hover:bg-navy-800 text-white text-[14px] font-medium transition-all shadow-sm hover:shadow active:scale-95 border border-navy-600/30"
            >
              <currentStore.icon className="w-4 h-4" />
              <span>{currentStore.label}</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-navy-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-6 pt-2 pb-6 bg-[#F8FAFD] border-b border-navy-900/10 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-4 text-base font-medium text-neutral-700 pt-2">
              <a
                href="#benefits"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-navy-700"
              >
                Benefits
              </a>
              <a
                href="#comparison-preview"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-navy-700"
              >
                Comparison
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-navy-700"
              >
                Features
              </a>
              <a
                href="#matrix"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-navy-700"
              >
                Specifications
              </a>
              <a
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-navy-700"
              >
                How-to
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
                target="_blank"
                rel="noreferrer"
                className="py-1 hover:text-navy-700 inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={currentStore.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-navy-700 text-white text-sm font-medium border border-navy-600/30"
              >
                <currentStore.icon className="w-4 h-4" />
                <span>{currentStore.label}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Ambient Background Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[520px] bg-gradient-to-b from-navy-100/40 via-gold-100/20 to-transparent pointer-events-none -z-10 blur-3xl opacity-70" />

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <section className="pt-16 sm:pt-20 pb-16 text-center">
          {/* Subtle Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-navy-900 text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Tailored for SLIIT Students</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-navy-950 mb-6 max-w-4xl mx-auto leading-tight">
            A clutter-free Courseweb.
            <span className="block text-navy-700 mt-1">Built for SLIIT.</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automatically filter irrelevant campus announcements, hide past
            semester modules, and focus strictly on your studies.
          </p>

          {/* Dynamic Browser Install Button */}
          <div className="flex flex-col items-center justify-center gap-3 mb-14">
            <a
              href={currentStore.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy-700 hover:bg-navy-800 text-white text-base font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 border border-navy-600/30 group"
            >
              <currentStore.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>{currentStore.label}</span>
              <ArrowUpRight className="w-4 h-4 text-gold-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Direct links for other browsers */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500 mt-1">
              <span>Also available for:</span>
              {detectedBrowser !== "chrome" && (
                <a
                  href={browserConfigs.chrome.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-navy-700 font-medium underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                >
                  <ChromeIcon className="w-3.5 h-3.5" />
                  <span>Chrome</span>
                </a>
              )}
              {detectedBrowser !== "edge" && (
                <a
                  href={browserConfigs.edge.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-navy-700 font-medium underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                >
                  <EdgeIcon className="w-3.5 h-3.5" />
                  <span>Edge</span>
                </a>
              )}
              {detectedBrowser !== "firefox" && (
                <a
                  href={browserConfigs.firefox.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-700 hover:text-navy-700 font-medium underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                >
                  <FirefoxIcon className="w-3.5 h-3.5" />
                  <span>Firefox</span>
                </a>
              )}
            </div>
          </div>

          {/* Hero Device Mockup Container */}
          <div
            id="HERO_DEVICE_MOCKUP"
            className="relative mx-auto max-w-5xl rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-navy-900/10 via-navy-900/5 to-gold-500/10 p-3 sm:p-6 md:p-8 shadow-xl border border-navy-900/10 overflow-hidden"
          >
            <div className="relative mx-auto rounded-[20px] sm:rounded-[28px] bg-navy-950 p-2 sm:p-3 shadow-2xl ring-1 ring-white/20">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] sm:rounded-[20px] bg-neutral-900">
                <img
                  src="/assets/sliit-courseweb-cleaner-social-preview.png"
                  alt="SLIIT Courseweb Cleaner Interface Mockup"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature & Trust Highlights Bar */}
        <section className="py-12 border-y border-navy-900/10 my-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-navy-900/10 shadow-xs hover:border-gold-500/40 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy-700 border border-navy-100 flex items-center justify-center shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4 text-navy-700" />
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-navy-950">
                      {item.title}
                    </h2>
                    <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Comparison Preview Section */}
        <section id="comparison-preview" className="py-16 sm:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-navy-700 mb-2 block">
                The Difference
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-950 mb-3">
                See it in action.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 max-w-xl">
                Compare the default chaotic CourseWeb against your personalized,
                distraction-free dashboard.
              </p>
            </div>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-navy-100/70 border border-navy-200/50 self-start sm:self-auto">
              <button
                onClick={() => setCompareTab("after")}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  compareTab === "after"
                    ? "bg-navy-700 text-white shadow-sm ring-1 ring-navy-800"
                    : "text-neutral-700 hover:text-navy-950"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>After (Cleaned)</span>
              </button>
              <button
                onClick={() => setCompareTab("before")}
                className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  compareTab === "before"
                    ? "bg-neutral-800 text-white shadow-sm"
                    : "text-neutral-700 hover:text-navy-950"
                }`}
              >
                <EyeOff className="w-4 h-4" />
                <span>Before (Default)</span>
              </button>
            </div>
          </div>

          {/* Interactive Screen Preview Container */}
          <div className="w-full rounded-[30px] overflow-hidden shadow-xl border border-navy-900/10 bg-white aspect-[16/10] sm:aspect-[16/9] relative transition-all">
            {compareTab === "after" ? (
              <div className="w-full h-full relative animate-in fade-in duration-300">
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-navy-700 text-white text-xs font-bold shadow-md flex items-center gap-2 border border-navy-600/30">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
                  <span>With Extension: Personalized & Filtered</span>
                </div>
                <img
                  src="/assets/after.png"
                  alt="CourseWeb after clean filtering"
                  className="w-full h-full object-contain bg-neutral-50"
                />
              </div>
            ) : (
              <div className="w-full h-full relative animate-in fade-in duration-300">
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-200"></span>
                  <span>Default: Unfiltered Campus Overload</span>
                </div>
                <img
                  src="/assets/before.png"
                  alt="CourseWeb before clean filtering"
                  className="w-full h-full object-contain bg-neutral-100"
                />
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="py-16 sm:py-20 border-t border-navy-900/10"
        >
          <div className="mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-navy-700 mb-3 block">
              Core Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy-950 mb-4">
              Designed around student reality.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              Engineered specifically for SLIIT Moodle to stop wasted time and
              prevent missing important deadlines.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-3 p-6 rounded-2xl bg-white border border-navy-900/10 shadow-sm hover:border-gold-500/50 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-700 border border-navy-100 flex items-center justify-center mb-1 group-hover:bg-gold-500/20 group-hover:text-navy-900 transition-colors">
                    <IconComp className="w-5 h-5 text-navy-700 group-hover:text-navy-900 transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-navy-950">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Deep-Dive Section */}
        <section
          id="features"
          className="py-16 sm:py-24 border-t border-navy-900/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-navy-700 mb-2 block">
                  Fine-Tuned Control
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-950 mb-4">
                  Everything you need in one clean tool
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Tailored specifically for SLIIT Moodle with zero setup
                  friction, automatic campus recognition, and total
                  customization.
                </p>
              </div>

              {/* Numbered Points */}
              <div className="flex flex-col gap-4 my-2">
                {featurePoints.map((pt, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-sm font-bold text-navy-900 bg-gold-500/20 border border-gold-500/40 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">
                      {pt.id}
                    </span>
                    <p className="text-[15px] leading-relaxed text-navy-950">
                      <span className="font-bold">{pt.title}</span>{" "}
                      <span className="text-neutral-600">{pt.desc}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={currentStore.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 border border-navy-200/80 text-sm font-bold transition-all shadow-xs active:scale-95"
                >
                  <currentStore.icon className="w-4 h-4" />
                  <span>{currentStore.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-navy-700" />
                </a>
              </div>
            </div>

            {/* Right Showcase Card */}
            <div id="PHOTO_FEATURE_DASHBOARD" className="lg:col-span-7">
              <div className="rounded-[30px] overflow-hidden shadow-lg border border-navy-900/10 bg-white p-3 aspect-[4/3] flex items-center justify-center">
                <img
                  src="/assets/config-modal.png"
                  alt="Settings and customization configuration modal"
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Tour Grid */}
        <section className="py-16 border-t border-navy-900/10">
          <div className="mb-10 text-center">
            <span className="text-xs font-bold tracking-widest uppercase text-navy-700 mb-2 block">
              Feature Tour
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
              Thoughtfully crafted student tools.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              id="EDITORIAL_CARD_1"
              className="rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-navy-900/10 hover:border-gold-500/40 bg-white p-4 flex flex-col gap-3 group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-50/50 border border-navy-100/50">
                <img
                  src="/assets/config-modal.png"
                  alt="Welcome and setup modal"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Initial Setup Wizard
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Select campus and batch filters on first run with double-lock
                protection.
              </p>
            </div>

            {/* Card 2 */}
            <div
              id="EDITORIAL_CARD_2"
              className="rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-navy-900/10 hover:border-gold-500/40 bg-white p-4 flex flex-col gap-3 group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-50/50 border border-navy-100/50">
                <img
                  src="/assets/settings-tab.png"
                  alt="Preferences and filter settings panel"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Dedicated Preferences Tab
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Quickly toggle Dark Mode, adjust custom Whitelists, or reset
                filter rules.
              </p>
            </div>

            {/* Card 3 */}
            <div
              id="EDITORIAL_CARD_3"
              className="rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-all border border-navy-900/10 hover:border-gold-500/40 bg-white p-4 flex flex-col gap-3 sm:col-span-2 lg:col-span-1 group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-50/50 border border-navy-100/50">
                <img
                  src="/assets/step5-settings-icon.png"
                  alt="Floating settings trigger icon"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-base text-navy-950">
                Floating Fast Access
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                A discreet icon anchored on CourseWeb gives you instant filter
                access anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Specifications Matrix Table */}
        <section
          id="matrix"
          className="py-16 sm:py-24 border-t border-navy-900/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Header / Intro */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs font-bold tracking-widest uppercase text-navy-700">
                Specifications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
                Why Students Choose Courseweb Cleaner
              </h2>
              <p className="text-neutral-600 text-[15px] leading-relaxed">
                Default Moodle forces everyone to see everything. See how our
                extension streamlines your daily academic portal.
              </p>
              <div className="pt-2">
                <a
                  href={currentStore.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 border border-navy-200/80 text-sm font-bold transition-all shadow-xs active:scale-95"
                >
                  <currentStore.icon className="w-4 h-4" />
                  <span>{currentStore.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-navy-700" />
                </a>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="lg:col-span-8 overflow-x-auto">
              <div className="min-w-[620px] grid grid-cols-3 rounded-[24px] bg-navy-50/60 p-2 sm:p-4 border border-navy-200/80 shadow-sm gap-2">
                {/* Column 1: Courseweb Cleaner (Highlighted) */}
                <div className="bg-white rounded-[20px] p-5 sm:p-6 shadow-md border-2 border-navy-700/25 flex flex-col gap-5 relative">
                  <div className="border-b border-navy-100 pb-4">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-navy-900 text-[11px] font-bold w-fit mb-1.5">
                      <Sparkles className="w-3 h-3 text-gold-600" />
                      <span>Recommended</span>
                    </div>
                    <span className="font-bold text-lg sm:text-xl text-navy-950 block">
                      Courseweb Cleaner
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {specRows.map((r, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-gold-500/25 border border-gold-500/40 text-navy-900 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-navy-950">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Default Courseweb */}
                <div className="p-5 sm:p-6 flex flex-col gap-5">
                  <div className="border-b border-navy-200/40 pb-4">
                    <span className="font-bold text-lg sm:text-xl text-neutral-600 pt-5 block">
                      Default CourseWeb
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {specRows.map((r, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${r.defaultCourseweb ? "text-navy-700 bg-navy-100" : "text-neutral-400"}`}
                        >
                          {r.defaultCourseweb ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <X className="w-3.5 h-3.5 text-neutral-400" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-600">
                          {r.subDef}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Generic Adblockers */}
                <div className="p-5 sm:p-6 flex flex-col gap-5">
                  <div className="border-b border-navy-200/40 pb-4">
                    <span className="font-bold text-lg sm:text-xl text-neutral-600 pt-5 block">
                      Generic Adblockers
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {specRows.map((r, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-neutral-400">
                          <X className="w-3.5 h-3.5 text-neutral-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-600">
                          {r.subAd}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Testimonial Section */}
        <section className="py-16 sm:py-24 border-t border-navy-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-[32px] p-6 sm:p-10 md:p-14 border border-navy-900/10 shadow-sm relative overflow-hidden">
            {/* Ambient Gold Corner Glow */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

            {/* Student Avatar / Photo */}
            <div
              id="PHOTO_TESTIMONIAL_STUDENT"
              className="lg:col-span-4 aspect-square rounded-[24px] overflow-hidden shadow-md bg-neutral-100 border border-navy-900/10"
            >
              <img
                src="/assets/testimonial-student.png"
                alt="SLIIT Student"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote */}
            <div className="lg:col-span-8 flex flex-col gap-6 lg:pl-4 relative z-10">
              <span className="text-5xl text-gold-500 font-serif leading-none select-none">
                “
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-navy-950 tracking-tight">
                CourseWeb went from chaotic notice overload to just the modules
                I need. Clean, fast, and saves time every single day.
              </p>
              <div>
                <div className="font-bold text-lg text-navy-950">
                  Software Engineering Student
                </div>
                <div className="text-sm font-semibold text-navy-700 tracking-wide">
                  SLIIT Faculty of Computing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="py-16 sm:py-24 border-t border-navy-900/10"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-navy-700 mb-2 block">
                Quick Start
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-950">
                Up and running in 30 seconds
              </h2>
            </div>
            <a
              href={currentStore.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-50 hover:bg-navy-100 text-navy-900 border border-navy-200/80 text-sm font-bold transition-all shadow-xs w-fit active:scale-95"
            >
              <currentStore.icon className="w-4 h-4" />
              <span>{currentStore.label}</span>
              <ArrowUpRight className="w-4 h-4 text-navy-700" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                id={st.photoId}
                className="p-6 rounded-[24px] bg-white border border-navy-900/10 hover:border-gold-500/40 shadow-sm flex flex-col gap-4 transition-all group"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-navy-50/40 border border-navy-100/60 p-2 flex items-center justify-center">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-navy-700 group-hover:text-gold-600 transition-colors">
                  {st.num}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-navy-950">
                    {st.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Banner */}
        <section
          id="PHOTO_CTA_BANNER"
          className="my-16 relative rounded-[32px] overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-[#071828] text-white p-8 sm:p-14 md:p-20 text-center shadow-2xl border border-navy-700/50"
        >
          {/* Subtle Ambient Gold Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <div className="relative">
              <img
                src="/assets/icon_48.png"
                alt="Courseweb Cleaner Icon"
                className="w-14 h-14 rounded-2xl shadow-lg border border-white/20"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold-500 rounded-full border-2 border-navy-900"></span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Ready for a cleaner CourseWeb?
            </h2>
            <p className="text-base sm:text-lg text-navy-100/80 leading-relaxed">
              Install the extension and enjoy a streamlined, dark-mode-ready
              study portal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <a
                href={currentStore.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-400 text-navy-950 text-base font-bold transition-all shadow-lg hover:shadow-gold-500/20 hover:shadow-xl active:scale-95"
              >
                <currentStore.icon className="w-5 h-5" />
                <span>{currentStore.label}</span>
                <ArrowUpRight className="w-4 h-4 text-navy-950" />
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white text-base font-semibold border border-white/20 transition-all active:scale-95"
              >
                <GithubIcon className="w-5 h-5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Professional Multi-Column Footer */}
      <footer className="border-t border-navy-900/10 bg-white/70 pt-16 pb-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
            {/* Column 1: Brand & Description */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/icon_48.png"
                  alt="Logo"
                  className="w-7 h-7 rounded-lg border border-navy-900/10"
                />
                <span className="font-bold text-lg text-navy-950">
                  Courseweb Cleaner
                </span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
                A distraction-free Moodle experience tailored for SLIIT
                students. Eliminates clutter and keeps learning focused.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="md:col-span-4 flex flex-col gap-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-navy-950">
                Product
              </h3>
              <div className="flex flex-col gap-2.5 text-sm text-neutral-600">
                <a
                  href="#benefits"
                  className="hover:text-navy-700 transition-colors"
                >
                  Benefits
                </a>
                <a
                  href="#comparison-preview"
                  className="hover:text-navy-700 transition-colors"
                >
                  Comparison
                </a>
                <a
                  href="#features"
                  className="hover:text-navy-700 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#matrix"
                  className="hover:text-navy-700 transition-colors"
                >
                  Specifications
                </a>
                <a
                  href="#how-it-works"
                  className="hover:text-navy-700 transition-colors"
                >
                  How It Works
                </a>
              </div>
            </div>

            {/* Column 3: Resources & External */}
            <div className="md:col-span-3 flex flex-col gap-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-navy-950">
                Resources
              </h3>
              <div className="flex flex-col gap-2.5 text-sm text-neutral-600">
                <a
                  href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/privacy-policy.md"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-navy-700 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-navy-700 transition-colors"
                >
                  Extension Repo
                </a>
                <a
                  href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner-web"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-navy-700 transition-colors"
                >
                  Website Repo
                </a>
                <a
                  href="https://courseweb.sliit.lk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-navy-700 transition-colors"
                >
                  SLIIT CourseWeb Portal
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Credit Row */}
          <div className="border-t border-navy-900/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              &copy; {new Date().getFullYear()} SLIIT Courseweb Cleaner. All
              rights reserved.
            </div>
            <div>
              Project by{" "}
              <a
                href="https://dulith.me"
                target="_blank"
                rel="noreferrer"
                className="text-navy-800 hover:text-gold-600 font-semibold underline underline-offset-2 transition-colors"
              >
                Dulith Divisekara (dulith.me)
              </a>
              . Independent student utility not affiliated with SLIIT.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
