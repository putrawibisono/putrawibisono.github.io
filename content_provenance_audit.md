# Content Provenance Audit (`content_provenance_audit.md`)

**Subject:** Forensic Content Provenance Audit — Legacy AcademicPages Repository (`master` @ `896826b`) vs. Upstream Template (`2022adb`) vs. Independent Documentation (`files/cvsreal.pdf`)  
**Repository:** `putrawibisono/putrawibisono.github.io` (`https://putrawibisono.com`)  
**Audit Date:** November 13, 2026  

---

## 1. Executive Summary & Audit Methodology

The legacy website (`master` branch at commit `896826b`, preserved intact in `legacy-v1/`) was cloned directly from the **AcademicPages** Jekyll template. Because the full Git history was preserved when the repository was initialized, we established the exact commit boundary between upstream template code and user commits:

1. **Upstream AcademicPages Baseline (`commit 2022adb`, September 22, 2025):** The final commit in the upstream `academicpages/academicpages.github.io` repository before Putra Wibisono's first commit.
2. **Legacy Website Commits (`e01d8ee` through `896826b`, September 28, 2025 – May 10, 2026):** 27 commits made on `master` modifying or adding only **17 files** across the entire repository (`git diff --name-status 2022adb..896826b`). Every other file in the legacy repository is byte-for-byte identical to the upstream AcademicPages template.
3. **Independent Documentation Baseline (`files/cvsreal.pdf`):** A standalone, 2-page typeset LaTeX curriculum vitae (`98,000 bytes`, committed in `2346642` / `ee0c1ca` on October 2, 2025) documenting Putra Wibisono's education, work experience, research activities, technical skills, and engineering projects through **December 2024**.

> [!IMPORTANT]
> **Key Forensic Findings**
> 1. **`_teaching/2014-spring-teaching-1.md` (`CSE 8A`) and `_teaching/2015-spring-teaching-2.md` (`CSE 20`) are modified AcademicPages template files, not verified teaching records:** Both files retain their upstream 2014/2015 template filenames, commented-out `2014-01-01` / `2015-01-01` template dates, and template placeholder body text (`Heading 1 / Sample text`, `"This is a description of a teaching experience. You can use markdown like any other post."`, and `"Adding some edits from H2O PC"`). Neither course is mentioned anywhere in `files/cvsreal.pdf`.
> 2. **`_portfolio/portfolio-1.md` ("Absorption spectroscopy") and `images/portfolio1.jpg` are an unverified, abandoned template edit:** In commit `b1da411` (`"changing github link"`, Sep 29, 2025), the YAML `title` and `excerpt` of `_portfolio/portfolio-1.md` were changed to `"Absorption spectroscopy"` and `"Use data from two UV-Vis spectrometers to measure the band gaps of semiconductor thin films<br/><img src='/images/500x300.png'>"`, while the Markdown body remained **100% verbatim upstream template placeholder text** (`"This is an item in your portfolio. It can be have images or nice text..."`). Later, in commit `9046f7b` (May 10, 2026), Putra commented out `Portfolio` in `_data/navigation.yml`. Neither UV-Vis absorption spectroscopy nor semiconductor thin-film band-gap measurement appears anywhere in `files/cvsreal.pdf`.
> 3. **`_pages/cv.md` was an unfinished draft abandoned on October 2, 2025:** Modified only twice on September 28, 2025 (`commits 85cfcd9` and `b257c70`), `_pages/cv.md` still contains verbatim upstream template text (`Skill 1`, `Sub-skill 2.1`, `Currently signed in to 43 different slack teams`) and was unlinked from `_data/navigation.yml` four days later (`commit 2346642`). Claims appearing only in `_pages/cv.md` or `_pages/about.md` (such as an undated `Senior Data Engineer` role at `Stripe`, a `4680 Cybercell/Drycell (4680C/D Build)` bullet, and several cloud/big-data tool names) have **no corroboration** in `files/cvsreal.pdf` and must be labeled **Unverified (Legacy Website Only — Pending Confirmation)**.
> 4. **`files/cv.pdf` was deliberately replaced with the upstream dummy PDF (`files/paper1.pdf`):** In `commit 2346642` (Oct 2, 2025, 02:57), the real 98,000-byte CV was committed as `files/cv.pdf`. Three minutes later (`commit ee0c1ca`, 03:01, `"pdf changes"`), `files/cv.pdf` was overwritten with `files/paper1.pdf` (`8,902 bytes`, the AcademicPages dummy placeholder PDF) and the real CV was renamed to `files/cvsreal.pdf`.

