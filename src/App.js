import React, { useState } from "react";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    country: "",
    city: "",
    timeline: "",
    budget: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace with your n8n webhook URL
    const webhookUrl = "https://your-n8n-instance/webhook/form-submit";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Xclusive Interiors Pvt. Ltd.</h1>
      <p className="form-subtitle">
        Share your project details with us. We take on projects with a minimum budget of <b>₹25 Lakhs</b>.
      </p>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email Address</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Phone Number</label>
        <input type="tel" name="phone" onChange={handleChange} required />

        <label>Property Type</label>
        <select name="propertyType" onChange={handleChange} required>
          <option value="">Select Property Type</option>
          <option value="2bhk">Luxurious 2BHK</option>
          <option value="3bhk">Luxurious 3BHK</option>
          <option value="penthouse">Penthouse</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial Space</option>
        </select>

        <label>Country</label>
        <input type="text" name="country" onChange={handleChange} required />

        <label>City</label>
        <input type="text" name="city" onChange={handleChange} required />

        <label>Project Timeline</label>
        <select name="timeline" onChange={handleChange} required>
          <option value="">Select Timeline</option>
          <option value="immediate">Immediate</option>
          <option value="week">Within a Week</option>
          <option value="month">Within a Month</option>
          <option value="6months">6 Months</option>
        </select>

        <label>Budget</label>
        <input type="number" name="budget" min="2500000" onChange={handleChange} required />

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default App;
