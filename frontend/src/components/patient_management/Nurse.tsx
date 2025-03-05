import React from "react";
import Sidebar from "../sidebar/NurseSidebar";
import RecordTable from "../table/NursePatientTable";

const Nurse: React.FC = () => {
  return (
    <Sidebar>
      <h2>Welcome Ms. Nurse!</h2>
      <RecordTable />
    </Sidebar>
  );
};

export default Nurse;
