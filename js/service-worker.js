const CACHE_NAME = "pwa-cache-v3";
const urlsToCache = [
    "/tester/index.html",
    "/tester/style/style.css",
    "/tester/js/app.js",
    "/tester/js/force_refresh.js"
];

console.log("Service Worker is being installed");

self.addEventListener("install", Event => {
    console.log("Service Worker installation event fired");
    Event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch Requests
self.addEventListener("fetch", Event => {
    Event.respondWith(
        caches.match(Event.request).then(response => {
            return response || fetch(Event.request);
        }).catch(() => {
            return caches.match("offline.html");
        })
    );
});

// Active Service Worker
self.addEventListener("active", Event => {
    Event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== CACHE_NAME).map(cache => caches.delete(cache))
            );
        })
    );
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/tester/js/sw-register.js')
    .then(() => console.log("Service Worker Registered!"))
    .catch(err => console.error("Service Worker Registration Failed:", err));
}
