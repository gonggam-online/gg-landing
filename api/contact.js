export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, phone, product, message } = req.body || {};
  if (!name || !phone) {
    res.status(400).json({ error: "이름과 연락처는 필수입니다." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "onboarding@resend.dev";
  const to = process.env.RESEND_TO || "gonggamcomms@gmail.com";

  if (!apiKey) {
    res.status(500).json({ error: "RESEND_API_KEY가 설정되지 않았습니다." });
    return;
  }

  const emailText = [
    `[공감모바일 상담신청] ${name}`,
    "",
    `이름: ${name}`,
    `연락처: ${phone}`,
    `원하는 모델/상품: ${product || "미입력"}`,
    "",
    "문의 내용:",
    message || "미입력",
    "",
    `접수 시각: ${new Date().toLocaleString("ko-KR")}`
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[공감모바일 상담신청] ${name}`,
        text: emailText
      })
    });

    const data = await response.json();
    if (!response.ok) {
      res.status(response.status).json({ error: data?.message || "메일 전송 실패" });
      return;
    }

    res.status(200).json({ ok: true, id: data.id });
  } catch (error) {
    res.status(500).json({ error: error?.message || "메일 전송 중 오류가 발생했습니다." });
  }
}
