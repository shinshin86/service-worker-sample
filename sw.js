const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = ['/', '/sample.png'];

self.addEventListener('install', function(event) {
  console.log('===install===');

  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log({ cache });
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('===activate===');
  console.log(event);
});

self.addEventListener('fetch', function(event) {
  console.log('===fetch===');
  console.log(event);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        console.log({ response });
        return response;
      }
      return fetch(event.request);
    })
  );
});
