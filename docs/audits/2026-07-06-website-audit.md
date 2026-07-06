# UVic MSA Website Audit — 2026-07-06

Scope: full review of the codebase (Next.js 14 App Router, React 18, Tailwind), covering correctness, UX, accessibility, SEO, performance, security, and repo hygiene. `npm run build` and `tsc --noEmit` were run as part of the audit — both pass, and every route prerenders statically (homepage with ISR, revalidating hourly for the Instagram feed).

> **Status (2026-07-06):** every finding below has been implemented on this branch except item 5 (the Instagram scraper was intentionally left as-is) and the Vercel-side check in item 10 (`NEXT_PUBLIC_SITE_URL` must be verified in the Vercel project settings; see `.env.example`).

## What's already in good shape

- Clean production build: ~107 kB first-load JS, all routes static, no type errors under `strict` TypeScript.
- Strong accessibility foundations: skip link, focus-trapped mobile menu with Escape handling and focus restoration, `focus-visible` rings throughout, `prefers-reduced-motion` respected globally, `aria-label`s on icon-only links.
- Sensible SEO base: per-page metadata with canonical URLs, Open Graph/Twitter tags, `robots.ts`, `sitemap.ts`, and redirect routes correctly excluded from the sitemap.
- The Instagram feed fails gracefully to a "Follow @uvicmsa" card when the fetch fails (which is what happens at build time today).
- Content is cleanly separated into `src/content/`, making copy edits easy for non-developers.

---

## High priority

### 1. Navigation order doesn't match the page's section order
`navItems` (src/content/site.ts) lists **Food Guide before Team**, but the homepage (app/page.tsx) renders **Team → Resources → Instagram → Food Guide → FAQ**. Two consequences:
- The active-section highlight in the navbar jumps non-linearly as you scroll.
- Users clicking through the nav in order bounce up and down the page.

Fix: reorder `navItems` to match the rendered order (or reorder the sections — Food Guide arguably belongs near Prayer/Events as core practical info).

### 2. Public-facing placeholder copy in the Team section
`TeamSection` renders the description **"Updated from the previous MSA website."** — an internal migration note shown to every visitor. Replace with real copy, e.g. "Meet the students leading the MSA this year."

### 3. FAQ section is unreachable from the navigation
`#faq` exists on the page but has no nav item, no footer link, and no other in-site link pointing at it. Either add it to `navItems` (fits naturally after Resources) or link it from the footer.

### 4. Text contrast likely fails WCAG AA in several places
Small text rendered at low opacity falls below the 4.5:1 minimum:
- `.eyebrow` — `rgba(53,66,86,0.56)` on ivory `#f8f5ef` ≈ **3.4:1** at 0.74rem.
- Event schedules — `text-body/50` on white cards ≈ **3.2:1**.
- `text-ivory/55`–`/60` labels on the blue gradient cards (prayer card, footer, counselling hero) hover around 3.5–4:1.

These are all "quiet label" styles, so the fix is uniform: raise the opacities (roughly `/56 → /75`, `/50 → /70`, `/55–60 → /75`) or darken the base color. The letter-spaced uppercase styling already provides the visual hierarchy; the low opacity isn't needed for that.

