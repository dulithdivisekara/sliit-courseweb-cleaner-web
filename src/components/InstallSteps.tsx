import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { UserscriptIcon } from "./Icons";

interface InstallStepsProps {
  darkMode: boolean;
}

export function InstallSteps({ darkMode }: InstallStepsProps) {
  const [activeTab, setActiveTab] = useState<"extension" | "userscript">(
    "extension",
  );

  const steps = [
    {
      step: "01",
      title: "Add to Browser",
      desc: "Install the verified extension directly from the Chrome Web Store, Edge Add-ons, or Firefox AMO.",
      image: "/assets/theme/step1-install.webp",
      alt: "Install extension from web store",
    },
    {
      step: "02",
      title: "Open CourseWeb",
      desc: "Log into courseweb.sliit.lk normally. The clean initial setup wizard welcomes you automatically.",
      image: darkMode
        ? "/assets/theme/wizard-dark.webp"
        : "/assets/theme/wizard-light.webp",
      alt: "Open CourseWeb and trigger setup wizard",
    },
    {
      step: "03",
      title: "Select Campus & Batch",
      desc: "Choose your registered campus (Malabe, Metro, Kandy, etc.) and batch. Preferences are saved locally.",
      image: darkMode
        ? "/assets/theme/config-dark.webp"
        : "/assets/theme/config-light.webp",
      alt: "Configure campus and batch preferences",
    },
    {
      step: "04",
      title: "Manage Anytime",
      desc: "Switch themes, toggle Ghost Mode, or adjust batch filters using the toolbar popup or floating gear icon.",
      image: darkMode
        ? "/assets/theme/popup-dark.webp"
        : "/assets/theme/popup-light.webp",
      alt: "Manage extension using toolbar popup or floating settings trigger",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header with Method Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
              Quick Setup
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white tracking-tight">
              Up and running in 30 seconds
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg mt-2 max-w-xl">
              Zero complicated configurations. Install once and enjoy an
              uncluttered learning portal throughout your university journey.
            </p>
          </div>

          {/* Setup Method Switcher */}
          <div
            role="tablist"
            aria-label="Installation method selector"
            className="grid grid-cols-2 p-1.5 rounded-2xl bg-navy-100/80 dark:bg-[#161F2B] border border-navy-200/70 dark:border-white/10 w-full sm:w-auto sm:min-w-[440px] relative shadow-xs"
          >
            <span
              aria-hidden="true"
              className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-xl bg-navy-700 dark:bg-gold-500 shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                activeTab === "extension" ? "translate-x-0" : "translate-x-full"
              }`}
            />

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "extension"}
              onClick={() => setActiveTab("extension")}
              className={`relative z-10 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 ${
                activeTab === "extension"
                  ? "text-white dark:text-navy-950"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-navy-950 dark:hover:text-white"
              }`}
            >
              <span className="sm:hidden">Browser Extension</span>
              <span className="hidden sm:inline">
                Standard Extension (Recommended)
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "userscript"}
              onClick={() => setActiveTab("userscript")}
              className={`relative z-10 inline-flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 ${
                activeTab === "userscript"
                  ? "text-white dark:text-navy-950"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-navy-950 dark:hover:text-white"
              }`}
            >
              <UserscriptIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="sm:hidden">Tampermonkey</span>
              <span className="hidden sm:inline">
                Tampermonkey / Userscript
              </span>
            </button>
          </div>
        </div>

        {activeTab === "extension" ? (
          /* Extension Steps Grid: 4:3 visual cards on mobile, tablet, and desktop */
          <div
            key="tab-extension"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 animate-fade-in"
          >
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-[22px] sm:rounded-[26px] bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 hover:border-gold-500/40 dark:hover:border-gold-500/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-stretch justify-between group theme-surface-transition"
              >
                <div className="w-full aspect-[4/3] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100/80 dark:border-white/10 mb-4 flex items-center justify-center">
                  <img
                    src={st.image}
                    alt={st.alt}
                    width={640}
                    height={480}
                    decoding="async"
                    className={`w-full h-full group-hover:scale-[1.03] transition-transform duration-300 ${
                      idx === 0 ? "object-contain p-2" : "object-cover"
                    }`}
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-mono text-[11px] sm:text-xs font-bold text-navy-800 dark:text-gold-400 bg-gold-500/20 border border-gold-500/30 px-2 py-0.5 rounded-md">
                      STEP {st.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-navy-950 dark:text-white mb-1">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tampermonkey / Userscript Mode Walkthrough */
          <div
            key="tab-userscript"
            className="rounded-[24px] sm:rounded-[28px] bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 p-5 sm:p-10 shadow-sm animate-fade-in theme-surface-transition"
          >
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
                Userscript Installation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy-950 dark:text-white mb-2.5">
                Install via Tampermonkey or Violentmonkey
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Prefer managing browser enhancements through a userscript
                manager? SLIIT Courseweb Cleaner is available as an open-source
                userscript compatible with Chrome, Edge, Firefox, Safari, Orion,
                and mobile browsers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-7">
                <div className="flex flex-col gap-2 p-4 rounded-xl bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100 dark:border-white/10">
                  <span className="w-6 h-6 rounded-full bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h4 className="font-bold text-sm text-navy-950 dark:text-white">
                    Install Script Manager
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Install Tampermonkey or Violentmonkey from your browser web
                    store.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100 dark:border-white/10">
                  <span className="w-6 h-6 rounded-full bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h4 className="font-bold text-sm text-navy-950 dark:text-white">
                    Install the UserScript
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Open the raw `.user.js` script to trigger one-click
                    automatic installation.
                  </p>
                </div>

                <div className="flex flex-col gap-2 p-4 rounded-xl bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100 dark:border-white/10">
                  <span className="w-6 h-6 rounded-full bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h4 className="font-bold text-sm text-navy-950 dark:text-white">
                    Allow User Scripts
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    In Chrome or Edge extension settings, ensure "Allow user
                    scripts" is enabled.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="https://raw.githubusercontent.com/dulithdivisekara/sliit-courseweb-cleaner/main/dist/sliit-courseweb-cleaner.user.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy-700 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 w-full sm:w-auto"
                >
                  <UserscriptIcon className="w-4 h-4" />
                  <span>Install Userscript (.user.js)</span>
                  <ArrowUpRight className="w-4 h-4 text-gold-400 dark:text-navy-950" />
                </a>
                <a
                  href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/USERSCRIPT_INSTALL.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#0D131A] hover:bg-navy-50 dark:hover:bg-[#121820] text-navy-900 dark:text-neutral-200 border border-navy-200 dark:border-white/15 text-xs sm:text-sm font-semibold transition-all w-full sm:w-auto"
                >
                  <span>Read Detailed Userscript Guide</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
