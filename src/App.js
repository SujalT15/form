import React, { useState } from "react";
import "./style.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    propertyType: "",
    country: "",
    city: "",
    timeline: "",
    budget: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://xclusive.app.n8n.cloud/webhook-test/71501faf-1195-41b2-8ede-dce7978ee34d",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );
      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          propertyType: "",
          country: "",
          city: "",
          timeline: "",
          budget: ""
        });
      } else {
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Xclusive Interiors Pvt. Ltd.</h1>
      <p className="form-subtitle">
        Share your project details with us. We take on projects with a minimum budget of{" "}
        <b>₹25 Lakhs</b>.
      </p>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Property Type</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="">Select Property Type</option>
          <option value="2bhk">Luxurious 2BHK</option>
          <option value="3bhk">Luxurious 3BHK</option>
          <option value="penthouse">Penthouse</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial Space</option>
        </select>

        <label>Country</label>
        <input
          type="text"
          name="country"
          placeholder="Enter your country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter your city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Project Timeline</label>
        <select
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          required
        >
          <option value="">Select Timeline</option>
          <option value="immediate">Immediate</option>
          <option value="week">Within a Week</option>
          <option value="month">Within a Month</option>
          <option value="6months">6 Months</option>
        </select>

        <label>Budget</label>
        <input
          type="number"
          name="budget"
          placeholder="Minimum ₹25,00,000"
          min="2500000"
          value={formData.budget}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default App;
