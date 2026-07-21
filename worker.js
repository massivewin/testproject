// Simple CORS Proxy - Test Version
// AUTO-GENERATED CONFIG (from config.json)
export const CONFIG = {
  "allowed_origins": [
    "*"
  ],
  "max_file_size": "10mb"
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get('url');

    if (!target) {
      return new Response('Missing ?url= parameter', { status: 400 });
    }

    try {
      const response = await fetch(target);
      const newHeaders = new Headers(response.headers);
      
      newHeaders.set('Access-Control-Allow-Origin', '*');
      newHeaders.set('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
      newHeaders.set('Access-Control-Allow-Headers', '*');

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders
      });
    } catch (e) {
      return new Response('Proxy Error: ' + e.message, { status: 502 });
    }
  }
};