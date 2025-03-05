import React, { useState } from "react";
import historyIcon from "../../assets/history.svg";
import styles from "./table";

const data = [
  { name: "Nguyen Van A", dob: "01/01/1981", gender: "Male", next_appt: "07:45 15/03/2025" },
  { name: "Nguyen Van Tuan", dob: "25/12/1969", gender: "Male", next_appt: "08:45 15/03/2025" },
  { name: "Tran Thi Thu Thao", dob: "02/03/1969", gender: "Female", next_appt: "09:45 15/03/2025" },
  { name: "Nguyen Thi Thanh Hang", dob: "06/08/1989", gender: "Female",next_appt: "10:45 15/03/2025" },
];

const RecordTable: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);

  const handleHistoryClick = (patient: any) => {
    setSelectedPatient(patient);
    setShowPopup(true);
  };

  return (
    <div style={styles.container}>
      <h2>Patient Information</h2>
      <input type="text" placeholder="Search here..." style={styles.search} />
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.centered}>No.</th>
            <th style={styles.centered}>Full name</th>
            <th style={styles.centered}>Date of birth</th>
            <th style={styles.centered}>Gender</th>
            <th style={styles.centered}>Appointment</th>
            <th style={styles.centered}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={styles.centered}>{index+1}</td>
              <td style={styles.lefted}>{item.name}</td>
              <td style={styles.centered}>{item.dob}</td>
              <td style={styles.centered}>{item.gender}</td>
              <td style={styles.centered}>{item.next_appt}</td>
              <td style={styles.centered}>
                <img src={historyIcon} alt="History" style={styles.icon} onClick={() => handleHistoryClick(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && selectedPatient && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h2>Appointment history</h2>
            <p>Name: {selectedPatient.name}</p>
            <p>Date of birthday: {selectedPatient.dob}</p>
            <p>Gender: {selectedPatient.gender}</p>
            <button style={styles.closeButton} onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordTable;
