import { useState, useEffect } from "react";
import {
  Check,
  Filter,
  Moon,
  Sun,
  ShieldCheck,
  AlertCircle,
  BookOpen,
  Bell,
  Layers,
} from "lucide-react";

type CampusKey =
  "malabe" | "kandy" | "metro" | "matara" | "kurunegala" | "jaffna";
type StreamKey = "se" | "cs" | "ds" | "eng" | "business";

interface AnnouncementItem {
  id: string;
  campus: CampusKey | "all";
  title: string;
  date: string;
  isUrgent?: boolean;
}

interface ModuleItem {
  code: string;
  name: string;
  stream: StreamKey;
  semester: "current" | "past";
  credits: number;
}

const CAMPUSES: { key: CampusKey; name: string; shortName: string }[] = [
  { key: "malabe", name: "Malabe Main Campus", shortName: "Malabe" },
  { key: "kandy", name: "Kandy Campus", shortName: "Kandy" },
  { key: "metro", name: "Metro Campus", shortName: "Metro" },
  { key: "matara", name: "Matara Center", shortName: "Matara" },
  { key: "kurunegala", name: "Kurunegala Center", shortName: "Kurunegala" },
  { key: "jaffna", name: "Jaffna Center", shortName: "Jaffna" },
];

const STREAMS: { key: StreamKey; label: string }[] = [
  { key: "se", label: "Software Engineering (SE)" },
  { key: "cs", label: "Cyber Security (CS)" },
  { key: "ds", label: "Data Science (DS)" },
  { key: "eng", label: "Civil / Mechanical Engineering" },
  { key: "business", label: "Business Management (BBA)" },
];

const ALL_ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: "a1",
    campus: "all",
    title: "Notice: Mid-Semester Examination Timetable (All Faculties)",
    date: "Official Notice",
    isUrgent: true,
  },
  {
    id: "a2",
    campus: "malabe",
    title: "Malabe: Computing Faculty Lab 4 server upgrade window",
    date: "Today",
  },
  {
    id: "a3",
    campus: "kandy",
    title: "Kandy Campus: Weekend batch shuttle bus schedule updates",
    date: "Yesterday",
  },
  {
    id: "a4",
    campus: "metro",
    title: "Metro Campus: Guest speaker lecture on Corporate Finance",
    date: "2 days ago",
  },
  {
    id: "a5",
    campus: "matara",
    title: "Matara Center: Study area access hours during weekend",
    date: "3 days ago",
  },
  {
    id: "a6",
    campus: "kurunegala",
    title: "Kurunegala Center: Physical library book return extension",
    date: "4 days ago",
  },
  {
    id: "a7",
    campus: "jaffna",
    title: "Jaffna Center: Cisco networking hardware lab booking",
    date: "5 days ago",
  },
];

const ALL_MODULES: ModuleItem[] = [
  // SE modules
  {
    code: "IT2030",
    name: "Software Engineering Practice",
    stream: "se",
    semester: "current",
    credits: 4,
  },
  {
    code: "IT2040",
    name: "Database Systems Architecture",
    stream: "se",
    semester: "current",
    credits: 3,
  },
  {
    code: "IT2050",
    name: "Computer Networks & Security",
    stream: "se",
    semester: "current",
    credits: 3,
  },
  {
    code: "IT1010",
    name: "Introduction to Programming (Completed)",
    stream: "se",
    semester: "past",
    credits: 4,
  },
  {
    code: "IT1020",
    name: "Discrete Mathematics for Computing",
    stream: "se",
    semester: "past",
    credits: 3,
  },

  // Cyber Security modules
  {
    code: "CS3010",
    name: "Network Penetration Testing",
    stream: "cs",
    semester: "current",
    credits: 4,
  },
  {
    code: "CS3020",
    name: "Cryptography & Information Security",
    stream: "cs",
    semester: "current",
    credits: 3,
  },
  {
    code: "IT1010",
    name: "Introduction to Programming (Completed)",
    stream: "cs",
    semester: "past",
    credits: 4,
  },

  // Data Science modules
  {
    code: "DS3010",
    name: "Machine Learning with Python",
    stream: "ds",
    semester: "current",
    credits: 4,
  },
  {
    code: "DS3020",
    name: "Applied Statistical Modeling",
    stream: "ds",
    semester: "current",
    credits: 3,
  },
  {
    code: "IT1010",
    name: "Introduction to Programming (Completed)",
    stream: "ds",
    semester: "past",
    credits: 4,
  },

  // Engineering modules
  {
    code: "CE2010",
    name: "Fluid Mechanics & Thermodynamics",
    stream: "eng",
    semester: "current",
    credits: 4,
  },
  {
    code: "CE2020",
    name: "Structural Engineering Principles",
    stream: "eng",
    semester: "current",
    credits: 3,
  },
  {
    code: "MA1010",
    name: "Engineering Mathematics I (Completed)",
    stream: "eng",
    semester: "past",
    credits: 4,
  },

  // Business modules
  {
    code: "BM2010",
    name: "Corporate Financial Accounting",
    stream: "business",
    semester: "current",
    credits: 4,
  },
  {
    code: "BM2020",
    name: "Operations & Supply Chain Strategy",
    stream: "business",
    semester: "current",
    credits: 3,
  },
  {
    code: "BM1010",
    name: "Principles of Management (Completed)",
    stream: "business",
    semester: "past",
    credits: 3,
  },
];

