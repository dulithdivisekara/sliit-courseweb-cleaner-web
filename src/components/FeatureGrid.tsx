import {
  Sparkles,
  ShieldCheck,
  Sliders,
  RefreshCw,
  Zap,
  Lock,
} from "lucide-react";

export function FeatureGrid() {
  const cards = [
    {
      title: "Smart First-Run Wizard",
      desc: "Automatically prompts you to pick your campus and batch on first login. Sets up your custom filters in under 10 seconds.",
      image: "/assets/config-modal.png",
      tag: "Zero Configuration",
    },
    {
      title: "Dedicated Preferences Panel",
      desc: "Customize custom whitelist keywords, toggle dark mode, or fine-tune module visibility directly inside your CourseWeb interface.",
      image: "/assets/settings-tab.png",
      tag: "Full Control",
    },
    {
      title: "Floating Toolbar Control",
      desc: "A neat floating icon sits on your screen, allowing you to access filter settings or switch themes without opening new tabs.",
      image: "/assets/step5-settings-icon.png",
      tag: "Instant Access",
    },
    {
      title: "Multi-Browser Management",
      desc: "Native toolbar action popup lets you quickly toggle filtering on and off or check active rule versions.",
      image: "/assets/manage-extension.png",
      tag: "Cross-Platform",
    },
  ];

  const pillarPoints = [
    {
      icon: Sparkles,
      title: "Campus and Batch Targeting",
      desc: "Isolates announcements strictly intended for your physical center (Malabe, Metro, Kandy, Kurunegala, Matara, or Jaffna).",
    },
    {
      icon: ShieldCheck,
      title: "Notice Protector",
      desc: "Protects critical exam schedules, assignment deadline updates, and university-wide alerts from being accidentally hidden.",
    },
    {
      icon: Sliders,
      title: "Custom Whitelists & Blacklists",
      desc: "Need to follow an elective or special module? Add custom keyword rules to tailor your dashboard precisely to your curriculum.",
    },
    {
      icon: RefreshCw,
      title: "Cloud-Synced Rules",
      desc: "Silently synchronizes with updated faculty naming codes and new semester module conventions in the background.",
    },
    {
      icon: Lock,
      title: "100% Client-Side Privacy",
      desc: "Runs completely offline in your local browser sandbox. Never reads student passwords, personal tokens, or academic grades.",
    },
    {
      icon: Zap,
      title: "Ultra Lightweight",
      desc: "Zero bloated frameworks injected into CourseWeb. Minimal memory footprint ensures snappy page load times even on slow campus Wi-Fi.",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
            Engineered for Productivity
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-navy-950 dark:text-white tracking-tight">
            Designed around how students actually study
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg mt-3">
            No more digging through dozens of irrelevant notices. Get direct
            access to your lecture materials, assignments, and grades.
          </p>
        </div>

        {/* Visual Cards Grid: Compact horizontal cards on mobile, full vertical cards on tablet/PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-[22px] sm:rounded-[26px] bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 hover:border-gold-500/40 dark:hover:border-gold-500/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-row sm:flex-col items-center sm:items-stretch justify-between gap-3.5 sm:gap-0 group theme-surface-transition"
            >
              {/* Thumbnail: Compact square/4:3 on mobile, full 4:3 banner on sm+ */}
              <div className="w-24 h-24 sm:w-full sm:h-auto sm:aspect-[4/3] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100/80 dark:border-white/10 p-1.5 sm:p-2 sm:mb-4 flex items-center justify-center">
                <img
                  src={c.image}
                  alt={c.title}
                  width={400}
                  height={300}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-navy-50 dark:bg-gold-500/15 text-navy-800 dark:text-gold-400 border border-navy-200/60 dark:border-gold-500/30 text-[10px] sm:text-[11px] font-bold mb-1.5 sm:mb-2">
                  {c.tag}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-navy-950 dark:text-white mb-1">
                  {c.title}
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Pillars Grid: Horizontal icon+text on mobile, elevated cards on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {pillarPoints.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 shadow-xs hover:border-gold-500/40 dark:hover:border-gold-500/40 hover:shadow-sm transition-all duration-200 flex sm:block items-start gap-3.5 theme-surface-transition"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-50 dark:bg-[#0D131A] text-navy-700 dark:text-gold-400 border border-navy-100 dark:border-white/10 flex items-center justify-center shrink-0 sm:mb-3.5 mt-0.5 sm:mt-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-navy-950 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {p.desc}
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
