import React, { useEffect, useRef, useState } from "react";
import historyIcon from "../../assets/history.svg";
import styles from "./table";
import common from "../../utils/common";
import { clear } from "console";
// TODO Long

// const data = [
//   {
//     name: "Nguyen Van A", dob: "01/01/1981", gender: "Male", next_appt: "07:45 15/03/2025",
//     appointmentHistory: [
//       {
//         id: 1,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 2,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 3,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 4,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 5,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 6,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//       {
//         id: 7,
//         patient: 'Nguyen Van A',
//         doctor: 'Dr. Nhat Tan',
//         nurse: 'Nurse 1',
//         timestamp: "07:45 15/03/2025",
//         diagnosis: "Fever",
//         treatment: 'Take medicine',
//         status: 'Done',
//         prescription: [
//           {
//             medicineName: 'Paracetamol',
//             quanity: 10
//           },
//           {
//             medicineName: 'Ibuprofen',
//             quanity: 20
//           }
//         ]
//       },
//     ]
//   },
//   { name: "Nguyen Van Tuan", dob: "25/12/1969", gender: "Male", next_appt: "08:45 15/03/2025" },
//   { name: "Tran Thi Thu Thao", dob: "02/03/1969", gender: "Female", next_appt: "09:45 15/03/2025" },
//   { name: "Nguyen Thi Thanh Hang", dob: "06/08/1989", gender: "Female", next_appt: "10:45 15/03/2025" },
// ];





// const appointmentHistory = [
//   {
//     id: 1,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 2,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 3,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 4,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 5,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 6,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },
//   {
//     id: 7,
//     patient: 'Nguyen Van A',
//     doctor: 'Dr. Nhat Tan',
//     nurse: 'Nurse 1',
//     timestamp: "07:45 15/03/2025",
//     diagnosis: "Fever",
//     treatment: 'Take medicine',
//     status: 'Done',
//     prescription: [
//       {
//         medicineName: 'Paracetamol',
//         quanity: 10
//       },
//       {
//         medicineName: 'Ibuprofen',
//         quanity: 20
//       }
//     ]
//   },


// ]

type Patient = {
  name: string;
  dob: string;
  gender: string;
  next_appt?: string;
  appointmentHistory?: Record<string, any>[];
}

const RecordTable: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [data, setData] = useState<Patient[]>([]);
  const searchTimeoutId  = useRef<NodeJS.Timeout | null>(null);

  const debounceSearch = ((searchTerm: string) => {
    if(searchTimeoutId.current){
      clearTimeout(searchTimeoutId.current);
    }
    searchTimeoutId.current = setTimeout(async () => {
      const patientData = await common.get('/patient', { type: 'DOCTOR',filter:{searchTerm} });
        setData(patientData);
    }, 1000);
    console.log(data)
  });

  useEffect(() => {
    (async () => {
      try {
        const patientData = await common.get('/patient', { type: 'DOCTOR' });
        setData(patientData);
      } catch (error) {
        console.error('Error fetching patient records:', error);
      }
    })()
  }, [])




  const handleHistoryClick = (patient: any) => {
    setSelectedPatient(patient);
    setShowPopup(true);
  };

  return (
    <div style={styles.container}>
      <h2>Patient Information</h2>
      <input onChange={(e) => {
        debounceSearch(e.target.value);
      }} type="text" placeholder="Search here..." style={styles.search} />

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.centered}>No.</th>
            <th style={styles.centered}>Full name</th>
            <th style={styles.centered}>Date of birth</th>
            <th style={styles.centered}>Gender</th>
            <th style={styles.centered}>Incoming Appointment</th>
            <th style={styles.centered}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={styles.centered}>{index + 1}</td>
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
            <button style={styles.closeButton} onClick={() => setShowPopup(false)}>x</button>
            <div style={{ maxHeight: '50vh', overflowY: 'auto' }}>
              <h2 style={{ textAlign: 'center' }}>Appointment History</h2>
              {selectedPatient.appointmentHistory?.map((item, index) => {
                return (
                  <div key={index} style={{ padding: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ borderBottom: '1px solid #27a4f2', flex: 1 }}></div>
                      <h3>{item.timestamp}</h3>
                      <div style={{ borderBottom: '1px solid #27a4f2', flex: 1 }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p ><span style={{ fontWeight: 900 }}>Doctor:</span> {item.doctor}</p>
                      {/* <p ><span style={{ fontWeight: 900 }}>Nurse:</span> {item.nurse}</p> */}
                      <p><span style={{ fontWeight: 900 }}>Diagnosis:</span> {item.diagnosis}</p>
                      <p><span style={{ fontWeight: 900 }}>Treatment:</span> {item.treatment}</p>
                      <p><span style={{ fontWeight: 900 }}>Status:</span> {item.status}</p>
                    </div>
                    <p><span style={{ fontWeight: 900 }}>Prescription:</span> </p>
                    <ul>
                      {item.prescription?.map((prescription: any, index: any) => (
                        <li key={index}>{prescription.medicineName} - {prescription.quanity}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default RecordTable;
