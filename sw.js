let cacheID = 'Project-6-FEND-cache-v1';
const toCache = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/img/',
  '/img/1.png',
  '/img/2.png',
  '/img/3.png',
  '/img/4.png',
  '/img/5.png',
  '/img/6.png',
  '/img/7.png',
  '/img/8.png',
  '/img/9.png',
  '/img/10.png',
  '/js/',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
];

self.addEventListener('install', function (event) {
    console.log('It Works');
    event.waitUntil(
        caches.open(cacheID).then(function (cache) {
            return cache.addAll(toCache);
        })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});
