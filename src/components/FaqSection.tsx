import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Will this extension hide my exam timetables or urgent faculty notices?",
      a: "No. The extension features a built-in Notice Protector. It evaluates announcements and guarantees that critical university notices (including final and mid-semester exam timetables, emergency campus alerts, and course rescheduling notices) always remain visible regardless of your campus filter settings.",
    },
    {
      q: "Does it support Chromium browsers like Brave, Arc, and Vivaldi?",
      a: "Yes. The extension is published on the official Chrome Web Store, making it directly compatible with Google Chrome, Brave, Arc, Vivaldi, and other Chromium-based browsers without any extra configuration.",
    },
    {
      q: "Does the extension read my student login or personal academic data?",
      a: "Never. The extension operates 100% client-side in your local browser sandbox. It has zero analytics trackers, zero telemetry, and never accesses your password, student ID, or submitted assignments. The entire codebase is open-source on GitHub for anyone to audit.",
    },
    {
      q: "How do I switch batches or semesters when starting a new academic year?",
      a: "Whenever your semester changes, click the discreet floating settings gear icon on CourseWeb. You can choose your new batch, update your specialization, or define custom keyword whitelists. The settings take effect immediately.",
    },
    {
      q: "How does the Dark Mode theme work?",
      a: "The dark mode uses an embedded Dark Reader rendering engine optimized specifically for Moodle. It produces high-contrast, eye-friendly dark styling across your dashboard, lecture notes, and assignment submission portals without washing out diagrams or slide graphics.",
    },
    {
      q: "Is this utility officially affiliated with SLIIT?",
      a: "SLIIT Courseweb Cleaner is an independent open-source project created by student alumni to solve real everyday usability challenges on CourseWeb. It is not officially created or maintained by the SLIIT administration.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
              Support & Privacy
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white tracking-tight">
              Frequently asked student questions
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-2">
              Everything you need to know about privacy, browser compatibility,
              and notice protection.
            </p>
          </div>

          {/* Smooth Animated Accordion List */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border bg-white dark:bg-[#161F2B] overflow-hidden shadow-xs transition-all duration-200 ${
                    isOpen
                      ? "border-navy-700/30 dark:border-gold-500/40 shadow-sm"
                      : "border-navy-900/10 dark:border-white/10 hover:border-navy-900/20 dark:hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-navy-950 dark:text-white flex items-center justify-between gap-4 hover:text-navy-700 dark:hover:text-gold-400 transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-navy-50 dark:bg-gold-500/15 rotate-180 text-navy-800 dark:text-gold-400"
                          : "bg-neutral-100 dark:bg-[#0D131A] text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Smooth CSS Grid Height Animation */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-navy-50 dark:border-white/10 pt-3">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
