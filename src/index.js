import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register();

// Request notification permission when the app is installed
if ("Notification" in window && "serviceWorker" in navigator) {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification("Welcome to Our PWA! 🎉", {
          body: "Thank you for installing our app. Enjoy your experience!",
          icon: "/icons/app-icon.png", // Replace with your app icon
          badge: "/icons/badge-icon.png",
          vibrate: [200, 100, 200],
        });
      });
    }
  });
}

// Performance monitoring (optional)
reportWebVitals();
