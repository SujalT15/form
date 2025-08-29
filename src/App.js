import React from "react";
import "./style.css";

function App() {
  return (
    <div className="form-container">
      <h1 className="form-title">Xclusive Interiors Pvt. Ltd.</h1>
      <p className="form-subtitle">
        Share your project details with us. We take on projects with a minimum budget of <b>₹25 Lakhs</b>.
      </p>

      <form className="enquiry-form">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Property Type</label>
        <select required>
          <option value="">Select Property Type</option>
          <option value="2bhk">Luxurious 2BHK</option>
          <option value="3bhk">Luxurious 3BHK</option>
          <option value="penthouse">Penthouse</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial Space</option>
        </select>

        <label>Country</label>
        <input type="text" placeholder="Enter your country" required />

        <label>City</label>
        <input type="text" placeholder="Enter your city" required />

        <label>Project Timeline</label>
        <select required>
          <option value="">Select Timeline</option>
          <option value="immediate">Immediate</option>
          <option value="week">Within a Week</option>
          <option value="month">Within a Month</option>
          <option value="6months">6 Months</option>
        </select>

        <label>Budget</label>
        <input type="number" placeholder="Minimum ₹25,00,000" min="2500000" required />

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default App;

//C:\Users\DELL.USER9\interior-form\src\index.js