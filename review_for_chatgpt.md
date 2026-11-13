# Independent Website Review Brief (`review_for_chatgpt.md`)

### Project Overview
This project is a complete ground-up rebuild of **Putra Wibisono's** personal website (`https://putrawibisono.com` / `https://putrawibisono.github.io`), replacing an older Jekyll AcademicPages template site with a custom static site built in **Astro 5** (`output: 'static'`, TypeScript, and custom CSS).

The creative direction—**The Personal Monograph & Field Dossier**—draws inspiration from classical scientific monographs, university press publications, and engineering lab notebooks rather than SaaS landing pages or generic AI portfolio templates. It uses warm uncoated paper tones, exposed hairline rules, editorial serif typography, and technical system schematics to present Putra's background across data engineering, electric-vehicle battery manufacturing, materials science, and family business operations.

---

### Changes Made
1. **Rewrote Public Copy in Natural, First-Person Engineering Language:**
   - Replaced overly formal or bureaucratic headings and phrases across the site:
     - `"Biographical Overview"` → **`"About Me"`**
     - `"Professional Narrative"` → **`"My Background"`**
     - `"Verified Stack"` → **`"Technical Skills"`**
     - `"Verified Laboratory Background"` → **`"Laboratory Experience"`**
     - `"My verified engineering record"` → **`"My engineering experience"`**
   - Removed all public-facing source-verification badges and audit jargon (`"Verified — Dec 2024 CV"`, `"(CVSREAL.PDF)"`, `"Unverified — Legacy Website Only"`, `"Provenance & Verification Standard"`).
2. **Removed All Public References & Downloads for the Outdated December 2024 CV:**
   - Removed the outdated `cvsreal.pdf` file from the deployable `public/` directory (while keeping an archival copy in `legacy-v1/files/cvsreal.pdf` outside the production build).
   - Removed all download buttons, links, and badges referencing the December 2024 CV PDF.
   - Retained the web-based, print-formatted **Curriculum Vitae** page (`/cv/`).
3. **Updated Role Description, Contact Email & Content Provenance:**
   - Set the public role description everywhere to **`Business Operations & Strategy — Family-Owned Enterprise`** (removing inaccurate `"Cofounder"` / `"Founder"` labels and avoiding unverified statutory title claims).
   - Updated the public contact email everywhere to **`putrawibisonos@gmail.com`**.
   - Excluded AcademicPages template demonstration remnants (`_teaching/2014-spring-teaching-1.md`, `_teaching/2015-spring-teaching-2.md`, `_portfolio/portfolio-1.md`) from the public site and framed agricultural data/field-trial items as exploratory interests rather than active software engineering pipelines.

---

### Current Design
* **Layout & Grid Architecture:**
  - **Desktop (`> 1080px`):** A 2-zone asymmetric layout with a fixed/sticky left running spine (`270px` wide) housing identity, a Roman-numeral directory (`I.`–`VII.`), contact links, and the surface theme toggle; and a main reading column (`max-width: 1020px`) that subdivides into a primary essay column (`60ch–68ch`) and a right-hand marginalia column (`240px`) for technical notes.
  - **Mobile & Tablet (`<= 1080px`):** Collapses into a single-column reading flow with a compact top folio bar (`Putra Wibisono`, `Dark Mode`, and `Menu (I)` drawer toggle).
* **Typography:**
  - **Display & Editorial Prose:** `Newsreader` (optical-size serif with italics and drop caps).
  - **Scannable Tables, Bullet Lists & UI:** `Instrument Sans`.
  - **Dates, Indexing & Technical Metadata:** `IBM Plex Mono`.
* **Color Palette:**
  - **Light Mode (Default — Uncoated Cotton Paper):** `#F6F3EC` primary surface, `#EFECE2` tinted callout surface, `#181614` carbon ink, `#9E331E` terracotta rubric accent, `#2B4C3F` mineral slate secondary accent, and `#D4CEC0` hairline rules.
  - **Dark Mode (Charcoal Vellum):** `#141311` background, `#1C1A17` elevated surface, `#EAE5DC` parchment text, `#D96B4E` warm ochre-terracotta accent, and `#2E2B26` hairline rules.
* **Key Interactions:**
  - Persistent Light/Dark surface toggle (`localStorage`).
  - Client-side domain filter buttons on `/projects/` (`All Entries`, `Data & Battery Systems`, `Scientific Computing & Materials`, `Software Engineering`).
  - Interactive Recommendation Letter request email formatter on `/letters/` that pre-populates a structured `mailto:` draft to `putrawibisonos@gmail.com`.
  - One-click `Copy Email` button on `/contact/` and `Print / Save as PDF` button (`window.print()`) on `/cv/`.

---

### Relevant Content