---

## 2. File-by-File Comparison Against Upstream AcademicPages (`2022adb..896826b`)

Running `git diff --name-status 2022adb..896826b` across all content directories (`_teaching`, `_portfolio`, `_publications`, `_talks`, `_posts`, `_pages`, `_data`, `files`, `images`) yields the complete provenance ledger below:

| Legacy File Path | Upstream (`2022adb`) Blob | Legacy (`896826b`) Blob | Git Status | Provenance Classification | Summary of Diff vs. Upstream Template |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `_teaching/2014-spring-teaching-1.md` | `e354740` | `c74b02d` | `M` (Modified) | **Modified Template Demo — Unverified** | Inherited filename `2014-spring-teaching-1.md`. Changed `title` from `"Teaching experience 1"` to `"CSE 8A"`, `venue` to UCSD CSE, commented out `date: 2014-01-01`, pasted UCSD CSE 8A catalog learning outcomes, and kept template `Heading 1 / Sample text`, `Heading 2 / Sample text`, `Heading 3`. Absent from `cvsreal.pdf`. |
| `_teaching/2015-spring-teaching-2.md` | `58e1ddb` | `cc87dc6` | `M` (Modified) | **Modified Template Demo — Unverified** | Inherited filename `2015-spring-teaching-2.md`. Changed `title` from `"Teaching experience 2"` to `"CSE 20"`, `venue` to `"University of California, San Diego, Departement of Computer Science and Engineering"` (typo), commented out `date: 2015-01-01`. Kept verbatim template text `"This is a description of a teaching experience. You can use markdown like any other post."` plus test string `"Adding some edits from H2O PC"`. Absent from `cvsreal.pdf`. |
| `_portfolio/portfolio-1.md` | `847af9e` | `a57a00d` | `M` (Modified) | **Modified Template Demo — Unverified (Excluded)** | Changed only 2 YAML lines (`title: "Absorption spectroscopy"`, `excerpt: "Use data from two UV-Vis spectrometers to measure the band gaps of semiconductor thin films<br/><img src='/images/500x300.png'>"`). Body text is 100% untouched upstream template placeholder (`"This is an item in your portfolio..."`). Unlinked from `_data/navigation.yml` in `commit 9046f7b`. Absent from `cvsreal.pdf`. |
| `images/portfolio1.jpg` | *(none)* | `d89f...` | `A` (Added) | **Unverified Asset — Excluded** | Added in `commit b1da411` (`"changing github link"`) alongside `_portfolio/portfolio-1.md`, never referenced by any Markdown or HTML file in the legacy site, and uncorroborated by `cvsreal.pdf`. |
| `_portfolio/portfolio-2.html` | `227dc35` | `227dc35` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Portfolio item number 2"`). |
| `_publications/2009-10-01-paper-title-number-1.md` | `e7a8ae9` | `e7a8ae9` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Paper Title Number 1"`). |
| `_publications/2010-10-01-paper-title-number-2.md` | `cc003fd` | `cc003fd` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Paper Title Number 2"`). |
| `_publications/2015-10-01-paper-title-number-3.md` | `f8f79e2` | `f8f79e2` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Paper Title Number 3"`). |
| `_publications/2024-02-17-paper-title-number-4.md` | `0fc3897` | `0fc3897` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Paper Title Number 4"`). |
| `_publications/2025-06-08-paper-title-number-5.md` | `84ea79c` | `84ea79c` | Unchanged | **100% Upstream Template Demo** | Identical to upstream AcademicPages (`"Paper Title Number 5"`). |
| `_talks/2012-03-01-talk-1.md` (and `tutorial-1`, `talk-2`, `talk-3`) | Upstream | Upstream | Unchanged | **100% Upstream Template Demo** | All 4 files in `_talks/` are byte-for-byte identical to upstream AcademicPages. |
| `_posts/2012-08-14-blog-post-1.md` (through `future-post.md`) | Upstream | Upstream | Unchanged | **100% Upstream Template Demo** | All 5 files in `_posts/` are byte-for-byte identical to upstream AcademicPages. |
| `files/cv.pdf` | `a128726` (`paper1.pdf`) | `a128726` | `R100` (`paper1.pdf` -> `cv.pdf`) | **100% Upstream Template Dummy PDF** | Identical (`R100`, `8,902 bytes`) to upstream `files/paper1.pdf` (`"Locate the file here: /files/paper1.pdf"`). Overwrote the real CV in `commit ee0c1ca`. |
| `files/cvsreal.pdf` | *(none)* | `3d81e1c` | `A` (Added) | **Independent Documentation (Verified Primary Source)** | 98,000-byte 2-page LaTeX resume added in `commit 2346642` / `ee0c1ca` (Oct 2, 2025), covering education, industry roles, research, skills, and projects through Dec 2024. |
| `files/paper2.pdf`, `paper3.pdf`, `slides1-3.pdf`, `bibtex1.bib` | Upstream | Upstream | Unchanged | **100% Upstream Template Demo** | Byte-for-byte identical to upstream AcademicPages dummy files. |
| `images/profile.png`, `bio-photo.jpg`, `bio-photo-2.jpg`, `500x300.png` | Upstream | Upstream | Unchanged | **100% Upstream Template Demo** | Byte-for-byte identical to upstream AcademicPages placeholder images. |
| `_data/cv.json` | `5eb6515` | `5eb6515` | Unchanged | **100% Upstream Template Demo** | Byte-for-byte identical to upstream AcademicPages (`"Some Generic Name"`, `"Red Brick University"`). |
| `_pages/cv.md` | `5e1f08a` | `87c3947` | `M` (Modified) | **Partially Edited Template File (Mixed / Unfinished)** | Edited `Education` and `Work experience` (`Stripe`, `Tesla`, `ATOM Research`) on Sep 28, 2025 (`commits 85cfcd9`, `b257c70`), but left `Skills` (`Skill 1`, `Sub-skill 2.1`), `Teaching`, and `Service and leadership` (`"Currently signed in to 43 different slack teams"`) untouched from template. Unlinked from nav in `commit 2346642`. |
| `_pages/about.md` | `1595a5b` | `2a84d7a` | `M` (Modified) | **Legacy Website Prose (Website-Only Source)** | Replaced template README frontpage with 4 short paragraphs, a 15-item data stack bullet list, and 4 agricultural activity bullets (`commits 6a42f7a..b2faacb`, `9046f7b`). Not independently corroborated by `cvsreal.pdf`. |
| `_pages/letters.md` | *(none)* | `7ce450a` | `A` (Added) | **Legacy Website Prose (Website-Only Source)** | Added on Oct 2, 2025 (`commits 1601717`, `3c4054a`, `507cbed`). Offers recommendation letters and references `Stripe`, `Tesla`, agricultural ventures, and students. |
| `_config.yml` | `0044938` | `9cadf6d` | `M` (Modified) | **Legacy Website Config (Mixed / Superseded)** | Set `name: "Putra Wibisono"`, `bio: "Cofounder of Agricultural Technologies. Ex-Stripe, Ex-Tesla. Passionate about ML/AI"`, `employer: "UC Berkeley"`, `email: "president@agrosindustry.com"`, `github: "EytaW"`. Contains inaccurate `"Cofounder"` claim and legacy email superseded by user instructions. |

