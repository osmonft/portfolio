# Osmon Djumagulov Portfolio

Next.js 16 App Router, React 19, TypeScript. Plain CSS, GSAP and Lenis for motion. Live at https://www.osmondjumagulov.com

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Where to edit
- `content/site.ts`: every word on the site (profile, projects, résumé)
- `app/globals.css`: the design system (palette, four type voices, layout)
- `components/Motion.tsx`: all motion, driven by data attributes (`data-intro`, `data-rise`, `data-plate`, ...)
- `lib/seo.ts`: the site URL, canonical links and Open Graph
- `public/work/`: project screenshots
- `public/Osmonbek_Djumagulov_Resume.pdf`: replace this file to update the downloadable résumé

Never set `PREVIEW_NOINDEX` on the production project. It hides the site from search engines.
