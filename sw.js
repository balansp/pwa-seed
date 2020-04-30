const cacheName = 'calc-per-v1';
const staticAssets = [
    './',
    './index.html',
    './app.js',
    './styles.css'
];

self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('fetch', async event => {
    const req = event.request;
    event.respondWith(cacheFirst(req))
});

async function cacheFirst(req){
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}