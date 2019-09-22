// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
  prefix: 'j0k3r-net',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime-cache'
})

// let Service Worker take control of pages ASAP
workbox.skipWaiting()
workbox.clientsClaim()

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest)

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
  /assets\/(css|images|fonts)/,
  workbox.strategies.cacheFirst()
)

// third party files
// workbox.routing.registerRoute(
//   /^https?:\/\/fonts.googleapis.com/,
//   workbox.strategies.staleWhileRevalidate()
// )

// use `networkFirst` strategy for everything else
workbox.routing.registerRoute(
  /\.*/,
  workbox.strategies.networkFirst()
)
