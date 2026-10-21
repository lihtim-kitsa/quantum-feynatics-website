# Quantum Feynatics visual redesign

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