---

## 3. Deep-Dive Forensic Analysis of Template-Modified Files

### 3.1 `_teaching/2014-spring-teaching-1.md` and `_teaching/2015-spring-teaching-2.md`

Both files in `_teaching/` were inherited directly from the upstream AcademicPages repository (`_teaching/2014-spring-teaching-1.md` and `_teaching/2015-spring-teaching-2.md`) and edited through the GitHub web editor on September 28–29, 2025 (`commits 4d96591`, `42f07bf`, `a30a7aa`, `efc5595`, `1aeaf8d`, `7d52d4e`, `0191ab9`, `a54d5fa`).

* **Exact Diff of `_teaching/2014-spring-teaching-1.md` (`e354740..c74b02d`):**
  * The upstream filename `2014-spring-teaching-1.md` and commented frontmatter `# date: 2014-01-01` were retained (Putra graduated UCSD with his B.S. in June 2021 and was not a university instructor in Spring 2014).
  * `title: "Teaching experience 1"` was changed to `title: "CSE 8A"`, and `venue: "University 1, Department"` was changed to `venue: "University of California, San Diego, Department of Computer Science and Engineering (CSE)"`.
  * Seven bullet points were pasted from the official UCSD CSE 8A course syllabus (*"Students who successfully complete CSE 8A will be able to..."*), while the bottom of the file retained the upstream template placeholders:
    ```markdown
    Heading 1
    ======
    Sample text

    Heading 2
    ======
    Sample text
    Heading 3
    ======
    ```