export function CampusSimulator({
  siteDarkMode = false,
  onSetSiteDarkMode,
}: {
  siteDarkMode?: boolean;
  onSetSiteDarkMode?: (val: boolean) => void;
}) {
  const [selectedCampus, setSelectedCampus] = useState<CampusKey>("malabe");
  const [selectedStream, setSelectedStream] = useState<StreamKey>("se");
  const [isCleanerActive, setIsCleanerActive] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(siteDarkMode);
  const [mobileFeedTab, setMobileFeedTab] = useState<
    "announcements" | "modules"
  >("announcements");
  const [expandMobileClutter, setExpandMobileClutter] = useState(false);

  // Sync simulator theme with website theme whenever site theme changes
  useEffect(() => {
    setIsDarkMode(siteDarkMode);
  }, [siteDarkMode]);

  const handleToggleSimulatorTheme = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    if (onSetSiteDarkMode) {
      onSetSiteDarkMode(next);
    }
  };

  // Reset mobile clutter expansion when cleaner state changes
  useEffect(() => {
    setExpandMobileClutter(false);
  }, [isCleanerActive, selectedCampus, selectedStream]);

  // Filter announcements
  const visibleAnnouncements = ALL_ANNOUNCEMENTS.filter((item) => {
    if (!isCleanerActive) return true;
    if (item.isUrgent) return true; // Notice Protector always preserves urgent items
    return item.campus === selectedCampus;
  });

  // Filter modules
  const visibleModules = ALL_MODULES.filter((m) => {
    if (!isCleanerActive) return true;
    return m.stream === selectedStream && m.semester === "current";
  });

  const hiddenCount =
    ALL_ANNOUNCEMENTS.length -
    visibleAnnouncements.length +
    (ALL_MODULES.length - visibleModules.length);

  const activeCampusObj = CAMPUSES.find((c) => c.key === selectedCampus);

  // On mobile, cap raw unfiltered lists so it doesn't create a 2000px scroll wall unless expanded
  const mobileAnnouncementsLimit =
    !isCleanerActive && !expandMobileClutter ? 4 : visibleAnnouncements.length;
  const mobileModulesLimit =
    !isCleanerActive && !expandMobileClutter ? 4 : visibleModules.length;

  return (
    <section
      className="py-12 sm:py-20 md:py-24 border-t border-navy-900/10 dark:border-white/10"
      id="interactive-demo"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 sm:gap-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-navy-700 dark:text-gold-400 mb-2">
              Interactive Live Sandbox
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-navy-950 dark:text-white tracking-tight">
              Test with your campus and batch
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-lg mt-2 max-w-2xl">
              See how CourseWeb transforms from a chaotic multi-campus
              noticeboard into your clean personal study dashboard.
            </p>
          </div>

          {/* Quick status summary badge */}
          <div className="flex items-center justify-between sm:justify-start gap-3 bg-white dark:bg-[#161F2B] p-2.5 rounded-2xl border border-navy-900/10 dark:border-white/10 shadow-xs self-stretch sm:self-start md:self-auto">
            <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 pl-1">
              Simulated Result:
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all duration-300 ${
                isCleanerActive
                  ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80"
                  : "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/80"
              }`}
            >
              {isCleanerActive ? (
                <>
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{hiddenCount} Distractions Filtered</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Raw Clutter (No Filter)</span>
                </>
              )}
            </span>
          </div>
        </div>

        {/* Sandbox Console Container */}
        <div className="rounded-[24px] sm:rounded-[30px] border border-navy-900/10 dark:border-white/10 bg-white dark:bg-[#161F2B] shadow-xl overflow-hidden theme-surface-transition">
          {/* Controls Bar: Responsive 1 -> 2 -> 4 Column Grid */}
          <div className="bg-[#F0F5FA] dark:bg-[#121923] border-b border-navy-900/10 dark:border-white/10 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {/* 1. Campus Selector */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sim-campus-select"
                className="text-[11px] font-bold text-navy-900 dark:text-neutral-300 uppercase tracking-wider"
              >
                1. Select Your Campus
              </label>
              <select
                id="sim-campus-select"
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value as CampusKey)}
                className="w-full h-10 bg-white dark:bg-[#1A222D] border border-navy-200 dark:border-white/15 rounded-xl px-3 text-sm font-semibold text-navy-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-500 shadow-xs cursor-pointer transition-colors"
              >
                {CAMPUSES.map((c) => (
                  <option
                    key={c.key}
                    value={c.key}
                    className="bg-white dark:bg-[#1A222D] text-navy-950 dark:text-white"
                  >
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Specialization Selector */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="sim-stream-select"
                className="text-[11px] font-bold text-navy-900 dark:text-neutral-300 uppercase tracking-wider"
              >
                2. Select Specialization
              </label>
              <select
                id="sim-stream-select"
                value={selectedStream}
                onChange={(e) => setSelectedStream(e.target.value as StreamKey)}
                className="w-full h-10 bg-white dark:bg-[#1A222D] border border-navy-200 dark:border-white/15 rounded-xl px-3 text-sm font-semibold text-navy-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-navy-500 dark:focus:ring-gold-500 shadow-xs cursor-pointer transition-colors"
              >
                {STREAMS.map((s) => (
                  <option
                    key={s.key}
                    value={s.key}
                    className="bg-white dark:bg-[#1A222D] text-navy-950 dark:text-white"
                  >
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Cleaner State Toggle */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-navy-900 dark:text-neutral-300 uppercase tracking-wider">
                3. Cleaner Extension
              </span>
              <button
                type="button"
                onClick={() => setIsCleanerActive(!isCleanerActive)}
                aria-pressed={isCleanerActive}
                className={`w-full h-10 inline-flex items-center justify-center gap-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs active:scale-[0.98] ${
                  isCleanerActive
                    ? "bg-navy-700 dark:bg-gold-500 text-white dark:text-navy-950 hover:bg-navy-800 dark:hover:bg-gold-400 border border-navy-600/30 dark:border-gold-400"
                    : "bg-white dark:bg-[#1A222D] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-[#222C3A] border border-neutral-300 dark:border-white/15"
                }`}
              >
                <Filter className="w-4 h-4 shrink-0" />
                <span>
                  {isCleanerActive
                    ? "Active (Filtering ON)"
                    : "Disabled (Show All)"}
                </span>
              </button>
            </div>

            {/* 4. Simulated CourseWeb Theme Toggle */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-bold text-navy-900 dark:text-neutral-300 uppercase tracking-wider">
                4. Preview Theme
              </span>
              <button
                type="button"
                onClick={handleToggleSimulatorTheme}
                aria-pressed={isDarkMode}
                className={`w-full h-10 inline-flex items-center justify-center gap-2 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 shadow-xs active:scale-[0.98] cursor-pointer ${
                  isDarkMode
                    ? "bg-[#0D131A] text-gold-400 border-gold-500/40 hover:border-gold-400"
                    : "bg-white text-navy-950 border-navy-200 hover:bg-navy-50/50"
                }`}
              >
                {isDarkMode ? (
                  <Moon className="w-4 h-4 text-gold-400 shrink-0" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-500 shrink-0" />
                )}
                <span>
                  {isDarkMode ? "Dark Reader ON" : "Light Moodle View"}
                </span>
              </button>
            </div>
          </div>

          {/* Simulated CourseWeb Window */}
          <div
            className={`p-4 sm:p-7 md:p-8 transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#121820] text-neutral-100"
                : "bg-[#FBFBF9] text-neutral-900"
            }`}
          >
            {/* Mock CourseWeb Navigation Bar */}
            <div
              className={`flex flex-wrap items-center justify-between gap-2 pb-4 sm:pb-5 mb-5 sm:mb-6 border-b transition-colors ${
                isDarkMode ? "border-neutral-800" : "border-neutral-200"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                <span
                  className={`font-extrabold text-sm sm:text-base tracking-tight ${
                    isDarkMode ? "text-gold-400" : "text-navy-900"
                  }`}
                >
                  SLIIT CourseWeb
                </span>
                <span
                  className={`text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold ${
                    isDarkMode
                      ? "bg-[#1A222D] text-neutral-200 border border-white/10"
                      : "bg-navy-100/80 text-navy-900 border border-navy-200/70"
                  }`}
                >
                  <span className="sm:hidden">
                    {activeCampusObj?.shortName}
                  </span>
                  <span className="hidden sm:inline">
                    {activeCampusObj?.name}
                  </span>
                </span>
              </div>

              {isCleanerActive && (
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold border transition-colors ${
                      isDarkMode
                        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden xs:inline">
                      Notice Protector Active
                    </span>
                    <span className="xs:hidden">Protected</span>
                  </span>
                </div>
              )}
            </div>

            {/* Mobile-Only View Switcher Tabs (Prevents 2000px vertical card wall on phones) */}
            <div
              className={`lg:hidden grid grid-cols-2 p-1 rounded-xl mb-5 border ${
                isDarkMode
                  ? "bg-[#1A222D] border-neutral-800"
                  : "bg-neutral-200/70 border-neutral-300/70"
              }`}
            >
              <button
                type="button"
                onClick={() => setMobileFeedTab("announcements")}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  mobileFeedTab === "announcements"
                    ? isDarkMode
                      ? "bg-gold-500 text-navy-950 shadow-xs"
                      : "bg-white text-navy-950 shadow-xs"
                    : isDarkMode
                      ? "text-neutral-400 hover:text-white"
                      : "text-neutral-600 hover:text-navy-950"
                }`}
              >
                <Bell className="w-3.5 h-3.5 shrink-0" />
                <span>Notices ({visibleAnnouncements.length})</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileFeedTab("modules")}
                className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                  mobileFeedTab === "modules"
                    ? isDarkMode
                      ? "bg-gold-500 text-navy-950 shadow-xs"
                      : "bg-white text-navy-950 shadow-xs"
                    : isDarkMode
                      ? "text-neutral-400 hover:text-white"
                      : "text-neutral-600 hover:text-navy-950"
                }`}
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>Modules ({visibleModules.length})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Left Column: Campus Announcements */}
              <div
                className={`lg:col-span-6 flex-col gap-3 ${
                  mobileFeedTab === "announcements" ? "flex" : "hidden lg:flex"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    Campus Announcements ({visibleAnnouncements.length})
                  </h3>
                  {isCleanerActive && (
                    <span
                      className={`text-[11px] font-semibold ${
                        isDarkMode ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      Filtered to {activeCampusObj?.shortName}
                    </span>
                  )}
                </div>

                <div
                  key={`ann-${selectedCampus}-${isCleanerActive}`}
                  className="flex flex-col gap-2.5 animate-fade-in"
                >
                  {visibleAnnouncements.map((item, idx) => {
                    const hiddenOnCompactMobile =
                      idx >= mobileAnnouncementsLimit;
                    return (
                      <div
                        key={item.id}
                        className={`p-3.5 rounded-xl border transition-all duration-200 ${
                          hiddenOnCompactMobile ? "hidden lg:block" : "block"
                        } ${
                          item.isUrgent
                            ? isDarkMode
                              ? "bg-amber-950/40 border-amber-500/50 text-amber-100"
                              : "bg-amber-50 border-amber-300 text-amber-950"
                            : isDarkMode
                              ? "bg-[#1A222D] border-neutral-800 text-neutral-100"
                              : "bg-white border-neutral-200/90 text-neutral-800 shadow-xs"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-start gap-2.5">
                            {item.isUrgent ? (
                              <ShieldCheck
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isDarkMode
                                    ? "text-amber-400"
                                    : "text-amber-600"
                                }`}
                              />
                            ) : (
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${
                                  item.campus === selectedCampus
                                    ? isDarkMode
                                      ? "bg-emerald-400"
                                      : "bg-emerald-600"
                                    : "bg-neutral-400"
                                }`}
                              />
                            )}
                            <span className="text-xs font-semibold leading-relaxed">
                              {item.title}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-mono font-medium shrink-0 px-2 py-0.5 rounded ${
                              isDarkMode
                                ? "bg-neutral-800 text-neutral-300"
                                : "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            {item.date}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Compact Mobile Clutter Overflow Notice */}
                  {!isCleanerActive &&
                    visibleAnnouncements.length > mobileAnnouncementsLimit && (
                      <button
                        type="button"
                        onClick={() => setExpandMobileClutter(true)}
                        className={`lg:hidden py-2.5 px-4 rounded-xl border text-xs font-bold text-center transition-colors ${
                          isDarkMode
                            ? "bg-[#1A222D]/60 border-neutral-800 text-gold-400 hover:bg-[#1A222D]"
                            : "bg-amber-50/70 border-amber-200 text-amber-800 hover:bg-amber-100/70"
                        }`}
                      >
                        +{" "}
                        {visibleAnnouncements.length - mobileAnnouncementsLimit}{" "}
                        more unfiltered campus notices (Tap to show all)
                      </button>
                    )}
                </div>
              </div>

              {/* Right Column: Enrolled Modules */}
              <div
                className={`lg:col-span-6 flex-col gap-3 ${
                  mobileFeedTab === "modules" ? "flex" : "hidden lg:flex"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isDarkMode ? "text-neutral-300" : "text-neutral-700"
                    }`}
                  >
                    My Enrolled Modules ({visibleModules.length})
                  </h3>
                  {isCleanerActive ? (
                    <span
                      className={`text-[11px] font-semibold ${
                        isDarkMode ? "text-emerald-400" : "text-emerald-700"
                      }`}
                    >
                      Past semesters hidden
                    </span>
                  ) : (
                    <span
                      className={`text-[11px] font-semibold ${
                        isDarkMode ? "text-amber-400" : "text-amber-700"
                      }`}
                    >
                      Showing all past & unrelated
                    </span>
                  )}
                </div>

                <div
                  key={`mod-${selectedStream}-${isCleanerActive}`}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 animate-fade-in"
                >
                  {visibleModules.map((m, i) => {
                    const hiddenOnCompactMobile = i >= mobileModulesLimit;
                    return (
                      <div
                        key={`${m.stream}-${m.code}-${i}`}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between gap-2 transition-all duration-200 ${
                          hiddenOnCompactMobile ? "hidden sm:flex" : "flex"
                        } ${
                          m.semester === "past"
                            ? isDarkMode
                              ? "bg-neutral-900/60 border-neutral-800/80 text-neutral-400 opacity-65"
                              : "bg-neutral-100 border-neutral-200 text-neutral-500 opacity-75"
                            : isDarkMode
                              ? "bg-[#1A222D] border-neutral-800 text-neutral-100 hover:border-gold-500/40"
                              : "bg-white border-neutral-200/90 text-neutral-900 hover:border-navy-500/40 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`font-mono text-xs font-bold px-2 py-0.5 rounded border ${
                              isDarkMode
                                ? "text-gold-400 bg-gold-500/10 border-gold-500/20"
                                : "text-navy-800 bg-navy-50 border-navy-200/80"
                            }`}
                          >
                            {m.code}
                          </span>
                          <span
                            className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                              m.semester === "past"
                                ? isDarkMode
                                  ? "bg-neutral-800 text-neutral-400"
                                  : "bg-neutral-200 text-neutral-600"
                                : isDarkMode
                                  ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60"
                                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            }`}
                          >
                            {m.semester === "past" ? "Past" : "Active"}
                          </span>
                        </div>
                        <span className="text-xs font-semibold leading-snug">
                          {m.name}
                        </span>
                        <div
                          className={`text-[10px] pt-1.5 border-t flex items-center justify-between ${
                            isDarkMode
                              ? "border-neutral-800 text-neutral-400"
                              : "border-neutral-100 text-neutral-500"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            <span>{m.credits} Credits</span>
                          </span>
                          <span>Year 2 • Sem 1</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Compact Mobile Clutter Overflow Notice for Modules */}
                {!isCleanerActive &&
                  visibleModules.length > mobileModulesLimit && (
                    <button
                      type="button"
                      onClick={() => setExpandMobileClutter(true)}
                      className={`sm:hidden py-2.5 px-4 rounded-xl border text-xs font-bold text-center transition-colors ${
                        isDarkMode
                          ? "bg-[#1A222D]/60 border-neutral-800 text-gold-400 hover:bg-[#1A222D]"
                          : "bg-amber-50/70 border-amber-200 text-amber-800 hover:bg-amber-100/70"
                      }`}
                    >
                      + {visibleModules.length - mobileModulesLimit} more past &
                      other-stream modules (Tap to expand)
                    </button>
                  )}
              </div>
            </div>

            {/* Bottom Insight Footer */}
            <div
              className={`mt-6 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs ${
                isDarkMode
                  ? "border-neutral-800 text-neutral-400"
                  : "border-neutral-200 text-neutral-600"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isCleanerActive ? "bg-emerald-500" : "bg-amber-500"
                  }`}
                />
                <span>
                  {isCleanerActive
                    ? "Your view is customized to your faculty and physical campus."
                    : "Default Moodle view without filtering. Shows all notices across 6 locations."}
                </span>
              </div>
              <span className="font-mono text-[11px] hidden sm:inline">
                SLIIT Moodle Client Integration
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
