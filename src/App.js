// src/App.js
import React, { useState } from "react";
import { submitForm } from "./submit";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    const result = await submitForm(formData);

    if (result.error) {
      setStatus("Error: " + result.error);
    } else {
      setStatus("Form submitted successfully!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submit Form to n8n</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default App;
