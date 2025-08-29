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

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookUrl =
      "https://xclusive.app.n8n.cloud/webhook-test/7d248bda-2e85-4153-a4df-34d819b4ebc7";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("Thank you! Your enquiry has been submitted successfully.");

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        country: "",
        city: "",
        timeline: "",
        budget: ""
      });

      // Hide message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Xclusive Interiors Pvt. Ltd.</h1>
      <p className="form-subtitle">
        Share your project details with us. We take on projects with a minimum
        budget of <b>₹25 Lakhs</b>.
      </p>

      {successMessage && (
        <div className="success-message">{successMessage}</div>
      )}

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
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
          value={formData.country}
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
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
          value={formData.budget}
          min="2500000"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default App;
