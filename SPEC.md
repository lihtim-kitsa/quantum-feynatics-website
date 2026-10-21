# Quantum Feynatics visual redesign

## Smooth wormhole background
- Goal: Replace the two visibly looping CSS star layers with a continuous perspective star tunnel and subtle depth rings; preserve the existing purple/blue visual identity and readable content.
- Files: WormholeBackground.tsx, EventPage.tsx, quantumverse.css. No dependencies.
- Behavior: Time-based motion, evenly distributed initial particle depths, individual far-plane recycling, gentle curved vanishing point, bounded frame delta, capped pixel ratio and smaller mobile particle count. No React updates in the animation loop.
- Acceptance: Smooth continuous travel without whole-layer resets; decorative canvas ignores input and accessibility navigation; static rendering for reduced motion; pause on hidden tabs; clean frames/listeners on unmount; lint/typecheck/build and desktop/mobile visual checks pass.

## Remove Fall Fest visual branding
- Replace the Qiskit Fall Fest 2025 badge, its accompanying graphic, and centenary artwork with original code-native SVGs for Quantumverse Vol. 4.0 and QML/Qiskit learning. Keep the existing layout, palette, and animation behavior.
- Files: EventPage.tsx, quantumverse.css, three local SVG assets. Rename the active centenary section identifiers to learning; preserve the Vol. 3.0 archive.
- Acceptance: Active page artwork/text has no QFF/Fall Fest/2025/centenary references; SVGs load locally; lint/typecheck/build and browser checks pass.

## Session overviews
- Replace regular-session lead names with concise learning-topic descriptions, including grouped SDK and Day 3 topics. Retain Dr Kavitha Yogaraj for the QML speaker session and Archit for QML Hands-on. Preserve all dates, times, and accordion behavior.
- Files: programme.ts, Timeline.tsx, quantumverse.css, README.md. Acceptance: only these two presenter names remain in the programme; descriptions render readably on mobile; lint/typecheck/build pass.

