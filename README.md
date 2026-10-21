# Quantumverse Vol. 4.0

Next.js App Router and strict TypeScript port of the original Quantumverse microsite. The original CSS, fonts, images, section layout, gradients, cursor animation, scroll reveals, mobile navigation, and single-open timeline accordion are preserved.

## Run

- `npm install`
- `npm run dev` — Next.js at http://localhost:3000
- `npm run lint`
- `npm run typecheck`
- `npm run build` — Next.js production build
- `npm start` — run the production server

The event is available at `/` and `/quantumverse/v4/`. The previous `/quantumverse/v4.html` and `/quantumverse/quantumverse.html` entry points forward to the Next.js page. Vol. 3.0 remains archived at `/quantumverse/index.html`.

For an optional static export to GitHub Pages, set `NEXT_STATIC_EXPORT=true` and `NEXT_PUBLIC_BASE_PATH=/quantum-feynatics`, then publish `out/`. In PowerShell:

```powershell
$env:NEXT_STATIC_EXPORT = "true"
$env:NEXT_PUBLIC_BASE_PATH = "/quantum-feynatics"
npm run build
```

For a normal Next.js server, leave both variables unset. Do not set a base path for a root-domain deployment. The asset helper prefixes the configured path, and compatibility redirects use relative URLs.

## Source

- `src/app/components/EventPage.tsx` — complete original markup ported to native TSX.
- `src/app/components/Header.tsx` — React mobile menu, outside click, and Escape handling.
- `src/app/components/Timeline.tsx` — typed, accessible single-open day accordion.
- `src/app/components/SiteEffects.tsx` — cursor and scroll reveals with cleanup and reduced-motion support.
- `src/app/data/programme.ts` — typed programme data.
- `src/app/quantumverse.css` — original stylesheet plus accessibility fallbacks.
- `public/quantumverse/images/` — original event assets.

Vol. 4.0 is a collaboration with experts from IBM for talks and hands-on sessions on quantum machine learning (QML) and Qiskit. The event takes place 23–25 October 2026. The day-wise programme is transcribed from the supplied screenshots, with timings in IST and listed session leads. Day 2 SDK topics share a 10 am–noon block; Day 3 topics share a 9–11 am block. Unassigned presenters and timetable gaps remain unfilled. Registration is unconfirmed. Previous-edition speaker profiles, team, and sponsors are clearly identified as reference material. Registration CTAs currently lead to the organizer contact section.

The pre-existing club website source is retained in `src/`. Run it with `npm run dev:legacy` or build it with `npm run build:legacy`; these commands are independent of the Next.js microsite.
