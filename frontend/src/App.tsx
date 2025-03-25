import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Patient from "./components/patient_management/Patient";
import Doctor from "./components/patient_management/Doctor";
import Nurse from "./components/patient_management/Nurse";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/nurse" element={<Nurse />} />
      </Routes>
    </Router>
  );
};

export default App;
