import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./sidebar";

const DoctorSidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MediBK Hospital</h2>
        <nav style={styles.nav}>
          <Link to="/nurse" style={styles.navItem}>Patient Management</Link>
          <Link to="/nurse" style={styles.navItem}>Settings</Link>
        </nav>
        <button style={styles.backButton} onClick={() => navigate("/")}>Back</button>
      </div>

      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default DoctorSidebar;
