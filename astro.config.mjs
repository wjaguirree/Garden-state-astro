// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://gardenstatelocksmithnj.com';

// Build-time timestamp reused for every <lastmod>. Regenerated on each deploy,
// which is the honest signal for a fully static, data-driven site: the pages
// change when the site is rebuilt, not on independent schedules.
const LASTMOD = new Date().toISOString();

/**
 * Tiered sitemap hints. Priority is *relative* — it tells Google which of OUR
 * URLs matter most when it allocates crawl budget, it does not affect ranking.
 * The tiers mirror the site's information architecture and funnel value:
 *   1.00  home
 *   0.90  top hubs + category landing pages (highest commercial intent)
 *   0.80  service sub-hubs + per-city pages (strong, unique local pages)
 *   0.70  city × service leaves + blog index
 *   0.60  blog posts
 *   0.50  utility/legal/static pages
 */
function priorityFor(pathname) {
  // Normalise to segments without leading/trailing slashes.
  const segs = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean);

  if (segs.length === 0) return { priority: 1.0, changefreq: 'weekly' };

  const [first, second, third, fourth] = segs;

  // Category landing pages: /emergency-locksmith/ etc.
  if (
    segs.length === 1 &&
    /-locksmith$/.test(first)
  ) {
    return { priority: 0.9, changefreq: 'monthly' };
  }

  // Top hubs
  if (segs.length === 1 && (first === 'services' || first === 'locations')) {
    return { priority: 0.9, changefreq: 'weekly' };
  }

  if (first === 'services') {
    if (segs.length === 2) return { priority: 0.9, changefreq: 'monthly' }; // /services/{category}/
    if (segs.length === 3) return { priority: 0.8, changefreq: 'monthly' }; // /services/{category}/{sub}/
    if (segs.length >= 4) return { priority: 0.7, changefreq: 'monthly' };  // /services/{category}/{sub}/{city}/
  }

  // Per-city hub pages: /locations/{city}/
  if (first === 'locations' && segs.length === 2) {
    return { priority: 0.8, changefreq: 'monthly' };
  }

  if (first === 'blog') {
    return segs.length === 1
      ? { priority: 0.7, changefreq: 'weekly' }   // /blog/
      : { priority: 0.6, changefreq: 'monthly' }; // /blog/{slug}/
  }

  // Static / utility pages (about, contact, faq, sitemap, …)
  return { priority: 0.5, changefreq: 'monthly' };
}

// https://astro.build/config
export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [
    react(),
    sitemap({
      // Keep the 404 out of the sitemap; everything else is indexable today.
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const { pathname } = new URL(item.url);
        const { priority, changefreq } = priorityFor(pathname);
        return {
          ...item,
          lastmod: LASTMOD,
          changefreq,
          priority,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
