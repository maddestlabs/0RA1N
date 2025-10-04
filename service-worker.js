const CACHE_NAME = "0ra1n-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./MonomaniacOne-Regular.ttf",
  "./fx-rain.ogg",
  "./music.ogg",
  "./fx-splish.ogg",
  "./fx-explosion.ogg",
  "./fx-huh.ogg",
  "./icon-192.png",
  "./icon-512.png"
];

// Install service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve assets from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(
      (response) => response || fetch(event.request)
    )
  );
});

// Cleanup old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});
