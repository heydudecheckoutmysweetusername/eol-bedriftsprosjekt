# ReOL Landing — Design System (v2)

Token authority for the Emergency Implement v2 work. Source: [Figma Design — WireFrame](https://www.figma.com/design/H8CCkpGRA9UW1KO40X1Zat/Design?node-id=49-3).

## Figma references

| Frame | Node ID | Size | Use |
|-------|---------|------|-----|
| WireFrame canvas | `49:3` | — | Parent artboard |
| iPhone 17 (mobile) | `333:51` | 402×1256 | Primary mobile layout |
| MacBook Air (desktop) | `449:92` | 1280×1353 | Desktop layout |
| SM / MD / LG / XL | `49:5`–`49:8` | — | Placeholder shells only |

**File key:** `H8CCkpGRA9UW1KO40X1Zat`

When calling Figma MCP, always pass a leaf frame node (`333:51` or `449:92`), not the canvas `49:3`.

---

## Color tokens

| Figma variable | Hex | CSS / Tailwind |
|----------------|-----|----------------|
| Foundation /Green/Light | `#EBF8ED` | `--color-green-light` / `green-light` |
| Foundation /Green/Normal | `#39B54A` | `--color-green-normal` / `green-normal` |
| Foundation /Green/Normal :hover | `#33A343` | `--color-green-hover` / `green-hover` |
| Foundation /Green/Dark | `#2B8838` | `--color-green-dark` / `green-dark` |
| Foundation /Green/Dark :active | `#1A5121` | `--color-green-dark-active` / `green-dark-active` |
| Foundation /Green/Darker | `#143F1A` | `--color-green-darker` / `green-darker` |
| Foundation /Grey/G300 | `#2A2D2A` | `--color-grey-300` / `grey-300` |
| Foundation /Grey/G200 | `#4E514E` | `--color-grey-200` / `grey-200` |
| Foundation /Grey/G100 | `#838583` | `--color-grey-100` / `grey-100` |

### Literals (not in Figma variables)

| Usage | Value |
|-------|-------|
| Headings / primary text | `#000000` |
| Desktop hero panel background | `#ACE1AF` (`--color-hero-panel`) |
| Desktop hero panel border | `rgba(22, 132, 21, 0.25)` |
| Desktop description inner background | `rgba(255, 255, 255, 0.5)` |
| Mobile description card background | `#FFFFFF` |
| Desktop header border | `#9E9E9E` |
| Hamburger button background | `#EFEFEF` |
| Hamburger shadow | `0 4px 4px rgba(0, 0, 0, 0.25)` |
| EOL word in about heading | `#1F211F` |
| Read more button text | `#FFFFFF` |

---

## Spacing tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-padding-lg` | 16px | Menu separator horizontal padding (Figma `sds-size-padding-lg`) |
| `--spacing-padding-sm` | 8px | Menu separator vertical padding |
| Mobile section gap | 10px | Main column `gap` between blocks |
| Trusted by internal gap | 22px | Heading → logo row |
| Customer logo gap | 40px | Marquee item spacing |
| Header padding | 23px × 16px | Horizontal × vertical |
| Description card padding | 17px left, 10px vertical | White hero copy card |

---

## Typography

| Role | Font family | Size | Weight | Color |
|------|-------------|------|--------|-------|
| Hero title | Sora | 26px (clamp on desktop) | 700 | black |
| Section heading (“Trusted by”) | Sora | 24px | 700 | `#2A2D2A` |
| Description body | Roboto | 14px | 700 | `#1A5121` |
| Since badge | Sora | 10px | 700 | `#33A343` |
| Contact sales | Roboto | 14px | 400 | black |
| Read more control | Roboto | 14px | 400 | white on `#33A343` |
| About heading | Roboto + Roboto Condensed | 28px | 700 / 700 italic | `#2B8838` / `#1F211F` |
| About body | Roboto | 14px | 400 | `#143F1A` |
| Footer brand | Special Gothic Expanded One | 15px | 400 | black |
| Footer tagline | Roboto | 12px | 400 | `#4E514E` |
| Site meta | Roboto | 10px | 400 | `#4E514E` |
| Logo wordmark | Special Gothic Expanded One | ~10px | 400 | black |

### Font stacks (Google Fonts)

- **Sora** — display / section titles
- **Roboto** — body, UI
- **Roboto Condensed** — italic “EOL” in about heading
- **Special Gothic Expanded One** — logo and footer brand
- **Inter** — base sans fallback in theme

---

## Layout breakpoints

| Name | Width | Figma frame |
|------|-------|-------------|
| Mobile | 402px artboard, fluid below 1024px | iPhone 17 |
| Desktop | ≥1024px (`lg:`) | MacBook Air 1280px |

Desktop hero: two columns — copy left (~472px content), slider right (~589×380). CTAs and dropdown max width ~643px, left-aligned.

---

## Components → React

| Figma layer | React component | Notes |
|-------------|---------------|-------|
| header | `header.tsx` | Logo + hamburger only |
| Title | `hero-title.tsx` | H1 |
| Slider | `slider.tsx` | 262×175 mobile; larger on desktop |
| Description | `description.tsx` | White card + Since 2026 |
| Menu Separator | `menu-separator.tsx` | 1px green rule |
| Trusted by | `trusted-by.tsx` | Marquee logos |
| Frame 3 / Contact sales | `contact-sales.tsx` | Underline link + arrow |
| dropdown | `read-more-dropdown.tsx` | Accordion with about copy |
| footer | `footer.tsx` | Brand + tagline |
| Frame 4 | `site-meta.tsx` | Oslo, Norway · 2026 |

---

## Assets (`public/images/`)

| File | Purpose |
|------|---------|
| `logo-icon.svg` | Leaf logo mark |
| `logo-image.png` | Center logo detail |
| `hamburger.svg` | Menu icon (or styled in CSS) |
| `arrow.svg` | Contact sales chevron |
| `caret-down.svg` | Read more accordion |
| `carousel-1.png` … `carousel-5.png` | Slider slides |
| `customer-logos.svg` | Trusted-by marquee strip |

Export from Figma dev/MCP; commit to repo (MCP asset URLs expire ~7 days).

---

## Page structure (mobile)

```
Header → HeroTitle → Slider → Description → MenuSeparator
→ TrustedBy → MenuSeparator → ContactSales → ReadMoreDropdown
→ MenuSeparator → Footer → SiteMeta
```

Background: `green-light` (`#EBF8ED`) on outer shell.

**Mobile:** hero title, slider, and white description card are separate blocks.

**Desktop:** title + semi-transparent description sit inside a `#ACE1AF` panel (`29.5rem` max) with green border and shadow; slider fills remaining width (`1fr` grid column) with fluid height. Layout uses rem + `clamp()` / `vw` gutters so **1280px–1920px+** scales edge-to-edge (see `app/home/landing.css`).
