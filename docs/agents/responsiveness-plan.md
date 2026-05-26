# Responsiveness Plan

## Goal

Make the site responsive for mobile-to-desktop while matching Figma v2 (iPhone 402px + MacBook 1280px).

## v2 layout

- **Mobile:** Single column — header, hero title, slider, description, separators, trusted by, CTAs, footer, meta.
- **Desktop (`lg:` ≥1024px):** Hero row two columns (copy left, slider right); CTAs max ~643px left-aligned; full-width footer.

## Testing Checklist

- [ ] Hero + description + slider align at 402px viewport
- [ ] Hero two-column layout at 1280px viewport
- [ ] No section overflows at 402px, 768px, 1024px, 1280px
- [ ] `npx vitest run` — all tests pass
- [ ] `npm run typecheck` — clean

## Open Items

- Visual compare to Figma nodes `333:51` and `449:92`
- PR before/after screenshots per `docs/agents/pr-screenshots.md`
