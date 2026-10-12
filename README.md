# Osmon Djumagulov Portfolio

Next.js 15 (App Router). No extra libraries. The only motion is a CSS fade-in.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Where to edit
- `lib/data.ts`: site URL, projects (copy, facts, tags, screenshots), résumé content, contact links
- `app/page.tsx`: landing page
- `app/work/page.tsx` and `app/work/[slug]/page.tsx`: project index and detail pages
- `app/resume/page.tsx`, `app/contact/page.tsx`: résumé and contact
- `lib/meta.ts`: title, description and Open Graph for every page
- `app/globals.css`: all styling
- `public/work/`: project screenshots
- `public/Osmonbek_Djumagulov_Resume.pdf`: replace this file to update the downloadable résumé
- `public/connected-privacy.html`: ConnectED privacy policy, live at `/connected-privacy.html`