* **Exact Diff of `_teaching/2015-spring-teaching-2.md` (`58e1ddb..cc87dc6`):**
  * The upstream filename `2015-spring-teaching-2.md`, `permalink: /teaching/2015-spring-teaching-1`, and `# date: 2015-01-01` were retained.
  * `title: "Teaching experience 2"` was changed to `title: "CSE 20"`, `type: "Workshop"` to `type: "Undergraduate Course"`, and `venue` to `"University of California, San Diego, Departement of Computer Science and Engineering"` (containing the typo `"Departement"`).
  * The body text is **100% upstream template demonstration text** plus a single 5-word test line committed from a PC (`commit a54d5fa`, `"testing some modification and see if it works now or not"`):
    ```markdown
    This is a description of a teaching experience. You can use markdown like any other post.

    Heading 1
    ======
    Adding some edits from H2O PC

    Heading 2
    ======

    Heading 3
    ======
    ```
* **Cross-Check Against Independent Documentation (`files/cvsreal.pdf`):**
  * `files/cvsreal.pdf` documents Putra's UCSD undergraduate years (`B.S. Chemical Engineering, Minor: Computer Science, June 2021`) and explicitly lists his UCSD academic appointment under `Research Activities`: **`Research Assistant — Battery Engineering, Department of Nanoengineering, UCSD (September 2020 – June 2021)`**.
  * `files/cvsreal.pdf` contains **zero mention** of any Teaching Assistantship, Tutor role, or Instructor role in the UCSD CSE department for `CSE 8A` or `CSE 20`.
* **Audit Conclusion:** Both files are modified AcademicPages template demonstrations and **must not** be treated as verified UCSD teaching experience.

### 3.2 `_portfolio/portfolio-1.md` and `images/portfolio1.jpg`

* **Exact Diff of `_portfolio/portfolio-1.md` (`847af9e..a57a00d`, commit `b1da411`):**
  ```diff
  --- a/_portfolio/portfolio-1.md
  +++ b/_portfolio/portfolio-1.md
  @@ -1,6 +1,6 @@
   ---
  -title: "Portfolio item number 1"
  -excerpt: "Short description of portfolio item number 1<br/><img src='/images/500x300.png'>"
  +title: "Absorption spectroscopy"
  +excerpt: "Use data from two UV-Vis spectrometers to measure the band gaps of semiconductor thin films<br/><img src='/images/500x300.png'>"
   collection: portfolio
   ---
  ```
  * The Markdown body below the frontmatter was never touched:
    `This is an item in your portfolio. It can be have images or nice text. If you name the file .md, it will be parsed as markdown. If you name the file .html, it will be parsed as HTML.`
  * Even after `images/portfolio1.jpg` was added in the same commit (`b1da411`, message: `"changing github link"`), `_portfolio/portfolio-1.md` continued to point to `<img src='/images/500x300.png'>`.
  * In `commit 9046f7b` (May 10, 2026), Putra commented out `Portfolio` in `_data/navigation.yml` (`# - title: "Portfolio"` / `# url: /portfolio/`).
  * `files/cvsreal.pdf` lists Putra's UCSD Nanoengineering characterization instruments as **NMR, FTIR, XRD, ROTAP shaker, vacuum oven, glove box, and battery cyclers**—plus four named academic engineering projects (`LPCVD`, `Gitlet`, `Digital Image Processing`, `Spatiotemporal Output of a Speaker`) and seven additional table entries (`Catalytic Bed Reactor`, `Hydrogen on Demand`, `Ideal Gas Simulation`, `Ant vs Doodlebug`, `Employee Paycheck`, `2048`, `Deques`). Neither UV-Vis absorption spectroscopy nor semiconductor thin-film band-gap measurement appears anywhere in `files/cvsreal.pdf`.
