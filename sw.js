self.addEventListener('install', function(event) {
  console.log('install')
  console.log('hello world')
});

self.addEventListener('fetch', function(event) {
  console.log(event);
})
