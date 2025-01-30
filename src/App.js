import React, { useEffect } from "react";
import "./App.css";
import Mainpage from "./Componante/Mainpage";

function App() {
  useEffect(() => {
    // Check if Notification API and Service Worker are supported
    if ("Notification" in window && "serviceWorker" in navigator) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          navigator.serviceWorker.ready.then((registration) => {
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
  }, []);

  return (
    <>
      <div className="conteinar">
        <Mainpage />
      </div>
    </>
  );
}

export default App;
