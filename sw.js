// sw.js
const cacheName = 'leverage-v3.5.8';
const assets = [
  './',
  './index.html',
  './logoforapp.png',
  './manifest.json'
];

// ফাইলগুলো মেমোরিতে সেভ করা (Install)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// অফলাইনে ফাইলগুলো সরবরাহ করা (Fetch)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
