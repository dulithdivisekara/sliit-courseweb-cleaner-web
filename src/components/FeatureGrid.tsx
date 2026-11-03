import {
  Sparkles,
  ShieldCheck,
  Sliders,
  RefreshCw,
  Zap,
  Lock,
} from "lucide-react";

interface FeatureGridProps {
  darkMode: boolean;
}

export function FeatureGrid({ darkMode }: FeatureGridProps) {
  const cards = [
    {
      title: "Smart Setup Wizard",
      desc: "Automatically prompts you to pick your campus and batch on first login. Sets up your custom filters in under 10 seconds with Version 7.2.0 intelligence.",
      lightImage: "/assets/theme/wizard-light.webp",
      darkImage: "/assets/theme/wizard-dark.webp",
      tag: "Zero Setup",
    },
    {
      title: "Side-Panel Drawer Interface",
      desc: "Replaces intrusive center popups with a smooth, slide-in side panel drawer anchored right above the back-to-top button. Configure preferences without obscuring course materials.",
      lightImage: "/assets/theme/config-light.webp",
      darkImage: "/assets/theme/config-dark.webp",
      tag: "v7.2.0 New",
    },
    {
      title: "Ergonomic Trigger & Ghost Mode",
      desc: "Floating trigger button moved to the bottom-right to permanently prevent collisions with CourseWeb drawers. Ghost Mode fades unassigned modules to 25% opacity.",
      lightImage: "/assets/theme/floating-gear-light.webp",
      darkImage: "/assets/theme/floating-gear-dark.webp",
      tag: "Ergonomic",
    },
    {
      title: "Quick Action Toolbar Popup",
      desc: "Updated browser action menu lets you toggle dark mode, switch campus/batch profiles, adjust Ghost Mode, or trigger the side panel directly from your toolbar.",
      lightImage: "/assets/theme/popup-light.webp",
      darkImage: "/assets/theme/popup-dark.webp",
      tag: "Instant Control",
    },
  ];

  const pillarPoints = [
    {
      icon: Zap,
      title: "Zero-Latency Anti-Flash Preloader",
      desc: "Eliminates the jarring white flash (FOUC) when switching Courseweb pages in dark mode through synchronous theme state pre-caching.",
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Notice & Contrast Protection",
      desc: "High-contrast overrides for yellow notice containers ensure urgent exam alerts, postponement notices, and lab reschedules remain razor sharp.",
    },
    {
      icon: Sparkles,
      title: "Campus and Batch Targeting",
      desc: "Isolates announcements strictly intended for your physical center (Malabe, Metro, Kandy, Kurunegala, Matara, or Jaffna).",
    },
    {
      icon: Sliders,
      title: "Ghost Mode & Custom Whitelists",
      desc: "Fade unassigned modules to 25% opacity or add custom keyword rules to tailor your dashboard precisely to your curriculum.",
    },
    {
      icon: Lock,
      title: "100% Client-Side Privacy & CSP",
      desc: "Runs completely offline in your local browser sandbox with strict CSP compliance. Never reads passwords, student IDs, or grades.",
    },
    {
      icon: RefreshCw,
      title: "Screen-Blended Branding & Sync",
      desc: "Inverts CourseWeb header logos with screen blend mode for dark bars and synchronizes your preferences seamlessly across devices.",
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

        {/* Visual Cards Grid: Full-width enlarged 4:3 cropped previews on every device (mobile, tablet, and desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-16">
          {cards.map((c, i) => (
            <div
              key={i}
              className="p-4 rounded-[22px] sm:rounded-[26px] bg-white dark:bg-[#161F2B] border border-navy-900/10 dark:border-white/10 hover:border-gold-500/40 dark:hover:border-gold-500/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-stretch justify-between group theme-surface-transition"
            >
              {/* Cropped & Enlarged 4:3 Preview Banner: Clearly legible on mobile phones, tablets, and desktops */}
              <div className="w-full aspect-[4/3] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-navy-50/70 dark:bg-[#0D131A] border border-navy-100/80 dark:border-white/10 mb-4 flex items-center justify-center">
                <img
                  src={darkMode ? c.darkImage : c.lightImage}
                  alt={`${c.title} (${darkMode ? "Dark" : "Light"} Theme)`}
                  width={640}
                  height={480}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
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
