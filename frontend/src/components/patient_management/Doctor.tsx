import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import RecordTable from "../table/DoctorPatientRecord";

const Doctor: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>Patient Management</h1>
      <RecordTable />
    </DashboardLayout>
  );
};

export default Doctor;
