import { Check, X, Sparkles, ArrowUpRight } from "lucide-react";

export function SpecMatrix({
  installUrl,
  installLabel,
}: {
  installUrl: string;
  installLabel: string;
}) {
  const rows = [
    {
      label: "Filter other campus notices",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      noteCleaner: "Recognizes all 6 SLIIT centers",
      noteDefault: "Shows every physical campus notice",
      noteAdblock: "Cannot parse campus tags",
    },
    {
      label: "Hide expired past-semester modules",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      noteCleaner: "Filters out 40+ completed past courses",
      noteDefault: "Cluttered list of all semesters",
      noteAdblock: "Cannot parse Moodle course lists",
    },
    {
      label: "Critical Notice Protector",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      noteCleaner: "Preserves exam timetables & alerts",
      noteDefault: "Notices easily lost in campus feed noise",
      noteAdblock: "Frequently breaks dynamic alerts",
    },
    {
      label: "Night-friendly Dark Theme",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      noteCleaner: "Embedded high-contrast Dark Reader",
      noteDefault: "Harsh blinding white background",
      noteAdblock: "Inverts colors haphazardly",
    },
    {
      label: "Auto-detect Campus and Batch",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: false,
      noteCleaner: "Smart first-run detection wizard",
      noteDefault: "Manual navigation only",
      noteAdblock: "No academic context awareness",
    },
    {
      label: "Zero Telemetry & 100% Client-Side",
      cleaner: true,
      defaultCourseweb: true,
      adBlocker: false,
      noteCleaner: "Zero external tracking or data collection",
      noteDefault: "Official university platform",
      noteAdblock: "Many third-party blockers log telemetry",
    },
    {
      label: "Custom Whitelist and Blacklist",
      cleaner: true,
      defaultCourseweb: false,
      adBlocker: true,
      noteCleaner: "Simple comma-separated keyword rules",
      noteDefault: "No customization available",
      noteAdblock: "Complex CSS selector syntax required",
    },
  ];

  return (
    <section
      id="matrix"
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Intro Column */}
          <div className="lg:col-span-4 flex flex-col gap-3.5 sm:gap-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400">
              Feature Breakdown
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white tracking-tight">
              Why SLIIT students choose Courseweb Cleaner
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
              Default Moodle forces every student across all faculties to share
              the same unorganized feed. Generic adblockers do not understand
              university courses. Courseweb Cleaner is tailored specifically for
              SLIIT.
            </p>

            <div className="pt-1 hidden sm:block">
              <a
                href={installUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy-700 hover:bg-navy-800 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 text-sm font-bold transition-all shadow-sm hover:shadow active:scale-95 border border-navy-600/30 dark:border-gold-400"
              >
                <span>{installLabel}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 dark:text-navy-950" />
              </a>
            </div>
          </div>

          {/* Right Comparison Area */}
          <div className="lg:col-span-8">
            {/* MOBILE VIEW (md:hidden): Clean Mobile List Points */}
            <div className="md:hidden rounded-2xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs divide-y divide-navy-100/70 dark:divide-white/5 overflow-hidden theme-surface-transition">
              {rows.map((r, i) => (
                <div key={i} className="p-3.5 sm:p-4 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/60 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs sm:text-sm font-bold text-navy-950 dark:text-white leading-snug">
                      {r.label}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-300 mt-0.5 leading-relaxed">
                      {r.noteCleaner}
                    </p>
                    <div className="flex items-center gap-2 mt-1.5 text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400">
                      <span className="inline-flex items-center gap-1">
                        {r.defaultCourseweb ? (
                          <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        ) : (
                          <X className="w-3 h-3 text-red-500 dark:text-red-400 shrink-0" />
                        )}
                        <span>Default CourseWeb</span>
                      </span>
                      <span className="text-neutral-300 dark:text-neutral-700">
                        &bull;
                      </span>
                      <span className="inline-flex items-center gap-1">
                        {r.adBlocker ? (
                          <Check className="w-3 h-3 text-amber-600 dark:text-amber-400 shrink-0" />
                        ) : (
                          <X className="w-3 h-3 text-red-500 dark:text-red-400 shrink-0" />
                        )}
                        <span>AdBlockers</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* TABLET & DESKTOP VIEW (hidden md:grid): Full 3-Column Comparison Matrix */}
            <div className="hidden md:grid grid-cols-3 rounded-[28px] bg-navy-50/70 dark:bg-[#121923] p-2.5 sm:p-3 border border-navy-200/80 dark:border-white/10 shadow-sm gap-2.5">
              {/* Column 1: Courseweb Cleaner (Highlighted) */}
              <div className="bg-white dark:bg-[#161F2B] rounded-[22px] p-5 sm:p-6 shadow-md border-2 border-navy-700/25 dark:border-gold-500/35 flex flex-col gap-5 theme-surface-transition">
                <div className="border-b border-navy-100 dark:border-white/10 pb-4">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-navy-900 dark:text-gold-400 text-[11px] font-bold w-fit mb-1.5">
                    <Sparkles className="w-3 h-3 text-gold-600 dark:text-gold-400" />
                    <span>Recommended</span>
                  </div>
                  <span className="font-bold text-lg sm:text-xl text-navy-950 dark:text-white block">
                    Courseweb Cleaner
                  </span>
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium mt-0.5 block">
                    Specialized SLIIT Tool
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {rows.map((r, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-navy-950 dark:text-white">
                          {r.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-700 dark:text-neutral-300 pl-7 leading-tight font-medium">
                        {r.noteCleaner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Default Courseweb */}
              <div className="p-5 sm:p-6 flex flex-col gap-5">
                <div className="border-b border-navy-200/50 dark:border-white/10 pb-4">
                  <span className="font-bold text-lg sm:text-xl text-neutral-700 dark:text-neutral-200 pt-5 block">
                    Default CourseWeb
                  </span>
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium mt-0.5 block">
                    Standard Moodle
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {rows.map((r, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            r.defaultCourseweb
                              ? "bg-navy-100 dark:bg-navy-900/70 text-navy-700 dark:text-gold-400"
                              : "bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                          }`}
                        >
                          {r.defaultCourseweb ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <X className="w-3 h-3" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {r.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-700 dark:text-neutral-300 pl-7 leading-tight font-medium">
                        {r.noteDefault}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 3: Generic Adblockers */}
              <div className="p-5 sm:p-6 flex flex-col gap-5">
                <div className="border-b border-navy-200/50 dark:border-white/10 pb-4">
                  <span className="font-bold text-lg sm:text-xl text-neutral-700 dark:text-neutral-200 pt-5 block">
                    Generic Adblockers
                  </span>
                  <span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium mt-0.5 block">
                    uBlock / AdBlock
                  </span>
                </div>

                <div className="flex flex-col gap-4">
                  {rows.map((r, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                            r.adBlocker
                              ? "bg-navy-100 dark:bg-navy-900/70 text-navy-700 dark:text-gold-400"
                              : "bg-neutral-200/70 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                          }`}
                        >
                          {r.adBlocker ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <X className="w-3 h-3" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                          {r.label}
                        </span>
                      </div>
                      <span className="text-[11px] text-neutral-700 dark:text-neutral-300 pl-7 leading-tight font-medium">
                        {r.noteAdblock}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
