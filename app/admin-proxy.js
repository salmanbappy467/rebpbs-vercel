export default async function handler(req, res) {
  const ADMIN_API = 'https://pbsnet-admin.salmanbappy467.workers.dev';
  const ADMIN_SECRET = process.env.ADMIN_SECRET;

  const { endpoint, payload, method } = req.body;

  try {
    const response = await fetch(`${ADMIN_API}${endpoint}`, {
      method: method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': ADMIN_SECRET
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy connection failed" });
  }
}