#### 1. Identity & Headlines
* **Name:** Putra Wibisono
* **Primary Role Headline:** `Data Engineer & Materials Scientist · Ex-Tesla, Ex-Rivian`
* **Current Role Description:** `Business Operations & Strategy — Family-Owned Enterprise`
* **Public Contact Email:** `putrawibisonos@gmail.com`
* **Homepage H1 (`/`):** *Data engineering, materials science, and business operations.*
* **About Page H1 (`/about/`):** *From chemical & materials engineering to battery telemetry and business operations.*
* **Work Experience H1 (`/experience/`):** *Engineering, Research & Operations.*
* **Projects Page H1 (`/projects/`):** *Engineering Projects & Technical Systems.*

#### 2. Section Headings by Page
* **Homepage (`/`):**
  - `I. About Me`
  - `Current Focus & Agricultural Interests`
  - `II. Work Experience` — `Industry & Research Roles`
  - `III. Selected Work` — `Selected Engineering & Research Projects`
  - `IV. Technical Skills` — `Software Stack & Laboratory Instrumentation`
* **About Page (`/about/`):**
  - `II. Biography & Education`
  - `Education` (UC Berkeley M.Eng., 3.92 Major GPA, June 2023; UC San Diego B.S. Chemical Engineering, Minor in Computer Science, June 2021)
  - `My Background`
  - Sidebar Notes: `Technical Skills`, `Laboratory Experience`, `Contact`
  - `Technical Skills & Laboratory Instrumentation`
* **Work Experience (`/experience/`):**
  - `III. Work Experience`
  - `Roles (2020 – Present)`
  - `Roles & Key Contributions`
  - `Education`
* **Projects & Research (`/projects/`):**
  - `IV. Projects & Research`
  - `Featured Industry & Academic Projects` (5 entries: *FAST Screening Library & RAPID Multi-Factory Telemetry*, *EV Battery Formation Recipes & SEI Precharge Anomaly Diagnostics*, *LPCVD Silicon Wafer Reactor Uniformity Modeling*, *Gitlet — Distributed Version Control System in Java*, *Acoustic Spatiotemporal Output & Digital Image Processing*)
  - `Additional Coursework & Simulation Projects`
* **Reference Letters (`/letters/`):**
  - `V. Reference Letters` — `Recommendation Letters`
  - `Who I Can Write For & Areas of Evaluation`
  - `What I Need From You (Checklist 01–05)`
* **Curriculum Vitae (`/cv/`):**
  - `VI. Curriculum Vitae` (`Print / Save as PDF`)
  - `I. Education`, `II. Work & Research Experience`, `III. Engineering & Research Projects`, `IV. Technical Skills & Laboratory Instrumentation`
* **Contact (`/contact/`):**
  - `VII. Contact` — `Get in Touch`
  - `Direct Email Routing by Topic`

#### 3. Full Public Biography Text (`/` and `/about/`)
> **Lead:** My background spans data engineering, battery manufacturing, and materials science. I currently support business operations and strategic initiatives at my family's agricultural enterprise.
>
> **Paragraph 1:** My engineering experience centers on battery manufacturing telemetry, cell formation protocols, and computational materials research. At Tesla (May 2023 – December 2024), I worked as a Data Engineer (P2) and Senior Data Engineer (P3), where I built the FAST (Formation Analytics Screening Toolbox) library, maintained the real-time RAPID telemetry dashboard for the Berlin and Austin Gigafactories, streamed Milmont facility sensor data to AWS, and built API recipe synchronization workflows for 4680 battery cells.
>
> **Paragraph 2:** Before joining Tesla full-time, I worked as a Data Science Intern at ATOM Science in San Francisco (September 2022 – May 2023) while completing my M.Eng. at UC Berkeley, applying transfer learning and active learning in Python to screen molecular databases for drug discovery. Earlier, as a Process Development Engineer in Formation at Rivian (September 2021 – September 2022), I developed six cell formation recipes for the R1S, R2, and R3 programs and wrote precharge Solid Electrolyte Interphase (SEI) anomaly detection protocols.
>
> **Paragraph 3:** Today, I focus on business operations and strategy at my family's agricultural enterprise, helping manage day-to-day operations while exploring practical ways to apply data analysis, field trials, and clear stakeholder reporting to agricultural workflows.

---

