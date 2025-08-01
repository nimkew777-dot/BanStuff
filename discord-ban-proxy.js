export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { playerId, reason, duration } = req.body || {};

  if (!playerId || !reason || !duration) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const webhookUrl = "https://discord.com/api/webhooks/1400324781596741784/WpFo_qIKifkEUGyZ6KI4jN1pqrPBd4LDTL59hnGPt34wB_yW2QQu4SPD_pVdOsgtM7uF";

  const payload = {
    content: `🚫 **Player Banned**\n**ID:** \`${playerId}\`\n**Reason:** ${reason}\n**Duration:** ${duration} hour(s)`
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  res.status(200).json({ success: true });
}
