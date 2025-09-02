// src/submit.js
export const submitToWebhook = async (formData) => {
  try {
    const response = await fetch(
      "https://xclusive.app.n8n.cloud/webhook-test/71501faf-1195-41b2-8ede-dce7978ee34d",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }

    const result = await response.json().catch(() => ({})); // in case webhook doesn’t return JSON
    return result;
  } catch (error) {
    console.error("Error submitting to webhook:", error);
    throw error;
  }
};
