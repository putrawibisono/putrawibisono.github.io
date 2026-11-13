# Project Walkthrough (`walkthrough.md`)

## 1. Summary of Changes

1. **Four-Palette Editorial Color System Redesign (Eliminating Anthropic/Claude Aesthetic):**
   - Replaced the previous warm-cream (`#F6F3EC`), charcoal (`#181614`), and terracotta-orange (`#9E331E`) scheme with a complete, multi-palette semantic token system in `src/styles/global.css` supporting both **Light Mode** and **Dark Mode** across four distinct color architectures:
     - **Option A — Midnight Ink & Glacier Blue (`data-palette="a"`):** `#F5F7FA` / `#111827` surfaces, `#1E293B` dark secondary surface, `#1E4DB7` (Light) & `#A8C7F0` (Dark) accents, `#E8EDF5` dark typography.
     - **Option B — Forest Ink & Sage (`data-palette="b"`):** `#F4F6F0` / `#111B17` surfaces, `#22362B` dark secondary surface, `#1F573A` (Light) & `#A9CFB2` (Dark) accents, `#DCE8DD` dark typography.
     - **Option C — Deep Plum & Lavender (`data-palette="c"`):** `#F7F5FA` / `#1B1827` surfaces, `#302941` dark secondary surface, `#53358E` (Light) & `#C5B3F4` (Dark) accents, `#E6DEFA` dark typography.
     - **Option D — Graphite & Mineral Teal (`data-palette="d"` — Default & Recommended):** `#F4F7F6` / `#151B1F` surfaces, `#26383E` dark secondary surface, `#19585C` (Light) & `#92C8C7` (Dark) accents, `#D7EBE9` dark typography.
   - Updated `public/favicon.svg` and `public/og-card.svg` to eliminate all remnants of `#F6F3EC` and `#9E331E`.
2. **Interactive Color Preview Route (`/design-preview/`):**
   - Created `src/pages/design-preview.astro` allowing instant live switching among **Options A, B, C, and D** and between **Light Mode** and **Dark Mode**, with live semantic token swatches, a WCAG 2.1 contrast table, and live specimens of typography, Roman-numeral navigation, links/buttons, `ProjectCard` + `SystemDiagram` SVG schematics, `ExperienceTimeline` entries, marginal notes, and borders/dividers.
   - Configured `astro.config.mjs` so `/design-preview/` is active in development (`http://localhost:4321/design-preview/`), excluded from `sitemap-index.xml`, and automatically removed from `dist/` during production builds unless `INCLUDE_DESIGN_PREVIEW=true` is set.
3. **Natural First-Person Engineering Copy & Provenance Cleanup (Preserved):**
   - Retained all natural-language headings (`I. About Me`, `My Background`, `Technical Skills`, `Laboratory Experience`, `My engineering experience`), zero public source-verification badges, zero `.pdf` files in `dist/`, and standardized role/contact metadata (`Business Operations & Strategy — Family-Owned Enterprise`, `putrawibisonos@gmail.com`).

---

## 2. Design Decisions

* **Why Option D (Graphite & Mineral Teal) Is Set as the Default Recommendation:** Graphite & Mineral Teal (`#151B1F` / `#F4F7F6` / `#19585C` / `#92C8C7`) immediately removes any visual similarity to Claude/Anthropic while evoking precision laboratory instrumentation, electrochemical cells, and technical field notebooks—bridging Tesla data engineering, Rivian battery formation, UC Berkeley/UCSD materials science, and agricultural business operations.
* **Independent Light & Dark Mode Token Engineering:** Because pastel accents (`#A8C7F0`, `#A9CFB2`, `#C5B3F4`, `#92C8C7`) have high luminance (`L ≈ 0.52–0.58`), they serve directly as primary `--rubric` accents in Dark Mode (`9.22:1`–`10.27:1` contrast) and as `--accent-pastel` in Light Mode alongside deep companion shades (`#1E4DB7`, `#1F573A`, `#53358E`, `#19585C`) that achieve `6.99:1`–`8.55:1` contrast on Light-mode paper.

---

## 3. Files Modified

* `src/styles/global.css` — Replaced terracotta/cream tokens with 4 complete Light & Dark palette token sets (`data-palette="a|b|c|d"`) and added `/design-preview/` styles.
* `src/layouts/BaseLayout.astro` — Added zero-flash initialization and URL query parameter persistence (`?palette=a|b|c|d&theme=light|dark`) for both palette and surface mode.
* `src/pages/design-preview.astro` — Created interactive color system preview route with live palette switcher, token swatches, contrast matrix, and live component specimens.
* `astro.config.mjs` — Excluded `/design-preview` from sitemap and added build hook removing `dist/design-preview/` from production builds unless `INCLUDE_DESIGN_PREVIEW=true`.
* `public/favicon.svg` & `public/og-card.svg` — Updated static SVG colors to Graphite & Mineral Teal.
* `color_palette_review.md` — Created comprehensive standalone palette review report for ChatGPT evaluation.

---

## 4. Browser Screenshots & File Paths

All screenshots were captured from headless Chrome (`1440px` desktop and `390x844` mobile) and are stored in `C:\Users\Putra Wibisono\.gemini\antigravity\brain\700f7bde-29f9-46fb-98b5-4709223eeab7\screenshots\`:

| Page / Palette & Viewport | Screenshot Filename |
| :--- | :--- |
| Option A — Midnight Ink & Glacier Blue (Light, `1440x1180`) | `palette_a_light.png` |
| Option A — Midnight Ink & Glacier Blue (Dark, `1440x1180`) | `palette_a_dark.png` |
| Option B — Forest Ink & Sage (Light, `1440x1180`) | `palette_b_light.png` |
| Option B — Forest Ink & Sage (Dark, `1440x1180`) | `palette_b_dark.png` |
| Option C — Deep Plum & Lavender (Light, `1440x1180`) | `palette_c_light.png` |
| Option C — Deep Plum & Lavender (Dark, `1440x1180`) | `palette_c_dark.png` |
| Option D — Graphite & Mineral Teal (Light, `1440x1180`) | `palette_d_light.png` / `after_home_desktop.png` |
| Option D — Graphite & Mineral Teal (Dark, `1440x1180`) | `palette_d_dark.png` / `after_home_dark.png` |
| `/design-preview/` Laboratory Route (Light, `1440x1480`) | `design_preview_light.png` |
| `/design-preview/` Laboratory Route (Dark, `1440x1480`) | `design_preview_dark.png` |
| Full Site Routes (`about`, `experience`, `projects`, `letters`, `cv`, `contact`, mobile) | `after_home_full.png`, `after_home_mobile.png`, `after_home_mobile_toc.png`, `after_about_desktop.png`, `after_experience_desktop.png`, `after_experience_mobile.png`, `after_projects_desktop.png`, `after_monograph_detail.png`, `after_letters_desktop.png`, `after_cv_desktop.png`, `after_contact_desktop.png` |

---

## 5. Accessibility & Build Verification

* **88-Pair WCAG 2.1 Contrast Verification (`verify_palettes.mjs`):** All 88 text and interactive token pairs across Options A, B, C, and D (Light & Dark modes) pass **WCAG AA (`>= 4.5:1`)**, with primary and secondary typography exceeding **WCAG AAA (`9.5:1` to `16.5:1`)**.
* **Production Build (`npm run build`):** Completed in `1.07s` with `0` errors; verified `dist/design-preview` is automatically excluded from the production `dist/` directory (`Test-Path dist\design-preview` = `False`).
