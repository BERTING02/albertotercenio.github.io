self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./src/master.css", "./images/logo192.png"]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request for: ${e.request.url}');
});




const cacheName = 'v1';
const cacheAssets = [
'index.html',
'manifest.json',
'/css',
'/images',
'src/master.css',
'src/index.js',
'sw.js'
];




self.addEventListener("install", e => {
  console.log('Service Worker : Installed');
        e.waitUntil(
            caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker : Caching Files');
                cache.addAll(cacheAssets)
            })
            .then(() => self.skipWaiting())
        );
    });





self.addEventListener("activate", e => {
    console.log('activated');
});
