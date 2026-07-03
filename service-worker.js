const CACHE_NAME = 'crystal-clicker-v2';

const urlsToCache = [
  '/Crystal-Clicker/',
  '/Crystal-Clicker/index.html',
  '/Crystal-Clicker/icon-192.png',
  '/Crystal-Clicker/icon-512.png',
  '/Crystal-Clicker/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});