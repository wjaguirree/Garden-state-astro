# Technical SEO Audit — Garden State Locksmith (Astro)

**Site:** https://gardenstatelocksmithnj.com · **Pages:** 2,590 static · **Date:** 2026-07-26
**Method:** Full `astro build`, then automated scans of every rendered HTML file in `dist/`
(titles, meta descriptions, H1 counts, canonicals, robots directives, images) plus
5-gram Jaccard text-similarity measurement across page clusters, plus source review.

This audit reflects the site's **actual built output**, not assumptions. Where an item
was already compliant, that is stated with the measured evidence rather than "fixed."

---

## 1. Executive summary

The site is in **strong technical health**. The common failure modes an audit usually
finds — duplicate titles/descriptions, missing or multiple H1s, canonical conflicts,
accidental `noindex`, blocked resources — **do not exist here**. Verified across all 2,590 pages:

| Check | Result |
|---|---|
| Duplicate `<title>` | **0** |
| Duplicate meta descriptions | **0** |
| Missing meta descriptions | **0** |
| Pages with ≠ 1 `<h1>` | **0** |
| Missing / duplicate / non-self-referencing canonicals | **0** (404 correctly excluded) |
| Conflicting robots directives | **0** (2,589 `index,follow` + 1 `noindex` on the 404) |
| Images missing `alt` | **0** |

The real work is **content uniqueness at scale** (the 2,444 programmatic city×service
pages) and a small number of **crawl-efficiency / performance** items. The biggest lever
for "get more pages indexed" is uniqueness, not robots/sitemap settings — Google folds
near-duplicates into one canonical and buries the rest as *Crawled – currently not indexed*.

---

## 2. Fixes implemented this session

### P1 — Tiered XML sitemap  ✅ shipped
**File:** `astro.config.mjs`
**Was:** one flat `sitemap-0.xml` with 2,589 equal-weight URLs, no `lastmod`, no `priority`,
no `changefreq`; the 404 was eligible for inclusion.
**Now:** every URL carries a tiered `priority` (1.0 home → 0.9 hubs/landing → 0.8 sub-hubs +
city pages → 0.7 leaves → 0.6 blog posts → 0.5 utility), plus `changefreq` and `lastmod`, and
`/404` is filtered out.
**Why it matters:** guides Google's crawl budget toward the money pages instead of spending it
equally on 2,444 tail permutations; `lastmod` is the signal Google uses to re-crawl changed pages.

### P1 — City hub pages rewritten for uniqueness  ✅ shipped
**Files:** `src/pages/locations/[location].astro`, new `src/lib/locationHubContent.ts`
**Was:** 94 near-identical pages. Measured pairwise similarity **75.2% median / 80.4% max**;
only the town name and one description sentence varied; ~664 words each; the rich per-town
`location.profile` data (vibe, landmarks, neighborhoods, housing, all four `serviceNotes`,
scenarios) was **unused**.
**Now:** each hub is built from that unique per-town data via seed-based variant rotation —
distinct intro, four "how the work differs here" cards (one per service family), housing stock,
neighborhoods, common scenarios, and 5 hub-specific FAQs with `FAQPage` schema.
**Result (measured on rebuilt output):** **75.2% → 21.7% median (max 34.9%)**; the residual is
the shared nav menu, which Google discounts. Same-town hub-vs-leaf stayed clean at ~10% (no new
duplication introduced). Also **fixed a missing internal-linking path** — hubs now link to nearby
city hubs — and improved menu anchor text to *"{service} in {town}"*.

### P2 — Image dimensions site-wide (CLS / Core Web Vitals)  ✅ shipped
**Files:** shared components (`EmergencyCTA`, `TestimonialSection`, `HeroBanner`) + templates
(`index`, `services/[serviceSlug]`, `services/[a]/[b]`, `services/[category]/[sub]/[location]`,
`locations/[location]`, `locations/index`, `services/index`, `blog/[slug]`, `blog/index`,
`about`, `faq`, `residential-locksmith`).
**Was:** **3,025** `<img>` elements without explicit `width`/`height`.
**Now:** **0**. Every image has explicit dimensions. (Note: most sit in CSS-sized containers,
so real-world CLS was already limited — this closes the Lighthouse "explicit width and height"
audit and removes edge-case shift.) Decorative background fills also received `aria-hidden` where
missing.

---

## 3. Remaining recommendations (prioritized — not yet executed)

### P1 — Leaf content uniqueness (the 2,444 city×service pages)
**Measured similarity:**
- Same service, different cities: **28% median** (100% of pairs exceed the 20% target).
- Same city, different services: **48% median** — all 26 service pages for a town recycle the
  *same* landmarks/housing/scenarios.
**Why it matters:** this is the single biggest determinant of how many of the 2,444 leaves Google
will actually index. At current similarity, expect a fraction indexed and the rest deferred.
**Recommended fix:** in `src/lib/subServiceLocationContent.ts` — (a) rotate each *service* onto a
*different* slice of the town's profile data so same-city pages diverge; (b) expand the variant
pools and trim shared boilerplate (the why-us / FAQ skeletons and stock phrasing). Target <20%.
Same measured approach as the city hubs (rewrite → rebuild → re-measure).

