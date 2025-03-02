import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import RecordTable from "../table/RegisterationForm";

const Patient: React.FC = () => {
  return (
    <DashboardLayout>
      <h1>Patient Registeration</h1>
      <RecordTable />
    </DashboardLayout>
  );
};

export default Patient;
