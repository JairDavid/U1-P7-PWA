const STATIC = 'static-v1';
const INMUTABLE = 'inmutable-v1';

self.addEventListener('install',(event)=>{
    const staticPromise = caches.open(STATIC)
    .then((cache)=>{
        return cache.addAll([
            './',
            './index.html',
            './js/app.js',
            './sw.js',
            './manifest.json',
            './images/milky.jpg',
            './images/icons/android-launchericon-48-48.png',
            './images/icons/android-launchericon-72-72.png',
            './images/icons/android-launchericon-96-96.png',
            './images/icons/android-launchericon-144-144.png',
            './images/icons/android-launchericon-192-192.png',
            './images/icons/android-launchericon-512-512.png',
        ])
    })   

    const inmutablePromise = caches.open(INMUTABLE)
    .then((cache)=>{
        return cache.addAll([
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.woff2',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/webfonts/fa-solid-900.ttf',
            'https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'        
    ])
    })
    event.waitUntil(Promise.all([staticPromise, inmutablePromise]))
})

self.addEventListener('fetch',(event)=>{
    event.respondWith(caches.match(event.request))
})