### P2 — Category landing cannibalization (judgment call — your decision)
**Affected:** `src/pages/{emergency,residential,commercial,automotive}-locksmith.astro`
**vs** the hubs `/services/{category}/` (`src/pages/services/[serviceSlug].astro`).
**Issue:** two indexable, self-canonical pages target the same head term (e.g. "emergency
locksmith NJ") — the standalone landing (248–601 words) and the category hub (479–515 words).
Both are internally linked (footer → standalone; breadcrumbs/cards → hub). This splits ranking
signals.
**Options:**
1. **Consolidate (technically strongest):** canonical/301 the 4 standalone pages → their hubs,
   drop them from the sitemap, repoint footer links. Matches the repo's existing pattern
   (`_redirects` already consolidates flat service pages → hubs). Net: −4 indexed URLs, stronger
   hubs. This is the one place where *fewer* indexed URLs = *better* ranking.
2. **Differentiate:** keep both, but make the standalone pages a genuinely distinct
   transactional/landing intent vs. the hub's service directory, and cross-link. Preserves count;
   less certain to fully resolve competition.
**Recommendation:** Option 1 unless you have external links/GBP pointing at the pretty
`/emergency-locksmith/` URLs. Left unexecuted pending your call on page-count vs. consolidation.

### P2 — Remote (hotlinked) Unsplash images → localize
**Affected:** `src/data/services.ts`, `src/pages/about.astro`, `src/pages/residential-locksmith.astro`,
`src/pages/automotive-locksmith.astro`, `src/components/shared/{EmergencyCTA,TestimonialSection}.astro`,
`src/lib/image.ts`.
**Issue:** several images are hotlinked from `images.unsplash.com`. That adds third-party requests
on ~2,500 pages (LCP/perf risk), depends on an external host's uptime, and isn't optimized/served
in a modern format from your own domain. **Recommended fix:** download, optimize (WebP), store in
`src/assets/` or `public/`, and reference locally — mirroring the already-localized hero assets.

### P3 — Additional sitemaps requested
- **Image sitemap:** not currently generated (`@astrojs/sitemap` doesn't emit image entries by
  default). Marginal SEO value in 2026 (Google discovers inline `<img>` during normal crawl), but
  can be added if desired.
- **Blog sitemap:** blog URLs are already included in the main sitemap; a *separate* blog sitemap
  is optional and offers no ranking benefit — recommend skipping unless you want per-section
  reporting in Search Console.
- **HTML sitemap:** already exists at `/sitemap/`.
- **Video sitemap:** N/A — no video content on the site.

### P3 — `robots.txt` hygiene (minor)
**File:** `public/robots.txt`. Currently allows all, disallows `/api/`, references
`sitemap-index.xml` (correct), and does **not** block CSS/JS (correct). The `Crawl-delay: 1`
directive is ignored by Googlebot (harmless; honored by Bing). No change required; optional cleanup.

---

## 4. Checklist compliance matrix

| Requirement | Status | Evidence / note |
|---|---|---|
| Unique title per page | ✅ | 0 duplicates / 2,590 |
| Unique meta description | ✅ | 0 duplicates / 2,590 |
| Single H1 | ✅ | every page has exactly 1 |
| H2/H3 hierarchy | ✅ | templated, logical order |
| Self-referencing canonical | ✅ | 0 missing, 0 mismatches (404 excluded) |
| Correct index/follow | ✅ | 2,589 index + 1 noindex (404) |
| Valid / semantic HTML | ✅ | `header`/`nav`/`main`/`footer`/`section` in layout & pages |
| Mobile-friendly | ✅ | responsive Tailwind, viewport meta present |
| Fast loading | ✅ | static, zero-JS content; React islands only where needed |
| Structured data | ✅ | Organization, WebSite, LocalBusiness/Locksmith, Service, FAQPage, BreadcrumbList |
| Internal links to relevant pages | ✅ | leaves ↔ nearby/related; hubs → nearby (added this session) |
| Breadcrumbs | ✅ | on all deep pages, with `BreadcrumbList` schema |
| Unique image alt text | ✅ | 0 missing alt; alts are contextual per page |
| Image width/height | ✅ | **fixed this session (3,025 → 0)** |
| Duplicate titles/descriptions/headings | ✅ | none |
| Broken internal links / redirect chains/loops | ✅ | internal links use canonical trailing-slash form; `_redirects` are single-hop |
| Soft 404s | ✅ | real 404 page, `noindex` |
| Orphan pages | ✅ | every leaf reachable ≤4 clicks; hubs now link nearby hubs |
| Parameter / duplicate URL versions | ✅ | clean paths, `trailingSlash: 'always'`, consistent canonicals |
| Sitemap completeness + tiering | ✅ | **improved this session** |
| Thin / duplicate content | ⚠️ | city hubs **fixed**; leaves (28%/48%) **recommended P1** |
| Category head-term cannibalization | ⚠️ | **recommended P2** (your call) |
| Remote image hotlinking | ⚠️ | **recommended P2** |
| Image sitemap | ➖ | optional, low value in 2026 |

Legend: ✅ compliant · ⚠️ action recommended · ➖ optional / N/A

---

## 5. Validation performed

- `astro build` — succeeds, 2,590 pages, no errors.
- Full `dist/` HTML scan — metadata/H1/canonical/robots/image results above.
- Rendered spot-checks in a real browser (city hub + leaf) — no console errors, correct layout,
  schema present in built output.
- Similarity re-measured on rebuilt output after each content change.

**Not yet done (awaiting go-ahead):** leaf-tier uniqueness rewrite (P1), category consolidation
decision (P2), remote-image localization (P2).
