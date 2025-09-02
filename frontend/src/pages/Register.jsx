import React, { useState } from "react";
import axios from "../axiosConfig";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/employer/register", formData);
      alert(res.data.message || "Registration submitted, wait for approval");
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Employer Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
          required
        /><br/><br/>
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={handleChange}
          required
        /><br/><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
