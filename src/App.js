const handleSubmit = async (e) => {
  e.preventDefault();
  try {

    const webhookUrl =
      "https://sujalt.app.n8n.cloud/webhook-test/2f2f7d1f-0b93-4199-bc27-0c8ed259b34f";

   

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(
        "Enquiry submitted successfully! Kindly check your email, especially the spam folder."
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
      alert("Submission failed, please try again.");
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};
