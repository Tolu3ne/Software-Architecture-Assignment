import React from "react";
import Sidebar from "../sidebar/DoctorSidebar";
import RecordTable from "../table/DoctorPatientTable";

const Doctor: React.FC = () => {
  return (
    <Sidebar>
      <h2>Welcome Dr. Nhat Tan!</h2>
      <RecordTable />
    </Sidebar>
  );
};

export default Doctor;
