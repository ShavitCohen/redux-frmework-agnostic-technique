const CACHE = 'app-store'

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches
      .open(CACHE)
      .then(function (cache) {
        cache.addAll([
          '/main.bundle.js',
          '/index.html',
          '/assets',
        ])
      })
  )
})


self.addEventListener('fetch', function(event) {
  if (~event.request.url.indexOf('http')) {
    event.respondWith(
      caches.match(event.request.url)
      .then(response => {
        return response || fetch(event.request)
      })
    )
  }
});
