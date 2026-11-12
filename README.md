# Putra Wibisono — Personal Website & Engineering Portfolio (`v2`)

Modern static website and technical portfolio for **Putra Wibisono** ([putrawibisono.com](https://putrawibisono.com)), built from scratch with **Astro 5** and TypeScript.

## Architecture Overview

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation, zero unnecessary client-side JS, native per-route HTML & SEO metadata).
- **Content Layer**: All biographical, experience, education, project, skill, teaching, and recommendation-letter content is centralized in [`src/data/profile.ts`](./src/data/profile.ts).
- **Design System**: [`src/styles/global.css`](./src/styles/global.css) — *"Precision Terra & Telemetry"* visual system with full Dark and Light themes and a print-ready `@media print` stylesheet for `/cv/`.
- **Preserved Legacy Archive**: Original Jekyll files and assets are archived in `legacy-v1/` (excluded from the build) and preserved on the `master` branch history.

## Routes

| Route | Source | Description |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | Homepage: introduction, agri-tech focus, featured case studies, experience summary, and stack. |
| `/about/` | `src/pages/about.astro` | Full biography, agricultural technology mission, and UC Berkeley / UC San Diego education. |
| `/experience/` | `src/pages/experience.astro` | Complete career timeline (Agros Industry, Stripe, Tesla, ATOM Science, Rivian, UCSD). |
| `/projects/` | `src/pages/projects/index.astro` | Filterable engineering & agri-tech project showcase + laboratory instrumentation archive. |
| `/projects/[slug]/` | `src/pages/projects/[slug].astro` | Dedicated technical case study pages with custom SVG architecture diagrams. |
| `/teaching/` | `src/pages/teaching.astro` | UC San Diego CSE undergraduate teaching (`CSE 8A` & `CSE 20`) and mentorship. |
| `/letters/` | `src/pages/letters.astro` | Recommendation letter policy, eligibility, 3–4 week lead time, and interactive request builder. |
| `/cv/` & `/resume/` | `src/pages/cv.astro` | Print-optimized interactive Curriculum Vitae + archived 2024 engineering resume PDF download. |
| `/contact/` | `src/pages/contact.astro` | Direct email (`president@agrosindustry.com`), verified GitHub profiles, and inquiry templates. |

## Local Development

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:4321)
npm run dev

# Build production static site into ./dist
npm run build

# Preview production build locally
npm run preview
```
