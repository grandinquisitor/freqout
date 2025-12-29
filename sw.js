const CACHE_NAME = 'v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon/icon-192.png',
  './icon/icon-512.png'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Strategy: Cache First, then Network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
