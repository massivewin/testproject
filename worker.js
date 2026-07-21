// Cloudflare Worker - CORS Proxy
// AUTO-GENERATED CONFIG (from config.json)
export const CONFIG = {
  "name": "my-editor",
  "main": "worker.js",
  "compatibility_date": "2026-07-20",
  "compatibility_flags": [
    "nodejs_compat"
  ]
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');
    if (!target) return new Response('Missing ?url=', { status: 400 });
    const response = await fetch(target);
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Access-Control-Allow-Origin', '*');
    newHeaders.set('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
    return new Response(response.body, { status: response.status, headers: newHeaders });
  }
};