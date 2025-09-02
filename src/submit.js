// src/submit.js

export async function submitForm(data) {
  try {
    const response = await fetch(
      "https://xclusive.app.n8n.cloud/webhook-test/71501faf-1195-41b2-8ede-dce7978ee34d",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json().catch(() => ({})); // fallback if no JSON response
    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: error.message };
  }
}
