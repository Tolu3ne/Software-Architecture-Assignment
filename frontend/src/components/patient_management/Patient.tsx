import React from "react";
import Sidebar from "../sidebar/PatientSidebar";
import RecordTable from "../table/RegisterationForm";

const Patient: React.FC = () => {
  return (
    <Sidebar>
      <h2>Welcome to MediBK Hospital!</h2>
      <RecordTable />
    </Sidebar>
  );
};

export default Patient;
