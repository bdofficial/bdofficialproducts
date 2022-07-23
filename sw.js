var cacheName = 'hello-pwa';
var filesToCache = [
    '/',
  '/index.html',
  '/css/boostrap.min.css',
  '/css/boostrap.min.js',
  '/css/off/chat.css',
  '/css/off/style.css',
  '/css/off/stylepop.css',
  '/css/off/stylefilter.css',
  '/css/off/styleshop.css',
  '/css/off/typing.css',
  '/js/app.js',
  '/js/chat.js', 
  '/js/images-calc.js', 
  '/js/scriptfilter.js', 
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
