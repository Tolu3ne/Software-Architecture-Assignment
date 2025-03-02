import React from "react";

const data = [
  { name: "Andrew Richardson", mob: "955 123-4567", date: "09/03/2023", doctor: "Dr. Jennifer Roberts", department: "Pediatrics" },
  { name: "Benjamin Thompson", mob: "953 987-6543", date: "08/03/2023", doctor: "Dr. Michael Sullivan", department: "Cardiology" },
  { name: "Charlotte Ramirez", mob: "959 765-4321", date: "10/03/2023", doctor: "Dr. Emily Harris", department: "Gynecology" },
];

const RecordTable: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2>Registeration Form</h2>
      <input type="text" placeholder="Search here..." style={styles.search} />

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>MOB</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.mob}</td>
              <td>{item.date}</td>
              <td>{item.doctor}</td>
              <td>{item.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  search: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
  },
  tableHeader: {
    backgroundColor: "#f2f2f2",
  },
};

export default RecordTable;
