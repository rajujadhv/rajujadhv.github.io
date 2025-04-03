// sw.js - Basic Service Worker for PWA installability

self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  event.waitUntil(clients.claim());
});

// Fetch event - Online only app, just pass through network requests
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});