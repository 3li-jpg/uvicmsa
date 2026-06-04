# Non-Visual Website Fixes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the website audit fixes that improve SEO, routing, rendering, runtime robustness, and maintainability without changing visual styling choices like contrast, glass, colors, or layout aesthetics.

**Architecture:** Keep route-specific content in route files, move shared page chrome into a small reusable shell, and add metadata/crawl support through App Router conventions. Reduce brittle render-path behavior by isolating Instagram loading and removing JavaScript-only animation gates that are not needed for accessibility.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Tailwind CSS, Vercel Analytics/Speed Insights.

---

## File Structure

- Modify `app/layout.tsx`: richer root metadata and shared root URL constants.
- Modify `app/page.tsx`: homepage metadata and direct homepage render.
- Modify `app/counselling/page.tsx`: route metadata canonical/social data and shared shell usage.
- Modify `app/ruh/page.tsx`: permanent redirect to `/counselling`.
- Modify `app/resources/ruh-counselling/page.tsx`: permanent redirect to `/counselling`.
- Create `app/sitemap.ts`: crawlable route list.
- Create `app/robots.ts`: robots policy and sitemap pointer.
- Create `src/components/layout/SiteShell.tsx`: shared skip link, ambient background, navbar, footer, and main wrapper.
- Modify `src/App.tsx`: remove duplicated site chrome and render homepage sections only.
- Modify `src/components/sections/InstagramSection.tsx`: split Instagram content into a Suspense-loaded async child with stable fallback.
- Modify `src/components/ui/BlurFade.tsx`: remove mobile viewport listener and only respect reduced-motion.
- Modify `src/components/ui/TextAnimate.tsx`: remove mobile viewport listener and only respect reduced-motion.
- Modify `app/globals.css`: remove the global mobile rule that disables all landing-page transitions.
- Modify `src/data/types.ts`: remove unused content types/fields.
- Modify `src/content/site.ts`, `src/content/prayer.ts`, `src/content/team.ts`: remove unused data fields.
- Delete `src/components/sections/Testimonials.tsx` and `src/content/testimonials.ts` if still unreferenced.
- Modify `package.json`: add `typecheck` script for a lightweight quality gate.

## Task 1: SEO and Routing

- [ ] Add metadataBase, title template, Open Graph, Twitter, canonical metadata in `app/layout.tsx`, `app/page.tsx`, and `app/counselling/page.tsx`.
- [ ] Add `app/sitemap.ts` with `/` and `/counselling` entries.
- [ ] Add `app/robots.ts` allowing crawl and pointing at `/sitemap.xml`.
- [ ] Replace temporary redirects with `permanentRedirect('/counselling')` in legacy Ruh routes.
- [ ] Run `npm run build` and verify the metadata/routes compile.

## Task 2: Shared Site Shell

- [ ] Create `src/components/layout/SiteShell.tsx` that renders the current skip link, ambient orbs, `Navbar`, `main`, and `Footer` without altering classes.
- [ ] Update `src/App.tsx` to render only homepage sections inside `SiteShell`.
- [ ] Update `app/counselling/page.tsx` to wrap page sections with `SiteShell` and preserve existing page classes.
- [ ] Run `npm run build` and verify both routes compile.

## Task 3: Rendering and Animation Runtime

- [ ] Remove mobile viewport state/effects from `BlurFade`; keep `prefers-reduced-motion` behavior.
- [ ] Remove mobile viewport state/effects from `TextAnimate`; keep `prefers-reduced-motion` behavior.
- [ ] Remove the broad mobile CSS rule that disables all landing-page transitions; keep reduced-motion rules.
- [ ] Split `InstagramSection` into a static shell plus Suspense-loaded async feed child so the page can render fallback while posts load.
- [ ] Run `npm run build` and verify async rendering compiles.

## Task 4: Dead Code and Quality Gate Cleanup

- [ ] Remove unused fields from types/content: `SectionId.testimonials`, `HeroContent.highlights`, `PrayerInfo.sections`, `TeamProfile.initials`, and `TestimonialItem`.
- [ ] Delete unrendered testimonials component/content.
- [ ] Add `typecheck` script: `tsc --noEmit`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.

## Task 5: Final Verification and Remaining Looks List

- [ ] Run `git status --short` and inspect changed files.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.
- [ ] Report completed non-visual fixes.
- [ ] Report remaining looks-only issues separately: contrast labels, glass/blur compositing appearance, visual polish/section animation choices, navbar active indicator style, hero chips/testimonials if desired as visual additions.

## Self-Review

- Spec coverage: SEO/routing, shell duplication, animation runtime, Instagram rendering, dead code, and quality gate are covered.
- Placeholder scan: no TBD/TODO/fill-in steps remain.
- Type consistency: removed fields are matched across `src/data/types.ts` and content files.
