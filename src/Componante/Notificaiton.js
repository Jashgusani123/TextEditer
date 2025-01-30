import { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("visited");
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem("visited", "true");
    }
  }, []);

  if (!showWelcome) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Welcome to our PWA! 🎉</h2>
        <p>Thanks for joining. We hope you enjoy the experience!</p>
        <button onClick={() => setShowWelcome(false)} style={styles.button}>
          OK
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 16px",
    border: "none",
    background: "#007bff",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default WelcomeMessage;
