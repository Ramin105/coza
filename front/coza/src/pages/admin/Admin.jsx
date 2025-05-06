import React, { useState } from "react";
import axios from "axios";
import styles from "./Admin.module.css";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/product", formData);
      alert("Məhsul əlavə olundu!");
      setFormData({ title: "", price: "", img: "" });
    } catch (error) {
      console.error("Xəta:", error);
      alert("Xəta baş verdi!");
    }
  };

  return (
    <div ><h2>Yeni məhsul əlavə et</h2>
     <div className={styles.adminContainer}> 
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={formData.img}
          onChange={handleChange}
          required
        />
        <button type="submit">Əlavə et</button>
      </form></div>
    </div>
  );
};

export default AdminPanel;
