// =========================================================
// IVRI ANATOMY — SERVICE WORKER (v2 — auto-update friendly)
// Strategy:
//   • Same-origin (our HTML/JS/CSS/data files) → NETWORK-FIRST with cache fallback.
//     This means online users ALWAYS get the latest GitHub-deployed version.
//     Cache is only used when offline.
//   • Cross-origin (CDN fonts, icons) → STALE-WHILE-REVALIDATE.
//     Cached copy returns instantly; fresh copy quietly updates the cache.
//
// Auto-update flow:
//   1. New SW installs in the background → enters 'waiting' state.
//   2. Page detects the waiting SW and shows an "Update available" banner.
//   3. User clicks "Refresh now" → page posts {type:'SKIP_WAITING'} to the SW.
//   4. SW calls skipWaiting() → activates → page's controllerchange listener reloads.
// =========================================================

const CACHE_VERSION = 'ivri-anatomy-v13';

// App shell — files needed for the site to work offline.
const APP_SHELL = [
    './',
    './index.html',
    './style.css',
    './dashboard.css',
    './enhanced-quiz.css',
    './annotation-editor.css',
    './annotation-editor.html',
    './app.js',
    './annotation-editor.js',
    './dashboard.js',
    './enhanced-quiz.js',
    './search.js',
    './srs.js',
    './glossary.js',
    './data-image-annotations.JS',
    './data-forelimb.JS',
    './data-hindlimb.JS',
    './data-thorax.JS',
    './data-abdomen.JS',
    './data-head-neck.JS',
    './data-splanchnology.JS',
    './data-quiz.JS',
    './data-why.JS',
    './images/scapula-ox-horse-dog-annotated.png',
    './manifest.json'
];

// ---- INSTALL: pre-cache the app shell and activate immediately ----
// We auto-skip waiting so a new SW activates as soon as it finishes installing.
// No "update available" banner needed — readers transparently get the latest
// version on their next page reload.
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) =>
            Promise.all(
                APP_SHELL.map((url) =>
                    cache.add(url).catch((err) =>
                        console.warn('[SW] skip pre-cache:', url, err.message)
                    )
                )
            )
        )
    );
});

// ---- ACTIVATE: clean old caches & take control of all open tabs ----
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

// ---- MESSAGE: page asked us to skip waiting and activate immediately ----
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// ---- FETCH: routing logic ----
self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);
    const isSameOrigin = url.origin === self.location.origin;

    if (isSameOrigin) {
        // ============== NETWORK-FIRST for our own files ==============
        event.respondWith(networkFirst(req));
    } else {
        // ============== STALE-WHILE-REVALIDATE for CDN assets ==============
        event.respondWith(staleWhileRevalidate(req));
    }
});

// Network-first: try fetch, fall back to cache, finally fall back to index.html for navigations
function networkFirst(req) {
    return fetch(req).then((res) => {
        // Update the cache for next time (only successful responses)
        if (res && res.status === 200 && res.type !== 'opaque') {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(req, clone)).catch(() => {});
        }
        return res;
    }).catch(() =>
        caches.match(req).then((cached) => {
            if (cached) return cached;
            // Final fallback for HTML navigations: serve cached index.html
            if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
                return caches.match('./index.html');
            }
            return new Response('', { status: 504, statusText: 'Offline and not cached' });
        })
    );
}

// Stale-while-revalidate: return cache immediately, refresh in background
function staleWhileRevalidate(req) {
    return caches.open(CACHE_VERSION).then((cache) =>
        cache.match(req).then((cached) => {
            const networkFetch = fetch(req).then((res) => {
                if (res && res.status === 200 && res.type !== 'opaque') {
                    cache.put(req, res.clone()).catch(() => {});
                }
                return res;
            }).catch(() => cached);
            return cached || networkFetch;
        })
    );
}