### Screenshots
All screenshots were captured from headless Chrome rendering the built site (`dist/`) and are stored in `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\`:

* `after_home_desktop.png` — Homepage (`/`), Desktop Light Mode (`1440x1180`)
* `after_home_full.png` — Homepage (`/`), Full-Page Desktop Light Mode (`1440x3200`)
* `after_home_dark.png` — Homepage (`/`), Desktop Dark Mode (`1440x1180`)
* `after_home_mobile.png` — Homepage (`/`), Mobile Viewport (`390x844`)
* `after_home_mobile_toc.png` — Homepage (`/`), Mobile Viewport with Navigation Drawer Open (`390x844`)
* `after_about_desktop.png` — Biography & Education (`/about/`), Desktop (`1440x1200`)
* `after_experience_desktop.png` — Work Experience (`/experience/`), Desktop (`1440x1350`)
* `after_experience_mobile.png` — Work Experience (`/experience/`), Mobile (`390x920`)
* `after_projects_desktop.png` — Projects & Research (`/projects/`), Desktop (`1440x1350`)
* `after_monograph_detail.png` — Project Case Study (`/projects/tesla-fast-rapid-battery-telemetry/`), Desktop (`1440x1350`)
* `after_letters_desktop.png` — Recommendation Letters (`/letters/`), Desktop (`1440x1250`)
* `after_cv_desktop.png` — Curriculum Vitae (`/cv/`), Desktop (`1440x1350`)
* `after_contact_desktop.png` — Contact (`/contact/`), Desktop (`1440x1150`)

---

### Technical Validation
* **Completed Checks:**
  - **Static Production Build (`astro build`):** Passed in `1.01s` with `0` errors (`14` HTML routes + `sitemap-index.xml`).
  - **Verification Label & PDF Exclusion Scan:** Automated Node script verified across all generated files in `dist/` that `0` `.pdf` files are present and `0` instances of banned verification/audit strings (`Verified`, `Unverified`, `cvsreal`, `2024 CV`, `Provenance`, `Pending Confirmation`, `Acting President`, `Cofounder`, `president@agrosindustry.com`) appear in the published HTML or SVG files.
  - **Internal Link & Route Integrity:** Verified all navigation links (`I.`–`VII.`), project detail slugs (`/projects/[slug]/`), and legacy `/resume/` route resolve with HTTP `200`.
  - **Responsive & Theme Rendering:** Visually inspected rendered screenshots at `1440px` desktop (Light & Dark modes) and `390x844` mobile.
  - **Semantic Landmarks & Keyboard Navigation:** Verified single `<h1>` per page, `<header>`, `<nav>`, `<main id="main-content">`, `<aside>`, `<footer>`, skip-to-content link, and `aria-expanded` mobile menu state.
* **Checks Not Performed:**
  - Live deployment testing on GitHub Pages (`https://putrawibisono.com`) has not been performed because pushing to production is withheld pending user approval.
  - Screen-reader voiceover testing (NVDA/JAWS) and cross-browser Safari/Firefox manual testing on physical iOS/macOS devices were not performed (testing was conducted in Chromium on Windows).

---

### Known Problems
1. **Excluded Legacy Website Claims Pending User Decision:**
   - The legacy Jekyll site (`_pages/cv.md` and `_pages/about.md`) mentioned an undated `Senior Data Engineer` role at **Stripe**, a list of additional big-data/cloud tools (`PySpark, FastAPI, PostgreSQL, Kafka, Hadoop, Airflow, GCP, Docker, Kubernetes, PowerBI, Tableau`), and two modified AcademicPages template files (`CSE 8A` and `CSE 20`). Because those items were absent from independent documentation and public `"Unverified"` warning badges were removed per instructions, those undated/unconfirmed items are currently omitted from the public pages until confirmed.
2. **Generic Family Business Name:**
   - The current role is listed under `Family-Owned Enterprise` (`Business Operations & Strategy — Family-Owned Enterprise`) because the legal company name has not yet been confirmed for public display.
3. **Portrait / Field Photography:**
   - Because `images/profile.png` in the old repo was the default AcademicPages placeholder icon and `images/portfolio1.jpg` came from an abandoned template edit, the site currently relies on typography and custom SVG technical schematics rather than personal photography.

---

### Questions for Independent Review
1. **Voice & Naturalness:** Does the revised biography, experience timeline, and project copy read naturally—like a capable engineer describing his own work—or do any sentences still feel overly stiff or editorialized?
2. **Balance of Identity:** Does the homepage effectively balance Putra's core technical background (Tesla, Rivian, ATOM Science, UC Berkeley, UC San Diego) with his current role in `Business Operations & Strategy — Family-Owned Enterprise` without overstating exploratory agricultural ideas?
3. **Editorial Layout & Visual Hierarchy:** Do the left running spine, Roman-numeral directory, and two-column ledger tables aid readability and scannability for recruiters, collaborators, and partners?
4. **Handling of Excluded Legacy Claims:** Should any of the omitted legacy website items (such as the cloud/data tools from `_pages/about.md`) be re-integrated once confirmed, and if so, where would they fit best?

---

### Git Status
* **Active Branch:** `redesign/v2`
* **Latest Commit on `redesign/v2`:** `166852b` (`content(copy): refine website language, remove verification labels and old CV PDF, add ChatGPT review report`)
* **Production Modified?** **No.** The `master` branch remains untouched at `896826b`, and no changes have been pushed to GitHub or deployed to `https://putrawibisono.com`.