* **Audit Conclusion:** `_portfolio/portfolio-1.md` and `images/portfolio1.jpg` represent an abandoned, unverified template test edit and have been **removed from the public-facing website's Projects and About pages**.

---

## 4. Claim-by-Claim Provenance Matrix

Every substantive claim across the legacy repository and `files/cvsreal.pdf` is classified below into one of four provenance tiers:
* **`Verified (Independent Documentation)`**: Explicitly supported by `files/cvsreal.pdf` (or direct user correction in this session).
* **`Unverified — Legacy Website Only`**: Supported only by `_pages/about.md`, `_pages/cv.md`, `_pages/letters.md`, or `_config.yml`, without corroboration in `files/cvsreal.pdf`. Labeled as unverified on the public site until confirmed by the user.
* **`Modified Template Demo — Unverified`**: Edited inside an upstream AcademicPages demonstration file (`_teaching/2014-spring-teaching-1.md`, `_teaching/2015-spring-teaching-2.md`, `_portfolio/portfolio-1.md`) while retaining template placeholder text and lacking corroboration in `files/cvsreal.pdf`.
* **`Inaccurate / Template Placeholder — Excluded`**: Either 100% untouched AcademicPages demo content or explicitly corrected by the user (e.g., `"Cofounder"` / `"president@agrosindustry.com"`).

### 4.1 Professional Roles, Employment Titles, Companies & Chronology

