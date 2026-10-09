# Quantum Feynatics site audit

Reviewed: 10 October 2026. Scope: all authored React components and routes, their active styles, entry points, Vite configuration, public asset inventory, and the standalone QuantumVerse HTML, script, and targeted stylesheet checks.

## Assessment

The site has a clear club identity and a coherent minimalist main-site design, but key visitor actions are incomplete. The production build succeeds; that does not establish functional readiness. Fix contact delivery, navigation accessibility, broken links, and production asset paths first.

This is a source and build audit. No browser screenshots, live deployment, external link availability, assistive technology testing, Lighthouse measurements, or real form submission were verified. Layout observations below are inferred from CSS. No application code was changed.

## Site inventory

| Surface | Content | Assessment |
| --- | --- | --- |
| `/` | Hero, mission, 11 current members, 10 graduates, one project, focus areas, four resources, contact | Broad content coverage; member galleries dominate before visitors reach projects or contact. |
| `/events` | QuantumVerse 2025 and a 2026 event marked TBA | Separate past and upcoming events explicitly. |
| `/quantumverse/index.html` | Standalone event landing page, registration, speakers, partners, timeline, contacts | Richer event content but a separate visual system and navigation implementation. |
| Unknown paths | No matching React route | Shared header/footer can render without useful main content; add a not-found route. |

## Prioritized findings

| Priority | Evidence | Impact and suggested correction |
| --- | --- | --- |
| High | `src/components/Contact.jsx:29–40` | Form has no action or submit handler; fields lack names. Submitting valid fields uses default browser navigation and cannot deliver the message. Add a real delivery integration, labels, field names, and success/error states, or remove the form and offer email clearly. |
| High | `src/components/Header.jsx:19` | Menu trigger is a clickable `div`, inaccessible through ordinary keyboard button interaction. Use a button with expanded/controls state. Add Escape dismissal, deliberate focus placement/return, background focus isolation, and scroll locking. |
| High | `src/components/Header.jsx:16` | Logo URL begins `public/images/`. Vite copies public contents to the output root, so the generated site has `/images/...`, not `/public/images/...`. Relative resolution also depends on the current URL. Use a deployment-aware asset path. |
| Medium | `src/components/Members.jsx:18` | Rutwek's LinkedIn URL starts `hhttps://`, so it cannot navigate as a valid HTTPS profile link. Correct the scheme. |
| Medium | `src/components/Resources.jsx:7`, `src/components/Footer.jsx:15–16` | Book, LinkedIn, and Instagram links use `#`, creating misleading actions. Supply real destinations or omit unavailable actions. |
| Medium | `src/pages/EventsPage.jsx:25` | Event CTA targets an external legacy `quantumverse/quantumverse.html`, while this project ships `quantumverse/index.html`. Confirm the intended canonical destination and link consistently; external failure was not verified. |
| High | `src/components/Contact.jsx`, `src/components/Contact.css:51` | Inputs rely on placeholders without explicit labels; outlines are removed without replacement focus styles. Add persistent labels and visible focus indication. |
| Medium | `src/components/Members.css:49–72` | Profile links appear only on card hover. Keyboard focus can reach an invisible link, and touch discoverability is poor. Reveal controls on focus-within and provide a persistent touch-friendly action. |
| Medium | `src/App.jsx`, `src/components/Focus.css`, `public/quantumverse/script.js` | Smooth scrolling, entrance animations, infinite ticker, and custom cursor lack a coordinated reduced-motion mode. Respect user motion preference and make essential content visible without animation. |
| Medium | `src/App.jsx:33–51`, `src/main.jsx` | Recursive requestAnimationFrame is never canceled during effect cleanup. StrictMode repeats setup/cleanup in development, leaving a stale loop alongside the active one. Store the frame ID and cancel it before destroying Lenis. |
| Medium | `index.html` | Browser title is the repository name. Description, canonical URL, OG/social metadata, and JSON-LD are absent. Add accurate site metadata and distinct event route metadata. No robots or sitemap files were found. |
| Medium | `src/components/Members.jsx`, `src/components/Projects.jsx` | All gallery/project images load eagerly; no responsive image sources are provided. Lazy-load below-fold images, compress portraits, and use appropriately sized variants. CSS aspect ratios already reserve gallery space. |
| Medium | `vite.config.js`, `src/App.jsx`, root-relative asset URLs | Build assumes root hosting and BrowserRouter needs a host fallback for `/events`. The event link suggests a possible GitHub Pages subpath, but no matching base/basename is configured. Verify the actual hosting target before deployment. |

