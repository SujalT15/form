const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const webhookUrl = "https://sujalt.app.n8n.cloud/webhook-test/dc14ae43-a235-4354-878e-059fda4596dd";

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json().catch(() => null);
      alert(
        result?.message ||
        "Enquiry submitted successfully! Please check your email (including spam)."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        propertyType: "",
        country: "",
        city: "",
        timeline: "",
        budget: "",
      });
    } else {
      const errorText = await response.text().catch(() => "");
      alert(`Submission failed${errorText ? ": " + errorText : ""}`);
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};
