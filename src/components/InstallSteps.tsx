interface InstallStepsProps {
  darkMode: boolean;
}

export function InstallSteps({ darkMode }: InstallStepsProps) {
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
        {/* Header */}
        <div className="mb-8 sm:mb-12">
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

        {/* Extension Steps Grid: 4:3 visual cards on mobile, tablet, and desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 animate-fade-in">
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
      </div>
    </section>
  );
}