## Design and content

- Strengths: shared color tokens, consistent typography and borders, semantic main/section structure, one H1 per React page, useful portrait alt text, and responsive layout breakpoints.
- Main-site visual language is light, typographic, and restrained; QuantumVerse uses glass, aurora, star, gradient, and cursor effects. A shared header, typography, and CTA language would improve continuity.
- The hero's primary action is Explore. A direct joining/contact action and a visible event action would better serve prospective members.
- Twenty-one portraits precede the project and resource sections. Consider moving project/event highlights earlier and condensing the gallery.
- Long email links have no explicit wrapping rule; narrow screens should be checked for clipped contact text. Global horizontal overflow hiding can conceal overflow instead of correcting it.
- The 2025 event page still says registrations are live. In October 2026 this is stale presentation unless deliberately retained as an archive; mark it as past and clarify registration availability.
- Main and event pages show different contact email addresses. Confirm ownership and choose the appropriate address consistently.
- Quantum advantage copy in About is broad and uncited. Qualify the claim by problem and assumptions before presenting it as educational guidance; no scientific literature verification was performed in this audit.

## Standalone QuantumVerse details

- Positive: image dimensions/lazy loading are present on some images; timeline uses native buttons; entrance animations use IntersectionObserver.
- The mobile menu button is icon-only without an explicit accessible label or expanded state. Add those attributes and keyboard dismissal.
- Timeline closes panels by removing `aria-expanded`; maintain an explicit false state and associate buttons with panel IDs.
- `mobileMenu.querySelectorAll` executes before checking whether mobileMenu exists. Current markup includes the element, but removing it would throw and prevent subsequent timeline/observer setup. Move the query inside the guard.
- Custom cursor runs a continuous animation loop on hover-capable devices, including while idle. Pause unnecessary work and honor reduced motion.
- No description/canonical/social metadata was found in the standalone document head.

## Performance and verification

- `npm run lint`: passed.
- `npm run build`: passed with Vite 8.1.4; 451 modules transformed.
- Main JS: 401.62 kB, 126.82 kB gzip. CSS: 97.98 kB, 17.61 kB gzip.
- Boxicons import emits several font formats and a 1.24 MB SVG font. No active main-site icon usage was found; remove the import if confirmed unused. Emitted files are not all necessarily downloaded by browsers.
- Public includes a 14.57 MB project video, 8.48 MB hero video, several 5–7 MB PNGs, and duplicate portrait assets across the main and event directories. These increase deployment size; unused files do not automatically increase page transfer size.
- No test script or project test files were found. Automated behavioral coverage is absent.
- Lighthouse score, Core Web Vitals, contrast compliance, hosting fallback behavior, and external resource freshness remain unmeasured.

## Verification after fixes

1. Run lint and build; serve production output using `npm run preview`.
2. Visit `/`, `/events`, `/quantumverse/index.html`, and an unknown route. Refresh each valid route on the actual host.
3. At desktop and 320/375/768 px widths, check overflow, title size, menu scrolling, email wrapping, and touch actions.
4. Navigate with keyboard only: open/close menu, Escape, focus return, profile links, form labels and focus rings.
5. Confirm form delivery and error handling with a controlled test message after an integration exists.
6. Verify all external destinations manually, enable reduced motion, inspect console/network errors, and run mobile Lighthouse against the production deployment. Target at least 90 without claiming a score before measurement.