| Claim / Role | Legacy Source(s) | Independent Doc (`files/cvsreal.pdf`) | Confidence Level | Discrepancies & Chronological Audit | Public Website Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Business Operations & Strategy — Family-Owned Enterprise** *(Current agricultural involvement)* | `_config.yml` (`"Cofounder of Agricultural Technologies"`, `president@agrosindustry.com`); `_pages/about.md` (`"agri-tech entrepreneur"`) | Not in `cvsreal.pdf` (post-Dec 2024 involvement) | **User-Corrected Public Description** | Legacy site inaccurately used `"Cofounder"` and `"agri-tech entrepreneur"`. Per user instruction, use **`Business Operations & Strategy — Family-Owned Enterprise`** unless a formal Acting President appointment is independently established. | Updated role title everywhere to **`Business Operations & Strategy — Family-Owned Enterprise`**. Removed all `"Cofounder"`, `"Founder"`, and formal `"Acting President"` headline claims. |
| **Company Name: `"Agros Industry"`** | Inferred only from email domain `president@agrosindustry.com` in `_config.yml` and `_pages/letters.md` | Not in `cvsreal.pdf` | **Unverified — Inferred from Legacy Domain Only** | Never stated in prose as the formal legal name of the family enterprise. | Flagged as unverified; public site uses **`Family-Owned Enterprise`** (noting `agrosindustry.com` only as a legacy domain pending legal entity confirmation). |
| **Senior Data Engineer — Stripe (`Remote`, undated)** | `_pages/cv.md` (`commit 85cfcd9`); `_pages/about.md` (`"Ex-Stripe, Ex-Tesla"`); `_pages/letters.md` | **Absent** from `cvsreal.pdf` | **Unverified — Legacy Website Only** | Listed at the top of `_pages/cv.md` without dates, while `cvsreal.pdf` (dated through **December 2024**) lists full-time employment at Rivian (`Sep 2021 – Sep 2022`), UC Berkeley / ATOM Science (`Sep 2022 – Jun 2023`), and Tesla (`May 2023 – Dec 2024`), leaving no chronological gap prior to Dec 2024. | Removed `"Ex-Stripe"` from hero/primary verified headline claims; retained entry on `/experience/` and `/cv/` with an explicit **`Unverified — Legacy Website Only (Pending Confirmation)`** badge and provenance note. |
| **Sr. Data Engineer (P3) — Tesla Inc. (`Fremont, CA`, `Apr 2024 – Dec 2024`)** | `_pages/cv.md` (lists title as `"Data Scientist"`, undated) | **Verified** (`Sr. Data Engineer (P3)`, `April, 2024 – December, 2024`, Fremont, CA) | **Verified (Independent Documentation)** | `cvsreal.pdf` provides exact title (`Sr. Data Engineer (P3)`), dates (`Apr 2024 – Dec 2024`), and location (`Fremont, CA`), whereas unfinished `_pages/cv.md` wrote `"Data Scientist"` without dates. | Public site uses the verified `cvsreal.pdf` title (`Sr. Data Engineer (P3)`), dates, and deliverables, while noting the `_pages/cv.md` variant separately. |
| **Data Engineer (P2) — Tesla Inc. (`Fremont, CA`, `May 2023 – Apr 2024`)** | `_pages/cv.md` (merged under undated `"Data Scientist"`) | **Verified** (`Data Engineer (P2)`, `May, 2023 – April, 2024`, Fremont, CA) | **Verified (Independent Documentation)** | Chronologically consistent with UC Berkeley M.Eng completion (`May/June 2023`) and promotion to `P3` in `April 2024`. | Public site uses the verified `cvsreal.pdf` title (`Data Engineer (P2)`), dates, and deliverables. |
| **Data Science Intern — ATOM Science (`San Francisco, CA`, `Sep 2022 – May 2023`)** | `_pages/cv.md` (lists title as `"Data Scientist"` and company as `"ATOM Research"`, undated) | **Verified** (`Data Science Intern`, `ATOM Science`, `September, 2022 – May, 2023`, San Francisco, CA) | **Verified (Independent Documentation)** | `_pages/cv.md` inflated `"Data Science Intern"` to `"Data Scientist"` and wrote `"ATOM Research"` instead of `"ATOM Science"`, while copying the exact same 3 bullet points word-for-word from `cvsreal.pdf`. | Public site uses the verified `cvsreal.pdf` title (`Data Science Intern`) and company (`ATOM Science`), and flags `"Data Scientist / ATOM Research"` as an unverified `_pages/cv.md` variant. |
| **Process Development Engineer, Formation — Rivian (`Irvine, CA`, `Sep 2021 – Sep 2022`)** | Omitted from unfinished `_pages/cv.md` | **Verified** (`Process Development Engineer, Formation`, `Rivian`, `September, 2021 – September, 2022`, Irvine, CA) | **Verified (Independent Documentation)** | Chronologically spans the exact 1-year period between UCSD B.S. graduation (`June 2021`) and UC Berkeley M.Eng matriculation (`Fall 2022`). | Displayed as a core verified industry role on `/`, `/about/`, `/experience/`, and `/cv/`. |
| **Research Assistant — Battery Engineering, Dept. of Nanoengineering, UCSD (`San Diego, CA`, `Sep 2020 – Jun 2021`)** | Omitted from unfinished `_pages/cv.md` | **Verified** (`Research Assistant`, `Battery Engineering, Department of Nanoengineering, UCSD`, `September, 2020 – June, 2021`) | **Verified (Independent Documentation)** | Senior undergraduate research appointment at UCSD (`Sep 2020 – Jun 2021`). | Displayed as a verified research appointment on `/experience/` and `/cv/`. |

### 4.2 Technical Achievements, Quantitative Metrics & Project Status