### 5. Instagram integration is fragile by design
`src/lib/instagram.ts` scrapes Instagram's private web API (regex-extracting `appId`/`csrf_token` from profile HTML, then calling `api/v1/feed/user/...`). Known issues:
- Instagram aggressively blocks datacenter IPs (Vercel's included) — the production build here rendered the fallback, suggesting the feed rarely, if ever, actually loads.
- The regex token extraction breaks whenever Instagram changes its HTML.
- Returned image URLs are signed and expire; a post cached at revalidation time can show broken images before the next revalidate.

Options, in increasing effort: (a) accept the fallback as the normal state and simplify; (b) curate 3 recent posts manually in `src/content/` with locally hosted images; (c) use a maintained service (Behold, Instagram's official Graph API with a token). Given the fallback card looks good, (b) is the best effort/reward ratio.

---

## Medium priority

### 6. No security headers
There is no `next.config.js`, so the site ships without `X-Content-Type-Options`, `X-Frame-Options`/`frame-ancestors`, `Referrer-Policy`, or `Permissions-Policy`. Low attack surface (no forms, no auth), but these are free wins:

```js
// next.config.js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]
module.exports = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}
```

### 7. Social sharing image is a 512px square logo
OG/Twitter images use `uvic-msa-logo-mark.png` (512×512). Links shared on Discord and WhatsApp — the MSA's two main channels — will render a small, cropped preview. A 1200×630 branded OG image (logo + "UVic Muslim Students' Association" + Jummah time) would make every shared link a mini-poster. The `MSA POSTER` design file in the repo suggests the design language already exists.

### 8. First-time visitors are forced into dark mode
`ThemeProvider` sets `defaultTheme="dark"` with `enableSystem={false}`. Visitors whose OS is in light mode get dark anyway. Recommend `defaultTheme="system" enableSystem`. Relatedly, `AnimatedThemeToggler` manually toggles the `dark` class and writes `localStorage.theme` — duplicating what `next-themes` already does via `setTheme()`; the manual lines can drift out of sync and should be removed.

### 9. Redirects are implemented as page components
`/ruh` and `/resources/ruh-counselling` call `permanentRedirect()` inside page components. It works, but `redirects()` in `next.config.js` is the idiomatic place — served at the routing layer, no page bundle, and self-documenting alongside the headers config from item 6.

### 10. Canonical/OG URLs depend on an env var that may not be set
`siteUrl.ts` falls back `NEXT_PUBLIC_SITE_URL → VERCEL_PROJECT_PRODUCTION_URL → VERCEL_URL → localhost`. If the site serves from a custom domain but `NEXT_PUBLIC_SITE_URL` isn't set in Vercel, canonicals and OG URLs will point at `*.vercel.app`, splitting SEO signals. Worth verifying the env var is set in the Vercel project.

### 11. No structured data (JSON-LD)
Two easy schema.org additions: `Organization` (name, logo, sameAs → the social links already in `externalLinks`) in the layout, and `FAQPage` generated from `faqItems` — the FAQ content already exists in exactly the right shape.

### 12. No custom 404 page
The default Next.js not-found page is unstyled and off-brand. A small `app/not-found.tsx` wrapped in `SiteShell` with a "Back home" button keeps lost visitors in the experience.

### 13. No ESLint and no CI
There is no ESLint config (the build's "Linting" step silently no-ops) and no GitHub Actions workflow. Recommended: add `eslint` + `eslint-config-next`, plus a minimal CI workflow running `npm run typecheck && npm run build` (and the existing `scripts/check-mobile-overflow.mjs`) on PRs.

---

## Low priority / housekeeping

14. **`tsconfig.tsbuildinfo` is committed** — build artifact; `git rm` it and add to `.gitignore` (91 kB of churn per build).
15. **`MSA POSTER`** — a 79 kB extension-less design-tool JSON at the repo root. Move to something like `docs/design/msa-poster.json` (or remove) so the root stays clean and editors know what it is.
16. **Unused public assets** — `public/uvic-msa-logo.png` and `public/uvic-msa-logo-ivory.png` (~64 kB) are referenced nowhere.
17. **Stale README** — the project-structure section references `src/App.tsx` and `src/data/`, neither of which exists anymore.
18. **Dead animation API** — `BlurFade` and `TextAnimate` accept `inView`, `once`, `by`, `animation`, `startOnView`, `variants` etc. and ignore them all (leftover Magic UI signatures). Everything animates on page load, so below-the-fold sections have already finished animating before they're scrolled into view. Either implement scroll-triggered reveals with one small IntersectionObserver hook, or strip the dead props so the API tells the truth.
19. **Unused Tailwind animation** — the `float` keyframes/animation in `tailwind.config.ts` are never used.
20. **`sitemap.ts` uses `new Date()` for `lastModified`** — every deploy claims the content changed. Either omit the field or maintain a real date.
21. **Footer has no copyright/attribution line** — a `© {year} UVic MSA` line is customary and cheap.
22. **Hero CTA indirection** — "Join the Community" scrolls to the footer rather than opening Discord, while the navbar's "Join MSA" goes straight to Discord. Consider making the hero CTA go direct as well, with the secondary path for socials.
23. **Heavy compositing on low-end phones** — three 96px-blur ambient orbs, a fixed full-viewport noise `body::before`, plus many `backdrop-blur-md` surfaces. It looks great on modern hardware; if mobile Speed Insights show long paint times, these are the first knobs to turn (e.g. drop the orbs on `max-width: 767px`).

---

## Suggested order of attack

1. Copy/nav fixes (items 1–3) — minutes of work, visible immediately.
2. Contrast pass (item 4) — small class-level change, real accessibility gain.
3. `next.config.js` with headers + redirects (items 6, 9) and theme defaults (item 8).
4. OG image + JSON-LD + 404 (items 7, 11, 12).
5. Decide the Instagram strategy (item 5).
6. Housekeeping sweep (items 14–21) in one commit.
