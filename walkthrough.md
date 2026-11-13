# Project Walkthrough (`walkthrough.md`)

## 1. Summary of Changes

1. **Natural, First-Person Engineering Copy Across All Public Pages:**
   - Replaced overly formal or bureaucratic headings and labels with natural, direct professional English:
     - `"Biographical Overview"` → **`"About Me"`** (`/`)
     - `"Professional Narrative"` → **`"My Background"`** (`/about/`)
     - `"Verified Stack"` → **`"Technical Skills"`** (`/about/` and `/`)
     - `"Verified Laboratory Background"` → **`"Laboratory Experience"`** (`/about/`)
     - `"My verified engineering record"` → **`"My engineering experience"`** (`/` and `/about/`)
   - Removed all public-facing source-verification badges and audit terminology (`"Verified — Dec 2024 CV"`, `"(CVSREAL.PDF)"`, `"Unverified — Legacy Website Only"`, `"Provenance & Verification Standard"`, `"Pending Confirmation"`) from every page template and data file.
2. **Removed All Public References & Downloads for the Outdated December 2024 CV PDF:**
   - Removed `public/files/cvsreal.pdf` from the deployable `public/` directory so that zero `.pdf` files are emitted into `dist/` during production builds.
   - Preserved the archival copy outside the deployable directory at `legacy-v1/files/cvsreal.pdf`.
   - Removed all download buttons, links, and text descriptions referencing the December 2024 CV PDF while retaining the web-based, print-formatted Curriculum Vitae page at `/cv/` (and `/resume/`).
3. **Refined Role Description & Content Scope:**
   - Standardized the current role description across all pages, metadata, and OpenGraph cards to **`Business Operations & Strategy — Family-Owned Enterprise`** and contact email to **`putrawibisonos@gmail.com`**.
   - Excluded AcademicPages template demonstration files (`_teaching/2014-spring-teaching-1.md`, `_teaching/2015-spring-teaching-2.md`, `_portfolio/portfolio-1.md`, `public/images/portfolio1.jpg`) from the public build while keeping their archival copies intact in `legacy-v1/`.

---

## 2. Design Decisions

* **The Personal Monograph & Field Dossier Aesthetic:** Retained the classical editorial layout featuring a persistent left running spine (`270px` on desktop) and a main reading folio with asymmetric right-hand marginalia (`1fr + 240px`), set on warm uncoated cotton paper (`#F6F3EC`) and charcoal vellum (`#141311`) in dark mode with terracotta rubrication (`#9E331E` / `#D96B4E`).
* **Typography:** Paired `Newsreader` (optical-size editorial serif for headlines, lead paragraphs, and drop caps), `Instrument Sans` (body tables and UI labels), and `IBM Plex Mono` (dates, indices, and technical metadata).
* **Micro-Typographic Polish:** Adjusted the left spine role line and mobile identity banner so role labels wrap cleanly without orphan punctuation on narrow (`390px`) viewports.

---

## 3. Files Modified

* `src/data/profile.ts` — Rewrote biographical paragraphs, role categories, project summaries, and skill groups in natural first-person engineering prose; removed all verification/provenance labels and outdated CV references.
* `src/layouts/BaseLayout.astro` — Updated navigation directory (`I. Overview` through `VII. Contact`), JSON-LD structured data, and left spine role formatting.
* `src/components/ExperienceTimeline.astro` — Replaced verification badges with natural role categories (`Current Role`, `Data Engineering`, `Data Science`, `Process Development`, `Academic Research`).
* `src/components/ProjectCard.astro` — Replaced `"Verified Outcomes (files/cvsreal.pdf)"` with `"Key Results"` and `"Read Project Details →"`.
* `src/pages/index.astro` — Updated section headings (`I. About Me`, `II. Work Experience`, `III. Selected Work`, `IV. Technical Skills`), marginalia notes, and mobile banner wrapping.
* `src/pages/about.astro` — Updated headings (`Education`, `My Background`, `Technical Skills`, `Laboratory Experience`) and role summary box.
* `src/pages/experience.astro` — Updated page heading (`Engineering, Research & Operations`) and section headings (`Roles & Key Contributions`, `Education`).
* `src/pages/projects/index.astro` & `src/pages/projects/[slug].astro` — Streamlined project index and detail pages around the 5 completed industry and academic engineering works.
* `src/pages/cv.astro` — Removed the outdated 2024 PDF download button and verification labels; retained the print-ready web CV (`Print / Save as PDF`).
* `src/pages/letters.astro` & `src/pages/contact.astro` — Simplified headings and copy into natural, direct language.
* `src/pages/teaching.astro`, `public/files/cvsreal.pdf`, `public/images/portfolio1.jpg` — Removed from the deployable build (`public/` and `src/pages/`) while preserving archival copies in `legacy-v1/`.