## Screenshot programme — 23–25 October
- Goal: Replace placeholder programme with the three supplied day schedules, retaining the original accordion UI.
- Files: src/app/data/programme.ts, src/app/components/Timeline.tsx, src/app/components/EventPage.tsx, src/app/quantumverse.css, README.md.
- Interpretation: Day 1/2/3 map to 23/24/25 October 2026; times are local IST. Day 2 SDK topics share 10 am–noon (normalize the screenshot's “10-12am”); Day 3 topics share 9–11 am. Preserve unassigned presenters and gaps, and do not infer IBM affiliations or an algorithm name.
- Acceptance: All supplied topics, time blocks, and listed names appear; dates are visible on day headers; grouped topics retain individual leads; no stale timing-TBA copy; lint/typecheck/build and browser accordion checks pass.

## Vol. 4.0 programme correction
- Goal: Describe the confirmed collaboration with experts from IBM for talks and hands-on sessions on quantum machine learning (QML) and Qiskit.
- Scope/files: Update src/app/components/EventPage.tsx, src/app/data/programme.ts, src/app/layout.tsx, and README.md; preserve the original UI/styles. Remove Fall Fest/centenary framing and previous-edition hackathon commitments from the active event copy. Keep dates, timings, and speaker names unconfirmed; identify archived profiles clearly.
- Acceptance: No Fall Fest branding in the active Next.js app; hero, overview, details, collaboration card, programme, and metadata consistently describe QML/Qiskit sessions with IBM experts; lint, typecheck, build, and preview checks pass.

## Quantumverse Vol. 4.0 — Next.js / TypeScript correction
- Goal: Implement the original Quantumverse UI/UX in Next.js App Router and strict TypeScript; replace the independent redesign as the active app.
- Scope: Port the complete original HTML to native TSX sections, reuse the exact original stylesheet, fonts, assets, section order, responsive breakpoints, gradient/background animations, cursor, mobile menu, and timeline accordion. Change edition branding to Vol. 4.0. Preserve previous-edition people/programme content while identifying it as provisional; never activate the old registration link for the new edition.
- Files: src/app/page.tsx, src/app/layout.tsx, src/app/quantumverse.css, src/app/components/*, src/app/data/*, next.config.ts, tsconfig.json, next-env.d.ts, package.json/lock, compatibility entry pages, README.md, .gitignore. Next.js routes accept only .ts/.tsx so the retained Vite JSX pages do not become Next.js routes.
- Routes: Next.js renders the microsite at / and /quantumverse/v4; old Vol. 4.0 HTML entries forward to the Next.js route. Preserve the original static Vol. 3.0 archive and existing Vite source; legacy scripts still run the main club website.
- Acceptance: Original visual design and all sections preserved in TSX (no embedded HTML or iframe); strict typecheck, lint, Next.js production build; optional static export for GitHub Pages; desktop/mobile visual comparisons and menu/accordion/scroll tests; cleanup for client animation effects; no new invented event details. Commit the finished change locally.

## Quantumverse Vol. 4.0
- Goal: Create a complete, improved successor to the existing Vol. 3.0 event microsite.
- Scope: Independent static page with responsive orbital artwork, event overview, workshops/hackathon, accessible programme tabs, speakers, team, partners, FAQs, and contact. Keep Vol. 3.0 intact. Unconfirmed edition details remain explicitly TBA; use the verified organizer email for interest and partnership enquiries.
- Files: public/quantumverse/v4.html, v4.css, v4.js, quantumverse.html compatibility entry; src/pages/EventsPage.jsx; public/quantumverse/sitemap.xml and robots.txt.
- Acceptance: Existing main site and previous edition work; event link opens Vol. 4.0; keyboard/mobile navigation, tabs, FAQ, reduced motion work; no stale registration claims or invented commitments; unique metadata, canonical, OG and organization JSON-LD; no new dependencies; lint/build and desktop/mobile browser checks pass. Lighthouse target 90+, measured only if tooling available.

## Home navigation and smooth scrolling
- Goal: Home and logo always return to the hero, including repeated clicks on the home route; animate section navigation and wheel scrolling.
- Files: App.jsx, Header.jsx, Hero.jsx, index.css. Reuse Lenis/AOS; no dependencies.
- Acceptance: Home from sections/events, repeated section links, header offsets, reduced-motion bypass, cleaned animation frames, passing lint/build.

## Adaptive hero outlines
- Goal: White text outlines over blue portrait areas and blue outlines over white portrait highlights.
- Scope/files: Hero.jsx and Hero.css; preserve the filled title and portrait layout.
- Acceptance: Match the portrait mask to desktop/mobile sizing, keep one accessible H1, and pass lint/build.

## Interactive QML focus visual
- Keep BB84 startup. Add a small, dependency-free classifier demo to Our Focus using a classically evaluated ideal one-qubit rotation circuit.
- Allow pointer dragging and keyboard movement of labeled points, train parameters, show decision boundary and accuracy, and reset. Clearly label the toy model and avoid quantum advantage claims.
- Files: QmlDemo.jsx/css, Focus.jsx. Acceptance: coherent circuit math, bounded pointer coordinates, accessible controls, lint/build. No pushes.

## Startup animation
- Title handoff: measure the landing H1 and animate the intro wordmark to its actual viewport position, width, and font size before fading the overlay. Retain Skip/reduced motion and use a new session key for preview. Keep changes local.
- Current revision: BB84 schematic replaces TF-QKD. Alice sends four qubits to Bob, public basis comparison retains two matching-basis sifted bits; do not label sifted bits a secure final key. New session key permits preview. Retain 3.2s timing, Skip/Escape, reduced motion, and existing page reveal.
- Revision: TF-QKD-inspired intro replaces dot/rings: Alice/Bob optical pulses travel to Charlie, interference/detection, then team reveal. Stylized schematic, not a protocol simulator. 3.2 seconds, skip/reduced motion/session behavior retained; new session key permits previewing this revision.
- Reference: Lucamarini et al., Nature 557, 400–403 (2018), https://doi.org/10.1038/s41586-018-0066-6.
- Add a 1.5-second quantum reveal: splitting dot, lavender interference rings, resolving team name, then landing reveal.
- Home page only, once per session, Skip/Escape, reduced-motion bypass, cleaned timers, no dependencies or pushes. Files: App.jsx and Startup.jsx/css. Acceptance: lint/build pass and existing routes remain accessible.

- Goal: Adapt the supplied bold editorial reference to Quantum Feynatics with Feynman imagery and a cobalt/lavender palette.
- Scope: Main React site visual system, hero, header, framed sections, and responsive styles; preserve existing team content and routes.
- Files: Hero component/styles, Header component/styles, new editorial stylesheet, public hero illustration, index.html.
- Acceptance: Oversized condensed typography, centered Feynman portrait, ivory information strip, blue/lavender framed sections, accessible navigation controls, mobile layouts, passing lint and build.

## Photo correction
- Use the user's supplied seated photograph as the hero source; preserve facial features and pose, remove the background, and apply a photographic cobalt/lavender duotone treatment.
- Replace the illustrated hero asset reference with a separate edited photo asset. Keep all changes local and do not push.
- Verify the resulting asset visually and rerun lint/build after updating the hero.

## Wide-screen landing layout
- Remove the header/hero 1320px container cap, scale the title with viewport width, and let the blue landing panel fill at least the first viewport at desktop sizes including 2560×1440.
- Keep the information strip below the full-height panel and retain the existing mobile composition. Only adjust hero/header layout styles; verify lint/build.
