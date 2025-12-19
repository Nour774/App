const CACHE = "pwa-test-v1";

const FILES = [
  "chat.html",
  "login.html",
  "manifest.json",
  "images/img.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
