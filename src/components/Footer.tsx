import { AppIcon, GithubIcon } from "./Icons";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-900/10 dark:border-white/10 bg-white/80 dark:bg-[#0D131A]/95 pt-12 sm:pt-16 pb-10 sm:pb-12 theme-surface-transition">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12">
          {/* Column 1: Brand & Purpose */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="p-1.5 bg-white dark:bg-[#161F2B] rounded-xl border border-navy-900/10 dark:border-white/10 shadow-xs flex items-center justify-center">
                <AppIcon size={48} className="w-7 h-7 object-contain" />
              </div>
              <span className="font-bold text-lg text-navy-950 dark:text-white">
                Courseweb Cleaner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              An open-source browser extension and userscript built to eliminate
              clutter, isolate campus announcements, and provide high-contrast
              dark mode on SLIIT CourseWeb.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300 mt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                100% Client-Side Privacy: No user tracking or analytics.
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-navy-950 dark:text-white">
              Navigation
            </h3>
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href="#comparison-preview"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Before & After
              </a>
              <a
                href="#features"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Key Features
              </a>
              <a
                href="#matrix"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Feature Comparison
              </a>
              <a
                href="#how-it-works"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Installation Steps
              </a>
              <a
                href="#faq"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Student FAQ
              </a>
            </div>
          </div>

          {/* Column 3: Resources & Repositories */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-navy-950 dark:text-white">
              Project Links
            </h3>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Core Extension Repository</span>
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner-web"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Landing Page Web Repository</span>
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/privacy-policy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/CHANGELOG.md"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Extension Changelog
              </a>
              <a
                href="https://courseweb.sliit.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-navy-900 dark:hover:text-gold-400 transition-colors"
              >
                Official SLIIT CourseWeb Portal
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="border-t border-navy-900/10 dark:border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-700 dark:text-neutral-300">
          <div>
            &copy; {currentYear} SLIIT Courseweb Cleaner. Released under the MIT
            License.
          </div>
          <div className="text-center sm:text-right">
            <span>Developed by </span>
            <a
              href="https://dulith.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-900 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 font-semibold underline underline-offset-2 transition-colors"
            >
              Dulith Divisekara
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
