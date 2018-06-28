/* help taken from https://developers.google.com/web/fundamentals/codelabs/offline/ */

const cacheName = 'my-restaurant-cache';
const toCache = [
  '/mws-restaurant-stage-1/',
  '/mws-restaurant-stage-1/index.html',
  '/mws-restaurant-stage-1/restaurant.html?id=1',
  '/mws-restaurant-stage-1/restaurant.html?id=2',
  '/mws-restaurant-stage-1/restaurant.html?id=3',
  '/mws-restaurant-stage-1/restaurant.html?id=4',
  '/mws-restaurant-stage-1/restaurant.html?id=5',
  '/mws-restaurant-stage-1/restaurant.html?id=6',
  '/mws-restaurant-stage-1/restaurant.html?id=7',
  '/mws-restaurant-stage-1/restaurant.html?id=8',
  '/mws-restaurant-stage-1/restaurant.html?id=9',
  '/mws-restaurant-stage-1/restaurant.html?id=10',
  '/mws-restaurant-stage-1/js/main.js',
  '/mws-restaurant-stage-1/js/dbhelper.js',
  '/mws-restaurant-stage-1/js/restaurant_info.js',
  '/mws-restaurant-stage-1/css/styles.css',
  '/mws-restaurant-stage-1/data/restaurants.json',
];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(cacheName).then(function (cache) {
    return cache.addAll(toCache);
  }).catch(function (error) {
    return console.log('Caching error: ', error);
  }));
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
    return response || fetch(event.request);
  }));
});
