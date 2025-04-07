import React, { useState } from "react";
import styles from "./table";

const RecordTable: React.FC = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    gender: "",
    phone_number: "",
    email: "",
    address: "",
    insurance: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Patient registered successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>Patient Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Citizen ID</label>
        <input style={styles.field} type="text" name="id" placeholder="Ex: 012345999999" value={formData.id} onChange={handleChange} required />
        <label>Full name</label>
        <input style={styles.field} type="text" name="name" placeholder="Ex: Nguyen Van A" value={formData.name} onChange={handleChange} required />
        <label>Date of birth</label>
        <input style={styles.field} type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <label>Gender</label>
        <select style={styles.field} name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="" disabled>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <label>Phone number</label>
        <input style={styles.field} type="tel" name="phone_number" placeholder="Ex: 0123456789" value={formData.phone_number} onChange={handleChange} required />
        <label>Email</label>
        <input style={styles.field} type="email" name="email" placeholder="medibk.hcm@gmail.com" value={formData.email} onChange={handleChange} required />
        <label>Address</label>
        <input style={styles.field} type="text" name="address" placeholder="268 Ly Thuong Kiet, Ward 14, Dist 10, Ho Chi Minh City" value={formData.address} onChange={handleChange} required />
        <label>Insurance ID</label>
        <input style={styles.field} type="text" name="insurance" placeholder="Ex: 1234567890" value={formData.insurance} onChange={handleChange} required />
        <button style={styles.formButton} type="submit">Register</button>
      </form>
    </div>
  );
};

export default RecordTable;