| Claim / Metric / Project | Source(s) | Independent Doc (`files/cvsreal.pdf`) | Confidence Level | Audit Notes & Status Classification | Public Website Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tesla FAST (`Formation Analytics Screening Toolbox`) library for battery manufacturing datasets & parameter optimization** | `files/cvsreal.pdf` & `_pages/cv.md` | **Verified** (Corroborated in both `cvsreal.pdf` and `_pages/cv.md`) | **Verified (Independent Documentation)** | Independently documented in `cvsreal.pdf` under `Sr. Data Engineer (P3)` and in `_pages/cv.md`. | Featured as a primary verified engineering system. |
| **Tesla RAPID internal dashboard for Gigafactory Berlin & Gigafactory Austin** | `files/cvsreal.pdf` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Explicitly documented in `cvsreal.pdf` under `Sr. Data Engineer (P3)`. | Featured as a primary verified engineering system. |
| **Tesla End-of-Line (EoL) automated early defect detection & vendor scoring parameters** | `files/cvsreal.pdf` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Explicitly documented in `cvsreal.pdf` under `Sr. Data Engineer (P3)`. | Included in verified Tesla P3 record. |
| **Tesla Milmont factory data streams (`temperature, pH, current`) to AWS** | `files/cvsreal.pdf` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Explicitly documented in `cvsreal.pdf` under `Data Engineer (P2)`. | Included in verified Tesla P2 record. |
| **Tesla Gen 4 & Gen 5 ML battery simulation models (Model Y & Model 3 across vendors) & API call-and-sync recipe systems for 4680 cells** | `files/cvsreal.pdf` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Explicitly documented in `cvsreal.pdf` under `Data Engineer (P2)`. | Featured as a verified engineering achievement. |
| **Tesla `"4680 Cybercell and Drycell recipes (4680C/D Build) for GFTX manufacturing"`** | `_pages/cv.md` (`commit 85cfcd9`) | **Not in `cvsreal.pdf`** (`cvsreal.pdf` mentions 4680 battery cells via API recipe systems, not `"4680C/D Build Cybercell/Drycell"`) | **Unverified — Legacy Website Only** | Appears only in `_pages/cv.md`. Plausible internal terminology, but not in `cvsreal.pdf`. | Separated from the verified `cvsreal.pdf` bullets and labeled **`Unverified — Legacy Website Only (_pages/cv.md)`**. |
| **Rivian `6 deployed formation recipes` (`4 development, 2 production`) serving as standard for `1 year (Dec 2021 – Dec 2022)` across `R1S, R2, R3` with Tesla Supercharger compatibility & SEI precharge anomaly detection** | `files/cvsreal.pdf` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Specific quantitative metric (`6 recipes: 4 dev, 2 prod`, `Dec 2021 – Dec 2022`) supported directly by `cvsreal.pdf`. | Featured as a verified engineering achievement and quantitative metric. |
| **Academic & Coursework Projects in `cvsreal.pdf`: `LPCVD (Mar–Jun 2021)`, `Gitlet in Java (Jul 2022)`, `Digital Image Processing in MATLAB (Apr 2020)`, `Spatiotemporal Output of a Speaker in MATLAB (Feb 2020)`, plus 7 additional coursework projects** | `files/cvsreal.pdf` (page 2) | **Verified** (`cvsreal.pdf`, page 2) | **Verified (Independent Documentation)** | Completed academic/engineering projects with exact dates, mathematical formulations, and implementation notes in `cvsreal.pdf`. | Showcased on `/projects/` and `/cv/` as verified completed projects. |
| **Portfolio Item: `"Absorption spectroscopy — Use data from two UV-Vis spectrometers to measure the band gaps of semiconductor thin films"` & `images/portfolio1.jpg`** | `_portfolio/portfolio-1.md` (`commit b1da411`, later hidden in `commit 9046f7b`) | **Absent** from `cvsreal.pdf` | **Modified Template Demo — Unverified (Excluded)** | Edited onto top of upstream template file `_portfolio/portfolio-1.md` while keeping template body `"This is an item in your portfolio..."` and `/images/500x300.png` reference; later commented out of navigation. | **Removed** from public `/projects/` and `/about/` pages; `images/portfolio1.jpg` removed from public pages; documented in this audit. |
| **Agricultural IoT sensor pipelines, historical satellite imaging baseline, organic fertilizer demo plots, partner reporting, and farmer training** | `_pages/about.md` (`commits 6a42f7a..b2faacb`) | **Absent** from `cvsreal.pdf` | **Unverified — Exploratory / Proposed Concepts (Legacy Website Only)** | Described in `_pages/about.md` only at a high level without technical architecture, code repositories, deployment dates, or quantitative results. Per Requirement 6, must **not** be presented as active engineering development or completed software systems. | Removed the standalone agricultural software card from `/projects/`; reframed on `/about/`, `/experience/`, and `/` strictly as **Exploratory Concepts & Proposed Areas of Interest (`Unverified — Legacy Website Only`)**. |

### 4.3 Education, Skills, Teaching & Contact Information

