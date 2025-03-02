import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MediBK Hospital</h2>
        <nav style={styles.nav}>
          <Link to="/patient" style={styles.navItem}>Patient details</Link>
          <Link to="/doctor" style={styles.navItem}>Doctor details</Link>
          <Link to="/nurse" style={styles.navItem}>Nurse details</Link>
        </nav>
        <button style={styles.backButton} onClick={() => navigate("/")}>Back</button>
      </div>

      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    margin: "0",
    padding: "0",
    overflow: "hidden",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#27A4F2",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center" as const,
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
  },
  navItem: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#004A99",
    textAlign: "center" as const,
  },
  backButton: {
    marginTop: "auto",
    padding: "10px",
    backgroundColor: "#FF6B6B",
    border: "none",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
    textAlign: "center" as const,
  },
  content: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#F8F9FA",
    overflow: "auto",
  },
};

export default DashboardLayout;
