import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import hospitalImage from "../assets/hospital.png";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={hospitalImage} alt="Hospital" style={styles.image} />
      </div>
      <div style={styles.content}>
        <h2>Welcome to MediBK Hospital!</h2>
        <div style={styles.buttonContainer}>
          <Link to="/patient" style={styles.button}>Patient</Link>
          <Link to="/doctor" style={styles.button}>Doctor</Link>
          <Link to="/nurse" style={styles.button}>Nurse</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
