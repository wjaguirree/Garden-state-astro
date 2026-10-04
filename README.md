# Garden State Locksmith — Astro site

Static AstroJS site (582 prerendered pages) with programmatic local SEO for
New Jersey towns × locksmith services. Zero-JS content; React islands only for
the mobile menu, booking form, and service-area map.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally
```

## Deploy (Cloudflare Worker)

The site runs as a **Cloudflare Worker with static assets** (configured in
`wrangler.jsonc`). Pages are plain files from `dist/`; only `/api/contact`
(the contact/booking form, `worker/contact.ts`) runs code.

- Every push to `main` builds and deploys to production (Workers Builds).
- Deploy command: `npx wrangler deploy`. The build runs automatically first.
- The `name` in `wrangler.jsonc` must match the Worker's name in the dashboard.
- Secret (Worker → Settings → Variables & Secrets, type **Secret**):
  `RESEND_API_KEY` for the form emails. Without it, the form shows
  "please call us instead" and pages still work.
- Redirects live in `public/_redirects` (max 100 pattern rules; keep plain
  rules first).
- Local test with the Worker: `npm run cf:dev`.

> If the GitHub repo owner changes, Cloudflare loses its Git connection —
> the new owner must reconnect the repo (re-authorize the Cloudflare GitHub
> App on their account) for auto-deploys to resume.

## Go-live SEO checklist

- [ ] Point `gardenstatelocksmithnj.com` at the Worker (canonicals already
      target this domain).
- [ ] Verify the site in **Google Search Console**.
- [ ] Submit `sitemap-index.xml` in Search Console.
- [ ] Confirm the contact form submits (needs `RESEND_API_KEY` on the Worker).

## Content

All page content is data-driven — edit the files in `src/data/`:
`locations.ts`, `categories.ts`, `blogPosts.ts`. Pages regenerate
on the next build.
