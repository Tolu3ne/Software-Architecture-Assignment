import React from "react";
import { useNavigate } from "react-router-dom";

const Patient: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1>I am a Patient</h1>
      <button style={styles.button} onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontSize: "24px",
    fontWeight: "bold",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#FF5733",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Patient;
