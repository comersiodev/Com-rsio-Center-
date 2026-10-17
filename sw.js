const cacheName = 'comersio-center-v1';
const assets = [
  '/Com-rsio-Center-/',
  '/Com-rsio-Center-/index.html',
  '/Com-rsio-Center-/manifest.json',
  '/Com-rsio-Center-/icon.png'
];

// Proses simpan file ke memori HP saat install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Proses mengambil file dari memori HP saat offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
