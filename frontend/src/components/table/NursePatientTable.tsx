import React from "react";
import styles from "./table";

const data = [
  { name: "Nguyen Van A", dob: "01/01/1981", gender: "Male" },
  { name: "Nguyen Van Tuan", dob: "25/12/1969", gender: "Male" },
  { name: "Tran Thi Thu Thao", dob: "02/03/1969", gender: "Female" },
  { name: "Pham Thi Hong", dob: "01/01/1959", gender: "Female" },
  { name: "Nguyen Van Manh", dob: "08/03/1956", gender: "Male" },
  { name: "Phan Thi Thuy", dob: "11/04/1948", gender: "Female" },
  { name: "Ly Van Tam", dob: "26/08/1976", gender: "Male" },
  { name: "Nguyen Thi Diep", dob: "04/07//1972", gender: "Female" },
  { name: "Nguyen Thi Thanh Hang", dob: "06/08/1989", gender: "Female" },
  { name: "Le Van Hai", dob: "06/11/1966", gender: "Male" },
  { name: "Pham Thi Hong Nga", dob: "05/10/1969", gender: "Female" },
  { name: "Le Phuoc Sang", dob: "10/07/1956", gender: "Male" },
  { name: "Dang Thi Hoa", dob: "25/12/1969", gender: "Female" },
  { name: "Pham Quoc Huy", dob: "28/08/1989", gender: "Male" },
  { name: "Nguyen Thi An", dob: "02/03/1968", gender: "Female" },
];

const RecordTable: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2>Patient Information</h2>
      <input type="text" placeholder="Search here..." style={styles.search} />

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.centered}>No.</th>
            <th style={styles.centered}>Name</th>
            <th style={styles.centered}>Date of birth</th>
            <th style={styles.centered}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={styles.centered}>{index + 1}</td>
              <td style={styles.lefted}>{item.name}</td>
              <td style={styles.centered}>{item.dob}</td>
              <td style={styles.centered}>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordTable;
