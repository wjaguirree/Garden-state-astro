// Cloudflare Worker entry. The site is static (dist/), served by Workers
// static assets. Only /api/* reaches this script (see run_worker_first in
// wrangler.jsonc); every page, image and redirect is handled by the asset
// layer without invoking the Worker.
import { handleContact, type ContactEnv } from "./contact";

interface Env extends ContactEnv {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
