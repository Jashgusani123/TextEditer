// service-worker.js

self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  event.waitUntil(self.skipWaiting()); // Activate immediately
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
});

self.addEventListener("fetch", (event) => {
  // This allows the app to work offline
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("You're offline, but don't worry! The app works offline.");
    })
  );
});

// Handle notifications
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("/") // Opens the app when clicked
  );
});
