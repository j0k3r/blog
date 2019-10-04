---
layout: null
---

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
)

if (workbox) {
  workbox.core.setCacheNameDetails({
    prefix: 'j0k3r-net',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
  })

  // let Service Worker take control of pages ASAP
  workbox.core.skipWaiting()
  workbox.core.clientsClaim()

  workbox.precaching.precacheAndRoute([
    {
      url: '/manifest.json',
      revision: '{{site.time | date: "%s%N"}}'
    },
    {
      url: '/assets/css/main.css',
      revision: '{{site.time | date: "%s%N"}}'
    },
    {
      url: '/assets/fonts/abril-fatface-v11-latin-regular.woff2',
      revision: '{{site.time | date: "%s%N"}}'
    },
  ])

  // use `cacheFirst` strategy for images
  workbox.routing.registerRoute(
    /assets\/(css|images|fonts)/,
    workbox.strategies.cacheFirst()
  )

  // use `networkFirst` strategy for everything else
  workbox.routing.registerRoute(
    /\.*/,
    workbox.strategies.networkFirst({
      networkTimeoutSeconds: 3,
    })
  )
}
