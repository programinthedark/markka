const C = 'markka-v4';
self.addEventListener('install', e => e.waitUntil(caches.open(C).then(c => c.addAll(['./', 'index.html', 'icon-180.png']))));
self.addEventListener('fetch', e => {
  if (new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(fetch(e.request).then(r => { caches.open(C).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request)));
});
