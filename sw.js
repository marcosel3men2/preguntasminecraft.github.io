// Nombre y versión de caché
const CACHE_NAME = 'minecraft-quiz-v1';

// Lista de recursos a pre-cachear
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/images/minecraft-logo.png',
  '/images/minecraft-bg.jpg',
  '/images/screenshot1.png',
  '/images/screenshot2.png',
  '/icons/icon-512x512.png',
  '/icons/icon-192x192.png',
  '/fonts/minecraft.woff2'
];

// Instalación del Service Worker - pre-cachea activos en la instalación
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log('Cache abierto');
    return cache.addAll(PRECACHE_ASSETS);
  })());
});

// Activación del Service Worker - reclama clientes y limpia cachés antiguas
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  // Tomar control de los clientes sin esperar a que se recarguen
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // Eliminar cachés antiguas
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

// Estrategia Cache-First para interceptar solicitudes
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);

    // Intentar encontrar el recurso en caché
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      // Si está en caché, devolver el recurso cacheado
      return cachedResponse;
    }

    try {
      // Si no está en caché, obtenerlo de la red
      const networkResponse = await fetch(event.request);
      
      // Solo cachear respuestas válidas de tipo basic (misma fuente)
      if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
        // Clonar la respuesta para almacenarla en caché y para devolverla
        const responseToCache = networkResponse.clone();
        cache.put(event.request, responseToCache);
      }
      
      return networkResponse;
    } catch (error) {
      // Si la red falla y es una solicitud de HTML, mostrar la página offline
      if (event.request.headers.get('accept').includes('text/html')) {
        return caches.match('/index.html');
      }
      
      // Si no hay respuesta de caché ni de red, devolver un error
      throw error;
    }
  })());
}); 