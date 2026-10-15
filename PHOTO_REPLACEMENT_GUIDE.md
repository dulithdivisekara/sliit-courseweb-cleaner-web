# 🖼️ Photo & Asset Replacement Guide

This guide maps every visual image on the landing page to a distinct **ID**, its **file path in `public/assets/`**, its **dimensions**, and ready-to-use **GenAI prompts** (Midjourney, Flux, DALL-E 3, Imagen).

---

## 🎨 Aesthetic Theme Guidelines

- **Color Palette:** Deep sage green (`#3C513E`), muted moss (`#8E9C78`), cream/off-white (`#FBFBF9`), natural wood, matte glass.
- **Photography Style:** Editorial, natural lighting, high dynamic range, soft shadows, realistic modern university student environment (laptop, clean study desk, campus backdrop).
- **Format:** PNG or WebP.

---

## 📸 Image Map & Replacement Prompts

### 1. `HERO_DEVICE_MOCKUP` (Hero Section Central Mockup)

- **Location:** Top hero device screen (centered inside the iPad/bezel container).
- **Current Asset:** `public/assets/sliit-courseweb-cleaner-social-preview.png`
- **Aspect Ratio:** 16:9 (Recommended: `1920x1080` or `1600x900`)
- **Purpose:** Showcase the CourseWeb dashboard interface looking modern, organized, and clean.
- **GenAI Prompt:**
  ```text
  A photorealistic screenshot mockup of a sleek, modern academic learning management portal for university students on a dark mode screen. Clean minimalist layout displaying semester courses, organized cards with course titles like 'Software Architecture' and 'Database Systems', a clean upcoming deadlines widget on the right sidebar, deep sage green and dark gray accent palette, high contrast, clean modern UI/UX design, 8k resolution, flat vector dashboard graphics.
  ```

---

### 2. `BEFORE_AFTER_SHOWCASE` (Interactive Comparison Cards)

- **Location:** "See it in action" tabbed comparison section.
- **Current Assets:**
  - Clean state: `public/assets/after.png`
  - Cluttered state: `public/assets/before.png`
- **Aspect Ratio:** 16:9 or 16:10 (Recommended: `1440x900`)
- **Note:** These are real screenshots of your actual extension running on CourseWeb. You can update them directly by taking fresh screenshots of CourseWeb before and after toggling the cleaner.

---

### 3. `PHOTO_FEATURE_DASHBOARD` (Deep-Dive Features Showcase)

- **Location:** Right side of the "Everything you need in one clean tool" section.
- **Current Asset:** `public/assets/config-modal.png`
- **Aspect Ratio:** 4:3 (Recommended: `1200x900`)
- **Purpose:** Showcase the extension's clean settings dialog, campus dropdown, and batch selection.
- **GenAI Prompt:**
  ```text
  Clean modern UI component card displaying a browser extension configuration dialog, options for 'Campus: Malabe' and 'Batch: 2024 Regular', toggle switches for 'Dark Theme' and 'Notice Protector', subtle sage green rounded pill buttons, soft ambient drop shadow against a warm off-white canvas, minimalist Apple-inspired UI design, ultra sharp typography, 8k.
  ```

---

### 4. `EDITORIAL_CARD_1` (Setup Wizard Tour)

- **Location:** Feature Tour Grid - Card 1.
- **Current Asset:** `public/assets/config-modal.png`
- **Aspect Ratio:** 4:3 (Recommended: `800x600`)
- **GenAI Prompt:**
  ```text
  Minimalist UI illustration of a welcome onboarding modal for a student browser utility, clean icon badges, subtle sage green accents, crisp typography, clean white card with rounded 20px corners, high definition render.
  ```

---

### 5. `EDITORIAL_CARD_2` (Preferences & Dark Mode)

- **Location:** Feature Tour Grid - Card 2.
- **Current Asset:** `public/assets/settings-tab.png`
- **Aspect Ratio:** 4:3 (Recommended: `800x600`)
- **GenAI Prompt:**
  ```text
  Modern dark mode user interface dashboard displaying clean course modules and filters, deep slate background with soft sage green buttons and glowing toggles, clean aesthetics, studio product design render, 8k resolution.
  ```

---

### 6. `EDITORIAL_CARD_3` (Floating Fast Access)

- **Location:** Feature Tour Grid - Card 3.
- **Current Asset:** `public/assets/step5-settings-icon.png`
- **Aspect Ratio:** 4:3 (Recommended: `800x600`)
- **GenAI Prompt:**
  ```text
  Close-up isometric perspective of a sleek web browser interface, highlighting a floating yellow and gold settings gear icon docked neatly to the right margin, crisp web typography, blurred background of course lecture notes, clean product UI photography.
  ```

---

### 7. `PHOTO_TESTIMONIAL_STUDENT` (Student Testimonial Avatar)

- **Location:** Testimonial Section (Left portrait card).
- **Current Asset:** `public/assets/testimonial-student.png`
- **Aspect Ratio:** 1:1 Square (Recommended: `800x800` or `600x600`)
- **Purpose:** Friendly, authentic portrait of a university undergraduate studying.
- **GenAI Prompt:**
  ```text
  Professional portrait photograph of a 22-year-old Sri Lankan university student in a modern campus library, smiling warmly, holding a sleek laptop, natural soft library window daylight, modern university background with indoor plants, authentic expression, shot on 85mm f/1.8 lens, photorealistic, cinematic lighting, 8k.
  ```

---

### 8. `PHOTO_STEP_1` through `PHOTO_STEP_4` (Quick Start Workflow Steps)

- **Location:** "Up and running in 30 seconds" 4-card sequence.
- **Current Assets:**
  - Step 1: `public/assets/step1-install.png`
  - Step 2: `public/assets/step3-configure.png`
  - Step 3: `public/assets/step4-apply.png`
  - Step 4: `public/assets/step5-settings-icon.png`
- **Aspect Ratio:** 4:3 (Recommended: `600x450`)
- **Note:** These currently use the actual step-by-step screenshots from your extension documentation. You can keep them or replace them with custom stylized walkthrough icons/graphics anytime!

---

### 9. `PHOTO_CTA_BANNER` (Bottom Call to Action)

- **Location:** Final banner background behind "Ready for a cleaner CourseWeb?".
- **Current Asset:** Built-in sleek CSS gradient (`from-neutral-900 to-neutral-800`) with logo lockup.
- **Optional Background Image Replacement:** `public/assets/cta-banner.png`
- **Aspect Ratio:** 21:9 Ultra-wide (Recommended: `2400x1000`)
- **GenAI Prompt:**
  ```text
  Minimalist architectural photo of an ultra-modern university study commons at dusk, warm interior lights glowing through expansive glass walls, lush green courtyard in background, moody deep green and charcoal tones, atmospheric architectural photography, 8k.
  ```

---

## 🚀 How to Replace Any Photo

1. Generate or export your desired image with the recommended dimensions above.
2. Save it directly to `public/assets/<filename>.png` (replacing the existing file, or choosing a new name).
3. If you use a new filename, update the `src` attribute corresponding to that `photoId` in [`src/App.tsx`](file:///home/dulith/Projects/sliit-courseweb-cleaner-web/src/App.tsx).
