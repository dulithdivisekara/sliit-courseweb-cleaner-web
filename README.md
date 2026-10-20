<div align="center">

  <img src="public/assets/icon_48.png" width="72" height="72" alt="SLIIT CourseWeb Cleaner Logo" />

# SLIIT CourseWeb Cleaner: Web Platform

**The official showcase platform and documentation portal for the [SLIIT CourseWeb Cleaner](https://github.com/dulithdivisekara/sliit-courseweb-cleaner) browser extension.**

[![Version](https://img.shields.io/badge/Version-v7.1.0-blue?style=for-the-badge)](https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/CHANGELOG.md)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://sliit-courseweb-cleaner-web.pages.dev)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

  <br />

  <p align="center">
    <a href="https://sliit-courseweb-cleaner-web.pages.dev"><strong>Explore Live Website »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner"><strong>View Extension Repo »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://courseweb.sliit.lk"><strong>SLIIT CourseWeb »</strong></a>
  </p>

  <p align="center">
    <a href="https://chromewebstore.google.com/detail/sliit-courseweb-cleaner/lnoadlfhebmkhmbfmehdgoffjllgadjm"><img src="https://img.shields.io/chrome-web-store/v/lnoadlfhebmkhmbfmehdgoffjllgadjm?label=Chrome%20Web%20Store&color=4285F4&logo=googlechrome&logoColor=white" alt="Chrome Web Store" /></a>
    <a href="https://microsoftedge.microsoft.com/addons/detail/sliit-courseweb-cleaner/gmlodfhgiopjgamoijjffcmgfenkkkhe"><img src="https://img.shields.io/badge/Edge%20Add--ons-v7.1.0-0078D7?logo=microsoftedge&logoColor=white" alt="Edge Add-ons" /></a>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/sliit-courseweb-cleaner/"><img src="https://img.shields.io/amo/v/sliit-courseweb-cleaner?label=Firefox%20Add-ons&color=FF7139&logo=firefoxbrowser&logoColor=white" alt="Firefox Add-ons" /></a>
    <a href="https://github.com/dulithdivisekara/sliit-courseweb-cleaner/blob/main/USERSCRIPT_INSTALL.md"><img src="https://img.shields.io/badge/Userscript-Tampermonkey-00485B?logo=tampermonkey&logoColor=white" alt="Userscript" /></a>
  </p>

</div>

---

<div align="center">
  <img src="public/assets/sliit-courseweb-cleaner-social-preview.png" alt="SLIIT CourseWeb Cleaner Showcase" width="900" style="border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.15);" />
</div>

---

## 📌 Overview

**SLIIT CourseWeb Cleaner Web** is the official web portal and interactive showcase designed to demonstrate and distribute the **SLIIT CourseWeb Cleaner** browser extension and userscript.

Built specifically for students at the Sri Lanka Institute of Information Technology (SLIIT), the web platform delivers an interactive student-centric experience featuring:

- **Interactive Campus Sandbox**: Lets students test how CourseWeb changes based on their specific physical campus (Malabe, Metro, Kandy, Kurunegala, Matara, Jaffna) and degree specialization (Software Engineering, Cyber Security, Data Science, Engineering, Business).
- **Side-by-Side Comparison Hub**: Demonstrates before and after states comparing default noisy Moodle with the clean, dark-mode-ready interface.
- **Dynamic Browser Routing**: Identifies whether visitors use Google Chrome, Brave, Arc, Microsoft Edge, or Mozilla Firefox to surface direct store links.
- **Full Userscript Support**: Step-by-step instructions for power users running Tampermonkey or Violentmonkey.
- **Notice Protector Guide**: Explains how critical exam timetables and official university notices are safeguarded.

---

## 🚀 Key Features

| Feature                             | Description                                                                                                   |
| :---------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **Interactive Campus Sandbox**      | Real-time simulator demonstrating module and announcement filtering across 6 SLIIT campuses.                  |
| **Side-by-Side UI Comparison**      | Interactive viewer comparing cluttered default CourseWeb with the cleaned dark theme view.                    |
| **Dynamic Browser Detection**       | User-Agent sniffing identifies browser family (Chrome, Edge, Firefox) to deliver 1-click install CTAs.        |
| **Userscript / Power User Support** | Detailed installation workflow for Tampermonkey and Violentmonkey users.                                      |
| **Specifications Matrix**           | In-depth breakdown evaluating Courseweb Cleaner against default Moodle and generic ad-blockers.               |
| **Onboarding Walkthrough**          | 4-step visual setup guide showcasing store installation, setup wizard, campus locking, and floating settings. |
| **Institutional Aesthetic**         | Bespoke design system utilizing SLIIT maritime navy (`#0F3B5F`, `#071827`) and warm amber gold (`#F7B924`).   |
| **SEO & Social Graph Ready**        | Pre-configured OpenGraph cards, Twitter preview cards, and JSON-LD `SoftwareApplication` schema markup.       |

---

## 🛠️ Tech Stack & Tooling

- **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) with PostCSS and Autoprefixer
- **Icons**: [Lucide React](https://lucide.dev/) and custom vector SVGs
- **Deployment & Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **CI / Quality**: GitHub Actions workflow running TypeScript compilation and Prettier checks

---

## 📂 Project Architecture

```plaintext
sliit-courseweb-cleaner-web/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow (build & format checks)
├── public/                      # Static production assets
│   └── assets/                  # High-resolution icons and interface captures
│       ├── courseweb-sliit-logo.png # Official SLIIT CourseWeb brand logo
│       ├── icon_128.png         # High-res extension icon (128x128)
│       ├── icon_48.png          # App icon (48x48)
│       ├── icon_16.png          # Favicon (16x16)
│       ├── chrome.svg           # Google Chrome vector icon
│       ├── edge.svg             # Microsoft Edge vector icon
│       ├── firefox.svg          # Mozilla Firefox vector icon
│       ├── after.png            # Cleaned CourseWeb interface screenshot
│       ├── before.png           # Cluttered default CourseWeb screenshot
│       ├── config-modal.png     # Setup wizard modal capture
│       ├── settings-tab.png     # Extension settings drawer capture
│       ├── step1-install.png    # Installation step 1
│       ├── step3-configure.png  # Installation step 3
│       ├── step4-apply.png      # Installation step 4
│       ├── step5-settings-icon.png # Floating settings gear trigger
│       ├── testimonial-student.png # Student testimonial avatar
│       └── sliit-courseweb-cleaner-social-preview.png # OpenGraph preview card
├── src/
│   ├── components/
│   │   ├── Icons.tsx            # SVG browser icons, app icons, and branding
│   │   ├── Navbar.tsx           # Responsive navigation header with version badge
│   │   ├── CampusSimulator.tsx  # Interactive campus & batch filter sandbox
│   │   ├── ComparisonViewer.tsx # Interactive before/after interface comparison
│   │   ├── FeatureGrid.tsx      # Core architecture pillars and feature cards
│   │   ├── SpecMatrix.tsx       # Side-by-side technical specification table
│   │   ├── InstallSteps.tsx     # 4-step walkthrough and userscript guide
│   │   ├── FaqSection.tsx       # Student questions and answers accordion
│   │   └── Footer.tsx           # Multi-column footer with project links
│   ├── App.tsx                  # Root application layout
│   ├── index.css                # Global styles and Tailwind directives
│   └── main.tsx                 # React DOM mount point
├── index.html                   # HTML template with SEO meta tags and JSON-LD
├── tailwind.config.js           # Design tokens, palette, and typography rules
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite bundler configuration
├── package.json                 # Project dependencies, scripts, and metadata
├── LICENSE                      # MIT License
└── README.md                    # Project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm** or **pnpm** or **yarn**

### 1. Clone the repository

```bash
git clone https://github.com/dulithdivisekara/sliit-courseweb-cleaner-web.git
cd sliit-courseweb-cleaner-web
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

### 4. Build for production

```bash
npm run build
```

This runs the TypeScript compiler (`tsc`) and compiles the production bundle into the `dist/` directory.

### 5. Preview production build

```bash
npm run preview
```

### 6. Format codebase

```bash
npm run format
```

---

## ☁️ Cloudflare Pages Deployment

This site is deployed globally across Cloudflare edge network using **Cloudflare Pages**.

### Automated Deployments (Git Integration)

Every commit pushed to the `main` branch automatically triggers an edge deployment:

- **Framework Preset**: Vite / React
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Node.js Version**: `20`

### Direct CLI Deployment (Wrangler)

```bash
# Build production bundle
npm run build

# Deploy to Cloudflare Pages via Wrangler
npx wrangler pages deploy dist --project-name=sliit-courseweb-cleaner-web
```

---

## 🔗 Related Projects

- **[SLIIT CourseWeb Cleaner (Extension)](https://github.com/dulithdivisekara/sliit-courseweb-cleaner)**: Core open-source browser extension codebase (Manifest V3, Content Scripts, Filter Engine, and Options Page).
- **[Official SLIIT CourseWeb](https://courseweb.sliit.lk)**: The official SLIIT Moodle Learning Management System.

---

## 🤝 Contributing

Contributions, feedback, and pull requests are welcome:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open-source software licensed under the [MIT License](LICENSE).

<div align="center">
  <sub>Crafted by <a href="https://dulith.me"><strong>Dulith Divisekara</strong></a>. Independent student utility not affiliated with or endorsed by SLIIT.</sub>
</div>