| Item / Category | Source(s) | Independent Doc (`files/cvsreal.pdf`) | Confidence Level | Public Website Action |
| :--- | :--- | :--- | :--- | :--- |
| **UC Berkeley — M.Eng. in Materials Science & Engineering (conc. Data Science), `June 2023`, `Major GPA: 3.92`** | `files/cvsreal.pdf` & `_pages/cv.md` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Displayed as verified education credential. |
| **UC San Diego — B.S. in Chemical Engineering, Minor: Computer Science, `June 2021`** | `files/cvsreal.pdf` & `_pages/cv.md` | **Verified** (`cvsreal.pdf`, page 1) | **Verified (Independent Documentation)** | Displayed as verified education credential. |
| **Skills in `cvsreal.pdf`: `Python (NumPy, Pandas, Matplotlib.pyplot)`, `SQL`, `C++`, `Java`, `MATLAB`, `COMSOL`, `Aspen`, `TensorFlow`, `Keras`, `AWS`, `C`, `HTML`, `CSS`, `JavaScript`, plus battery wet-lab (`Glove Box, Vacuum Oven, NMR, FTIR, XRD, ROTAP, Coin Cell Assembly`)** | `files/cvsreal.pdf` (pages 1–2) | **Verified** (`cvsreal.pdf`, pages 1–2) | **Verified (Independent Documentation)** | Displayed as **Verified Technical Stack (`files/cvsreal.pdf`)**. |
| **Skills only in `_pages/about.md`: `PySpark`, `Flask/FastAPI`, `PostgreSQL`, `Kafka`, `Hadoop`, `Airflow`, `GCP`, `Docker`, `Kubernetes`, `PowerBI`, `Tableau`** | `_pages/about.md` & `_pages/letters.md` | **Absent** from `cvsreal.pdf` | **Unverified — Legacy Website Only** | Separated from the `cvsreal.pdf` skills and explicitly labeled **`Unverified — Legacy Website Only (_pages/about.md) · Pending Confirmation`**. |
| **UCSD Teaching (`CSE 8A` in `2014-spring-teaching-1.md` & `CSE 20` in `2015-spring-teaching-2.md`)** | `_teaching/2014-spring-teaching-1.md` & `_teaching/2015-spring-teaching-2.md` | **Absent** from `cvsreal.pdf` | **Modified Template Demo — Unverified** | Removed `Teaching` from top-level header navigation; labeled both items on `/teaching/` and `/cv/` as **`Unverified — Modified AcademicPages Template Files (Pending Confirmation)`**. |
| **Public Contact Email: `putrawibisonos@gmail.com`** | User instruction & `files/cvsreal.pdf` | **Verified** (`putrawibisonos@gmail.com` is also the exact email printed at the top of `files/cvsreal.pdf`!) | **Verified (Independent Documentation & User Confirmed)** | Used everywhere on the public website (`mailto:putrawibisonos@gmail.com`), replacing `president@agrosindustry.com`. |

---

## 5. Archival Preservation & Public Website Adjustments Summary

1. **Zero Deletion of Archival Source Files:** All legacy files in `legacy-v1/` (`_teaching/*`, `_portfolio/*`, `_pages/*`, `_config.yml`, etc.) and `public/files/` (`cvsreal.pdf`, `cv_legacy_placeholder.pdf`) remain completely untouched.
2. **Public Role Description Updated (Requirement 7):** Replaced `"Acting President (as needed) — Family-Owned Agricultural Business"` across the entire public website with **`"Business Operations & Strategy — Family-Owned Enterprise"`**.
3. **Exploratory Agricultural Concepts Reframed (Requirement 6):** Removed `agritech-iot-satellite-intelligence` from the active/completed `/projects/` portfolio and reframed the legacy `_pages/about.md` agricultural items strictly as **Exploratory Concepts & Proposed Initiatives (Unverified — Legacy Website Only)**.
4. **Template-Derived UV-Vis Spectroscopy Item Removed from Public Portfolio (Requirement 1 & 2):** Removed `uv-vis-semiconductor-spectroscopy` and `images/portfolio1.jpg` from `/projects/` and `/about/` after proving `_portfolio/portfolio-1.md` retained the verbatim AcademicPages template body and was unlinked by the author in `commit 9046f7b`.
5. **Clear Provenance Labels Added Across All Public Pages (Requirement 3, 4 & 5):** Every role, skill group, and teaching entry on the public website now carries an explicit provenance badge distinguishing **Verified (`files/cvsreal.pdf`)** facts from **Unverified (`Legacy Website Only — Pending Confirmation`)** items.
