var cacheName = 'hello-pwa';
var filesToCache = [
  '/index.html',
  '/js/app.js',
  '/js/chat.js', 
  '/js/images-calcu.js',
  '/js/scriptfilter.js', 
  '/js/shop.js',
  ];
/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});
/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
