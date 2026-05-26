# Impeccable audit — ReOL landing

**Date:** 2026-05-26  
**Scope:** `app/home/` landing (brand register)  
**Context:** `docs/DESIGN.md` · no `PRODUCT.md`  
**Score:** **12/20** (Acceptable)

## Health score

| Dimension | Score | Key finding |
|-----------|-------|-------------|
| Accessibility | 2 | No visible focus styles; menu no-op; nested `<header>` |
| Performance | 2 | Two sliders in DOM; heavy fonts; unused `motion` dep |
| Responsive | 3 | Good `clamp` / `lg:`; Read more touch target small |
| Theming | 3 | Solid `@theme` tokens; `#000` / `#fff` literals remain |
| Anti-patterns | 2 | Clean build, generic green B2B landing genre |
| **Total** | **12/20** | |

## Anti-patterns verdict

Not full AI slop (no gradient text, glass cards, hero metrics). Still reads as a **template green SaaS landing**: marquee logos, accordion “Read more”, multi-font stack. Figma-faithful; limited brand POV.

## Priority issues

### P1 — fix before release

1. **No `:focus-visible` styles** on buttons/links (`landing.css`).
2. **Hamburger does nothing** — `onMenuToggle` never wired (`header.tsx`, `main.tsx`).
3. **Contact sales** links to `#contact` with no target (`contact-sales.tsx`).
4. **Nested `<header>`** — wrapper in `main.tsx` + inner in `Header`.
5. **Two `<Slider>` instances** mounted (mobile + desktop); only CSS-hidden — double timers.
6. **Slider auto-play** ignores `prefers-reduced-motion`.
7. **Read more** touch target ~30px tall — below 44px guideline.

### P2 — next pass

- White on `#33A343` contrast borderline for 14px text.
- Slider alts generic (“Slide 1” … “Slide 5”).
- No carousel `aria-live` / roledescription.
- Accordion panel unmounts on close (focus loss).
- Google Fonts payload oversized (unused DM Serif, wide Inter/Roboto Condensed ranges).
- Unused `motion` npm dependency.
- Carousel PNGs not lazy-loaded (slides 2–5).
- `100vw` logo bleed may cause horizontal scroll on some mobile browsers.

### P3 — polish

- Map `#000` / `#fff` literals to theme tokens.
- Skip link to main content.
- Caret rotation easing could match motion guidelines.

## What works well

- Read more: `aria-expanded`, `aria-controls`, scroll-into-view, reduced-motion aware scroll.
- Logo marquee: duplicate strip `aria-hidden`, animation stops under `prefers-reduced-motion`.
- Layout: rem/clamp tokens, desktop hero grid, container queries on slider track.
- Vitest coverage for header, slider, trusted-by, read more.
- Single `h1` per viewport (mobile/desktop swap).

## Recommended follow-up commands

1. `impeccable teach` — add `PRODUCT.md`
2. `impeccable harden` — focus, landmarks, menu/contact, carousel a11y
3. `impeccable optimize` — single slider, font subsetting, lazy images
4. `impeccable adapt` — touch targets, overflow clip
5. `impeccable polish` — final pass

Re-run `impeccable audit` after fixes to track score improvement.
