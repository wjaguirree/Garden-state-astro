// ── Site-wide maintenance mode ──────────────────────────────────────────────
// When MAINTENANCE is on, every request returns HTTP 503 (Service Unavailable)
// with a Retry-After header and a branded holding page. 503 is the signal
// Google uses for TEMPORARY downtime: it holds your indexed pages instead of
// dropping them — as long as the pause is short (days, not many weeks).
//
// Toggle:
//   • OFF (default here) → site is live. Set MAINTENANCE = on to pause again.
//   • ON  → set a Cloudflare env var  MAINTENANCE = on  (Settings → Variables),
//           or flip DEFAULT_ON below to true and redeploy.
//
// IMPORTANT: keep this pause short. If the site returns 503 for many weeks,
// Google will eventually de-index it anyway. Remove maintenance mode as soon
// as you're ready to be visible again.

const DEFAULT_ON = false;

interface Env {
  MAINTENANCE?: string;
}

const PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Garden State Locksmith — We'll be right back</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #0c1410; color: #fff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    padding: 24px; text-align: center;
  }
  .card { max-width: 520px; }
  .badge {
    display: inline-block; font-size: 12px; font-weight: 700; letter-spacing: .15em; text-transform: uppercase;
    color: #4ea777; border: 1px solid rgba(78,167,119,.5); background: rgba(78,167,119,.12);
    padding: 6px 14px; border-radius: 999px; margin-bottom: 28px;
  }
  h1 { font-size: clamp(28px, 6vw, 44px); line-height: 1.1; margin: 0 0 16px; font-weight: 800; }
  p { font-size: 18px; line-height: 1.6; color: rgba(255,255,255,.72); margin: 0 0 32px; }
  .call {
    display: inline-flex; align-items: center; gap: 10px; background: #1f7a44; color: #fff;
    font-weight: 800; font-size: 22px; text-decoration: none; padding: 16px 32px; border-radius: 999px;
  }
  .call:hover { background: #1a6b3c; }
  .hours { margin-top: 28px; font-size: 14px; color: rgba(255,255,255,.5); }
</style>
</head>
<body>
  <div class="card">
    <div class="badge">Garden State Locksmith · New Jersey</div>
    <h1>We're updating our site.</h1>
    <p>Need a locksmith right now? We're still open and dispatching across New Jersey. Call us and we'll be on the way.</p>
    <a class="call" href="tel:8565880580">📞 (856) 588-0580</a>
    <div class="hours">Mon–Thu &amp; Sun 7 AM – 10 PM · Fri 7 AM – 6 PM · Licensed &amp; Insured</div>
  </div>
</body>
</html>`;

export const onRequest: PagesFunction<Env> = async (context) => {
  const flag = (context.env.MAINTENANCE ?? (DEFAULT_ON ? "on" : "off")).toLowerCase();
  if (flag !== "on") {
    return context.next();
  }
  return new Response(PAGE, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "86400", // ask crawlers to come back in ~1 day
      "cache-control": "no-store",
    },
  });
};
