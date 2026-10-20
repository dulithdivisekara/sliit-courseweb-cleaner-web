import { useState } from "react";
import {
  Eye,
  EyeOff,
  CheckCircle2,
  ShieldCheck,
  Moon,
  Filter,
} from "lucide-react";

export function ComparisonViewer() {
  const [tab, setTab] = useState<"after" | "before">("after");

  const highlights = [
    {
      icon: Filter,
      title: "Campus noise removed",
      desc: "Filters out announcements from other campuses so you only see what applies to you.",
    },
    {
      icon: Moon,
      title: "Built-in Dark Mode",
      desc: "High-contrast dark theme powered by embedded Dark Reader engine for late-night study.",
    },
    {
      icon: ShieldCheck,
      title: "Notice Protector",
      desc: "Keeps critical exam timetables, postponement notices, and lab reschedule alerts visible.",
    },
    {
      icon: CheckCircle2,
      title: "Archived modules hidden",
      desc: "Cleans up 40+ completed past semester courses to leave only your active modules.",
    },
  ];

  return (
    <section
      id="comparison-preview"
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-5 sm:gap-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
              Visual Comparison
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white tracking-tight">
              See the immediate difference
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg mt-2 max-w-2xl">
              Compare the standard chaotic CourseWeb view against the clean,
              focused interface with the extension enabled.
            </p>
          </div>

          {/* Smooth Sliding Toggle Pill */}
          <div
            role="tablist"
            aria-label="Comparison view selector"
            className="grid grid-cols-2 p-1.5 rounded-2xl bg-navy-100/80 dark:bg-[#161F2B] border border-navy-200/70 dark:border-white/10 w-full sm:w-auto sm:min-w-[460px] relative shadow-xs theme-surface-transition"
          >
            {/* Animated Sliding Active Background */}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] rounded-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                tab === "after"
                  ? "translate-x-0 bg-navy-700 dark:bg-gold-500 shadow-sm"
                  : "translate-x-full bg-navy-800 dark:bg-[#243040] shadow-sm"
              }`}
            />

            <button
              type="button"
              role="tab"
              aria-selected={tab === "after"}
              onClick={() => setTab("after")}
              className={`relative z-10 inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                tab === "after"
                  ? "text-white dark:text-navy-950"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-navy-950 dark:hover:text-white"
              }`}
            >
              <Eye className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">With Cleaner</span>
              <span className="hidden sm:inline">
                With Cleaner (Filtered & Dark)
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={tab === "before"}
              onClick={() => setTab("before")}
              className={`relative z-10 inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors duration-200 cursor-pointer ${
                tab === "before"
                  ? "text-white"
                  : "text-neutral-700 dark:text-neutral-300 hover:text-navy-950 dark:hover:text-white"
              }`}
            >
              <EyeOff className="w-4 h-4 shrink-0" />
              <span className="sm:hidden">Default View</span>
              <span className="hidden sm:inline">
                Default (Unfiltered & Bright)
              </span>
            </button>
          </div>
        </div>

        {/* Browser Window Preview Frame (Adapts cleanly to both Light & Dark site themes) */}
        <div className="w-full rounded-[24px] sm:rounded-[30px] overflow-hidden shadow-xl border border-navy-900/10 dark:border-white/10 bg-white dark:bg-[#161F2B] theme-surface-transition">
          {/* Browser Chrome Status Bar */}
          <div
            className={`px-4 sm:px-6 py-3 border-b flex items-center justify-between gap-3 transition-colors duration-300 ${
              tab === "after"
                ? "bg-[#F0F5FA] dark:bg-[#121820] border-navy-200/80 dark:border-white/10 text-navy-950 dark:text-white"
                : "bg-red-50 dark:bg-red-950/70 border-red-200 dark:border-red-800/50 text-red-950 dark:text-white"
            }`}
          >
            {/* Window Controls (Desktop Only) */}
            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
            </div>

            {/* Active Mode Status Indicator */}
            <div className="flex items-center gap-2 text-xs font-semibold truncate">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  tab === "after"
                    ? "bg-emerald-500 dark:bg-gold-400 animate-pulse"
                    : "bg-red-500 dark:bg-red-400"
                }`}
              />
              {tab === "after" ? (
                <span className="truncate">
                  <strong className="text-navy-800 dark:text-gold-400">
                    Optimized:
                  </strong>{" "}
                  <span className="hidden sm:inline">
                    Filtered to registered batch with Dark Reader theme
                  </span>
                  <span className="sm:hidden">
                    Batch filtered + Dark Reader
                  </span>
                </span>
              ) : (
                <span className="truncate">
                  <strong className="text-red-700 dark:text-red-300">
                    Default Clutter:
                  </strong>{" "}
                  <span className="hidden sm:inline">
                    Unfiltered multi-campus announcements and 40+ past modules
                  </span>
                  <span className="sm:hidden">
                    Unfiltered notices & 40+ modules
                  </span>
                </span>
              )}
            </div>

            {/* Quick Flip Action */}
            <button
              type="button"
              onClick={() => setTab(tab === "after" ? "before" : "after")}
              className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-white/10 hover:bg-navy-50 dark:hover:bg-white/20 text-navy-950 dark:text-white border border-navy-900/10 dark:border-white/10 shrink-0 transition-colors cursor-pointer"
            >
              {tab === "after" ? "Compare Default →" : "← Show Cleaned"}
            </button>
          </div>

          {/* Stacked Smooth Cross-Fade Image Stage */}
          <div className="relative w-full aspect-[16/10] bg-[#F8FAFD] dark:bg-[#0D131A] overflow-hidden p-2 sm:p-4 transition-colors duration-300">
            {/* After Image */}
            <img
              src="/assets/after.png"
              alt="SLIIT CourseWeb after clean filtering and dark mode"
              width={960}
              height={600}
              className={`w-full h-full object-contain rounded-xl sm:rounded-2xl bg-[#181a1b] shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                tab === "after"
                  ? "opacity-100 scale-100 relative z-10"
                  : "opacity-0 scale-[0.985] pointer-events-none absolute inset-0 z-0"
              }`}
              loading="lazy"
            />

            {/* Before Image */}
            <img
              src="/assets/before.png"
              alt="SLIIT CourseWeb before clean filtering"
              width={960}
              height={600}
              className={`w-full h-full object-contain rounded-xl sm:rounded-2xl bg-white shadow-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                tab === "before"
                  ? "opacity-100 scale-100 relative z-10"
                  : "opacity-0 scale-[0.985] pointer-events-none absolute inset-0 z-0"
              }`}
              loading="lazy"
            />
          </div>
        </div>

        {/* Desktop/Tablet Feature Highlight Sub-cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs flex items-start gap-3.5 theme-surface-transition"
              >
                <div className="w-9 h-9 rounded-xl bg-navy-50 dark:bg-[#0D131A] text-navy-700 dark:text-gold-400 border border-navy-100 dark:border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-navy-950 dark:text-white">
                    {h.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
