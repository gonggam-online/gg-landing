function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

function buildResendErrorMessage(status, data) {
  const message = data?.message || data?.error || "Resend 전송에 실패했습니다.";

  if (status === 403) {
    return "Resend 도메인 인증 또는 발신 주소 설정을 확인해주세요. RESEND_FROM_EMAIL은 인증된 도메인 주소여야 합니다.";
  }

  if (status === 429) {
    return "이메일 전송 요청이 잠시 많습니다. 잠시 후 다시 시도해주세요.";
  }

  return message;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = getBody(req);
  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const product = String(body.product || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !phone) {
    return res.status(400).json({ error: "이름과 연락처는 필수입니다." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "gonggamcomms@gmail.com";
  const from = process.env.RESEND_FROM_EMAIL || "공감모바일 <contact@mail.gonggammobile.com>";
  const replyTo = process.env.RESEND_REPLY_TO || to;

  if (!apiKey) {
    return res.status(500).json({ error: "Vercel 환경변수 RESEND_API_KEY가 설정되지 않았습니다." });
  }

  const submittedAt = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  const subject = `[공감모바일 상담신청] ${name}`;

  const text = [
    "공감모바일 상담 신청",
    "",
    `이름: ${name}`,
    `연락처: ${phone}`,
    `원하는 모델/상품: ${product || "미입력"}`,
    "",
    "문의 내용:",
    message || "미입력",
    "",
    `접수 시각: ${submittedAt}`,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, 'Noto Sans KR', sans-serif; line-height:1.7; color:#171717;">
      <h2 style="margin:0 0 16px;">공감모바일 상담 신청</h2>
      <table style="border-collapse:collapse; width:100%; max-width:640px;">
        <tr><td style="padding:8px 0; width:140px;"><strong>이름</strong></td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>연락처</strong></td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding:8px 0;"><strong>원하는 모델/상품</strong></td><td>${escapeHtml(product || "미입력")}</td></tr>
        <tr><td style="padding:8px 0;"><strong>문의 내용</strong></td><td>${escapeHtml(message || "미입력").replace(/\n/g, "<br />")}</td></tr>
        <tr><td style="padding:8px 0;"><strong>접수 시각</strong></td><td>${escapeHtml(submittedAt)}</td></tr>
      </table>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        text,
        reply_to: replyTo,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return res.status(response.status).json({
        error: buildResendErrorMessage(response.status, data),
        details: data || null,
      });
    }

    return res.status(200).json({
      ok: true,
      id: data?.id || null,
      to,
    });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "서버 오류가 발생했습니다.",
    });
  }
}
