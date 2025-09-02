export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch(
        "https://xclusive.app.n8n.cloud/webhook-test/a7c3ea56-c173-4d1c-97d1-449998ea63e5",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req.body),
        }
      );

      const data = await response.json().catch(() => ({}));

      res.status(200).json({ success: true, data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: "Failed to send webhook" });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed" });
  }
}
