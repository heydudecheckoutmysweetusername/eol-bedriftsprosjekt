# Emergency Implement v2

> **Token authority:** [docs/design.md](../../design.md)  
> **Figma:** [WireFrame 49:3](https://www.figma.com/design/H8CCkpGRA9UW1KO40X1Zat/Design?node-id=49-3)  
> **Branch:** `design/emergency-implement-v2`

**Goal:** Rebuild the ReOL landing page to match Figma v2 (mobile iPhone frame + MacBook desktop).

**Architecture:** Section components under `app/home/components/`, assembled in `app/home/main.tsx`. Tokens in `app/app.css` (Tailwind v4 `@theme`). Vitest + Testing Library per section.

---

## Phase 0 — Documentation

- [x] [docs/design.md](../../design.md) — colors, spacing, type, components, assets
- [x] This plan

---

## Phase 1 — Tokens & fonts

- [x] Update [app/app.css](../../../app/app.css): `#EBF8ED` green-light, new greens/greys, Sora font, spacing vars
- [x] Update [app/root.tsx](../../../app/root.tsx): add Sora to Google Fonts URL
- [x] `npm run typecheck`

---

## Phase 2 — Assets

- [x] Download slider images, caret, refresh icons from Figma → [public/images/](../../../public/images/)
- [x] Add `customer-logos.svg` if missing
- [x] Add `logo-image.png` if missing

---

## Phase 3 — Mobile sections (402px)

- [x] [header.tsx](../../../app/home/components/header.tsx) — remove pill, v2 sizing
- [x] `hero-title.tsx` — new
- [x] `slider.tsx` — refactor from carousel (262×175, border)
- [x] `description.tsx` — new
- [x] `menu-separator.tsx` — new
- [x] [trusted-by.tsx](../../../app/home/components/trusted-by.tsx) — Sora heading
- [x] `contact-sales.tsx` — new (from button-pair pattern)
- [x] `read-more-dropdown.tsx` — new (about copy inside)
- [x] `footer.tsx` — new
- [x] `site-meta.tsx` — new
- [x] [main.tsx](../../../app/home/main.tsx) — new section order
- [x] Remove faq, button-pair, info-card
- [x] Update / add Vitest files

---

## Phase 4 — Desktop (1280px)

- [x] Hero row: title + description | slider (`lg:` grid)
- [x] Header scale (larger logo / hamburger)
- [x] Trusted by centered full width
- [x] CTAs max-w ~643px left-aligned
- [x] Footer single-line tagline on wide screens
- [x] Update [docs/agents/responsiveness-plan.md](../../agents/responsiveness-plan.md)

---

## Phase 5 — Verification

- [x] `npm run typecheck`
- [x] `npx vitest run`
- [x] `npm run build`
- [ ] Visual check 402px + 1280px vs Figma

---

## File structure (target)

```
app/home/
├── main.tsx
└── components/
    ├── header.tsx
    ├── hero-title.tsx
    ├── slider.tsx
    ├── description.tsx
    ├── menu-separator.tsx
    ├── trusted-by.tsx
    ├── contact-sales.tsx
    ├── read-more-dropdown.tsx
    ├── footer.tsx
    ├── site-meta.tsx
    └── *.test.tsx
```
