# Visual Design Audit — Why the Initial `v2` Build Failed

## 1. Visual Evidence Capture
Using headless Chrome via the DevTools Protocol (`1440×960` full-page desktop and `390×844` mobile viewports), we rendered and inspected both the current local build (`http://localhost:4321/`) and the negative design reference (`https://sourcid.com/`).

## 2. Direct Structural Overlap with `https://sourcid.com`

Comparing the rendered screenshots of `http://localhost:4321/` and `https://sourcid.com/` reveals why the two sites feel cut from the exact same cloth:

| Design Element | `https://sourcid.com` (Commercial Platform) | Rejected `localhost:4321` Portfolio | Why It Fails for a Personal Site |
| :--- | :--- | :--- | :--- |
| **Header Identity Lockup** | Left square monogram icon + bold brand title (`SourcID`) + uppercase monospace subtitle (`GLOBAL SOURCING & PROCUREMENT`). | Left square monogram icon (`PW`) + bold name (`Putra Wibisono`) + uppercase monospace subtitle (`Data Systems & Agri-Tech`). | Makes Putra's personal name look like a corporate B2B subsidiary of SourcID. |
| **Hero Split Composition** | Left column: small dot-eyebrow (`• INTEGRATED COMMODITY...`) + large serif H1 with colored/italicized phrase + 3-line pitch + primary solid button & secondary bordered button. Right column: dark framed card with monospace coordinate labels (`//`). | Left column: small dot-eyebrow (`• BUILDING AGRICULTURAL...`) + large serif H1 with colored/italicized phrase + 3-line pitch + primary solid button & secondary bordered button. Right column: dark framed card (`TELEMETRY // IDENTITY MATRIX`). | Identical visual skeleton. Swapping the text turns one site into the other. |
| **Double-Slash (`//`) & Dot Eyebrow Motif** | Uses `• WHAT WE DO`, `• COMMERCIAL HUBS & CORRIDORS`, and `ID // COMMODITY ORIGIN & COMMERCIAL OPERATIONS HUB` inside dark cards. | Uses `• 01 // CURRENT FOCUS`, `• 02 // SELECTED ENGINEERING`, `PRJ // 01`, `SYS // 01` above every single heading and card. | Overused pseudo-technical decoration that creates visual fatigue and mimics SourcID's "trade desk" UI. |
| **Card & Pill-Badge Containerization** | Dark navy/charcoal cards with thin borders and pill-shaped commodity tags (`Nutmeg & Mace`, `Raw Cashew Nuts`). | Every piece of biography, experience, education, and skill is trapped inside `.surface-card` rounded boxes (`14px` radius) with rounded pill tags (`999px` radius). | Flattens distinct content types (narrative essays, career history, lab instrumentation, academic teaching) into repetitive SaaS feature boxes. |

## 3. Ten Specific AI-Template & Corporate Anti-Patterns Identified

1. **The "B2B SaaS Hero Pitch"**: Headline *"Engineering reliable data systems from gigafactories to living soil"* with a glowing green dot badge (`ACTIVE`) and three CTA buttons looks like a Series A infrastructure startup landing page, not an individual engineer and founder.
2. **Mechanical Eyebrow Repetition**: Every section on every page begins with the exact same `eyebrow-dot` + uppercase monospace label (`01 // ...`, `02 // ...`, `03 // ...`).
3. **Boxification of Everything (`.surface-card` Abuse)**: On the homepage alone, there are **21 separate bordered, rounded dark cards**. Nothing breathes on the page canvas; every paragraph is locked inside a container box.
4. **64px Wallpaper Grid + Glowing Green Accents**: The full-page `64px × 64px` CSS background grid paired with neon emerald (`#34d399`) and glowing box shadows (`--shadow-glow`) is one of the most recognizable tropes of AI-generated developer templates.
5. **Repetitive 2-Column & 3-Column Card Grids**: Initiatives (`2×2` cards), Projects (`2×2` cards), Skills (`2×2` cards), and Education/Letters (`1×2` cards) all share the exact same container width (`1180px`), gap (`1.5rem`), and vertical padding (`6rem`).
6. **Identical Project Card Thumbnails**: Putting a mini dark-mode flowchart box inside all four project cards makes distinct works (a Java version-control engine, a UV-Vis optical spectroscopy lab experiment, a COMSOL reactor simulation, and an Indonesian agri-tech venture) look like four modules of the same SaaS product.
7. **Cloud of Pill Tags (`.tag`)**: Over **60 pill-shaped badges** appear across the homepage and experience page, turning technical depth into visual clutter.
8. **Generic Left-Rail Timeline on `/experience/`**: A vertical line with glowing dots and huge stacked cards that repeats the same layout rhythm as `/projects/` and `/about/`.
9. **Sticky Glassmorphic Navbar (`backdrop-filter: blur(14px)`) with `00..07` Prefixes**: Numbering 8 nav items (`00 Index` through `07 Contact`) inside a blurred floating bar feels contrived and crowded.
10. **Impersonal Marketing Copy**: Phrases like *"Data Rigor Applied to Sustainable Agriculture"* and *"Production Stack & Scientific Computing"* sound like a consulting deck rather than Putra Wibisono's authentic voice.
