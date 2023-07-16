/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

const cacheName = 'app-cache-v1';

const assetUrls = [
  '/',
  '/index.html',
  '/src/index.tsx',
  '/src/styles/index.scss',
  '/src/styles/images/casper.png',
  '/src/styles/images/add_msg.png',
  '/src/styles/images/auth.png',
  '/src/styles/images/error.png',
  '/src/styles/images/forum-left-side.svg',
  '/src/styles/images/forum.svg',
  '/src/styles/images/fullscreen-close.png',
  '/src/styles/images/fullscreen-open.png',
  '/src/styles/images/fullscreen.png',
  '/src/styles/images/Hipe.svg',
  '/src/styles/images/leader.svg',
  '/src/styles/images/leaders.svg',
  '/src/styles/images/leaderVector.png',
  '/src/styles/images/like.png',
  '/src/styles/images/profile.svg',
  '/src/styles/images/progress-bg-pic.svg',
  '/src/styles/images/progress-pic.svg',
  '/src/styles/images/progress.svg',
  '/src/styles/images/start.svg',
  '/src/styles/fonts/HeliosExt-Bold.ttf',
  '/src/styles/fonts/HeliosExt.ttf',
  '/src/styles/fonts/Roboto-Bold.eot',
  '/src/styles/fonts/Roboto-Bold.ttf',
  '/src/styles/fonts/Roboto-Bold.woff',
  '/src/styles/fonts/Roboto-Bold.woff2',
  '/src/styles/fonts/Roboto-Regular.eot',
  '/src/styles/fonts/Roboto-Regular.ttf',
  '/src/styles/fonts/Roboto-Regular.woff',
  '/src/styles/fonts/Roboto-Regular.woff2',
];

sw.addEventListener('install', (event) => {
  console.log('install', event);

  event.waitUntil(addResourcesToCache(assetUrls));
});

sw.addEventListener('activate', async (event) => {
  try {
    const cacheNames = await caches.keys();

    await Promise.all(cacheNames.filter((name) => name !== cacheName).map((name) => caches.delete(name)));
  } catch (error) {
    console.log(error);
  }
});

sw.addEventListener('fetch', (event) => {
  const { request } = event;

  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    // @ts-expect-error - response might be undefined
    event.respondWith(networkFirst(request));
  }
});

async function addResourcesToCache(resources: string[]) {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(resources);
  } catch (error) {
    console.log(error);
  }
}

async function cacheFirst(request: Request) {
  const cached = await caches.match(request);

  return cached ?? (await fetch(request));
}

async function networkFirst(request: Request) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);

    await cache.put(request, response.clone());

    return response;
  } catch (error) {
    console.log(error);

    const cached = await caches.match(request);

    return cached;
  }
}
