const CACHE_NAME = 'minecraft-quiz-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/images/minecraft-logo.png',
  '/images/minecraft-bg.jpg',
  '/images/icon-512x512.png',
  '/images/icon-192x192.png',
  '/fonts/minecraft.woff2'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar solicitudes y servir desde caché si están disponibles
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el recurso está en caché, devuélvelo
        if (response) {
          return response;
        }
        
        // Si no está en caché, buscarlo en la red
        return fetch(event.request)
          .then(response => {
            // Comprobar si recibimos una respuesta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar la respuesta para poder almacenarla en caché
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Si falla la red y es una solicitud de documento HTML,
            // servir la página offline
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Activación para limpiar cachés antiguas
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Si el nombre de la caché no está en la lista blanca, eliminarla
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 