---

## 4. Browser Screenshots & File Paths

All screenshots were captured from a live headless Chromium browser (`1440px` desktop and `390x844` mobile) rendering the production `dist/` build:

| Page & Viewport | Screenshot File Path |
| :--- | :--- |
| Homepage (`/`) — Desktop Light (`1440x1180`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_home_desktop.png` |
| Homepage (`/`) — Desktop Full Page (`1440x3200`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_home_full.png` |
| Homepage (`/`) — Desktop Dark Mode (`1440x1180`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_home_dark.png` |
| Homepage (`/`) — Mobile (`390x844`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_home_mobile.png` |
| Homepage (`/`) — Mobile Menu Expanded (`390x844`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_home_mobile_toc.png` |
| About & Education (`/about/`) — Desktop (`1440x1200`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_about_desktop.png` |
| Work Experience (`/experience/`) — Desktop (`1440x1350`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_experience_desktop.png` |
| Work Experience (`/experience/`) — Mobile (`390x920`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_experience_mobile.png` |
| Projects & Research (`/projects/`) — Desktop (`1440x1350`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_projects_desktop.png` |
| Project Detail (`/projects/tesla-fast-rapid-battery-telemetry/`) — Desktop (`1440x1350`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_monograph_detail.png` |
| Reference Letters (`/letters/`) — Desktop (`1440x1250`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_letters_desktop.png` |
| Curriculum Vitae (`/cv/`) — Desktop (`1440x1350`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_cv_desktop.png` |
| Contact (`/contact/`) — Desktop (`1440x1150`) | `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\after_contact_desktop.png` |

---

## 5. Desktop, Mobile & Build Testing

* **Astro Static Build (`npm run build`):** Completed in `1.01s` with `0` errors and `14` static HTML routes generated (`dist/`).
* **Automated HTML & Asset Verification:**
  * Confirmed `0` `.pdf` files exist anywhere in `dist/`.
  * Confirmed `0` occurrences of banned audit/verification labels (`Verified`, `Unverified`, `cvsreal`, `2024 CV`, `2024 Resume`, `Provenance`, `Pending Confirmation`, `Professional Narrative`, `Biographical Overview`, `Acting President`, `Cofounder`, `president@agrosindustry.com`) across all generated HTML and SVG files.
  * Confirmed all required human headings (`I. About Me`, `My Background`, `Technical Skills`, `Laboratory Experience`, `My engineering experience`) are present in the built HTML.
* **Desktop & Mobile Viewport Inspection:** Verified at `1440px` desktop (Light & Dark modes) and `390x844` mobile (default & expanded `Menu (I)` drawer).

---

## 6. Outstanding Issues & Open Questions

1. **Undated Legacy Website Items Currently Omitted:** The undated `Senior Data Engineer` entry at `Stripe` (from unfinished legacy `_pages/cv.md`), the legacy `_pages/about.md` tool names (`PySpark, FastAPI, PostgreSQL, Kafka, Hadoop, Airflow, GCP, Docker, Kubernetes, PowerBI, Tableau`), and the modified AcademicPages teaching files (`CSE 8A` / `CSE 20`) are currently omitted from public pages so the site contains neither unverified claims nor bureaucratic `"Unverified"` warning badges. Any confirmed items with dates can be added back cleanly.
2. **Family Enterprise Legal Name:** Currently displayed generically as `Family-Owned Enterprise` (`Business Operations & Strategy — Family-Owned Enterprise`).

---

## 7. Git Branch & Commit Information

* **Repository Path:** `C:\Users\Putra Wibisono\Documents\putrawibisono\putrawibisono.github.io`
* **Active Development Branch:** `redesign/v2`
* **Latest Commit on `redesign/v2`:** `166852b` (`content(copy): refine website language, remove verification labels and old CV PDF, add ChatGPT review report`)
* **Production Branch (`master`):** Untouched at `896826b` (nothing has been pushed or deployed to GitHub).
