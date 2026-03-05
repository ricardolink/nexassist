import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name, company } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — welcome email skipped");
    return NextResponse.json({ skipped: true, reason: "No API key configured" });
  }

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #080d18; font-family: Georgia, 'Times New Roman', serif; color: #ffffff; }
    .wrapper { max-width: 560px; margin: 0 auto; padding: 40px 20px; }
    .logo-row { text-align: center; padding-bottom: 32px; border-bottom: 1px solid rgba(201,169,98,0.15); margin-bottom: 40px; }
    .logo-text { font-size: 22px; letter-spacing: 0.25em; text-transform: uppercase; color: #ffffff; }
    .logo-text span { color: #C9A962; }
    .logo-sub { font-family: Arial, sans-serif; font-size: 8px; letter-spacing: 0.5em; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-top: 4px; }
    .badge { display: inline-block; background: rgba(201,169,98,0.1); border: 1px solid rgba(201,169,98,0.3); color: #C9A962; font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase; padding: 5px 14px; border-radius: 2px; margin-bottom: 24px; }
    h1 { font-size: 32px; font-weight: normal; color: #ffffff; line-height: 1.2; margin-bottom: 16px; }
    .intro { font-family: Arial, sans-serif; font-size: 15px; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 32px; }
    .intro strong { color: rgba(255,255,255,0.75); }
    .steps-box { background: #0c1222; border: 1px solid rgba(201,169,98,0.15); border-radius: 2px; padding: 28px; margin-bottom: 32px; }
    .steps-title { font-family: Arial, sans-serif; font-size: 9px; letter-spacing: 0.35em; text-transform: uppercase; color: rgba(255,255,255,0.2); margin-bottom: 18px; }
    .step { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
    .step:last-child { margin-bottom: 0; }
    .step-num { width: 24px; height: 24px; border-radius: 50%; background: rgba(201,169,98,0.1); border: 1px solid rgba(201,169,98,0.25); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .step-num span { font-family: Arial, sans-serif; font-size: 9px; color: #C9A962; font-weight: bold; }
    .step-label { font-family: Arial, sans-serif; font-size: 13px; color: rgba(255,255,255,0.7); font-weight: 600; margin-bottom: 2px; }
    .step-desc { font-family: Arial, sans-serif; font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.5; }
    .cta-wrapper { text-align: center; margin-bottom: 36px; }
    .cta { display: inline-block; background: linear-gradient(135deg, #C9A962, #e2c98a); color: #080d18; font-family: Arial, sans-serif; font-size: 11px; font-weight: bold; letter-spacing: 0.18em; text-transform: uppercase; padding: 16px 36px; border-radius: 2px; text-decoration: none; }
    .url-note { font-family: Arial, sans-serif; font-size: 11px; color: rgba(255,255,255,0.2); text-align: center; margin-top: 10px; }
    .url-note a { color: rgba(201,169,98,0.5); text-decoration: none; }
    .divider { height: 1px; background: linear-gradient(to right, transparent, rgba(201,169,98,0.2), transparent); margin: 32px 0; }
    .support { font-family: Arial, sans-serif; font-size: 13px; color: rgba(255,255,255,0.25); text-align: center; line-height: 1.7; }
    .support a { color: rgba(201,169,98,0.55); text-decoration: none; }
    .footer { text-align: center; padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.05); margin-top: 32px; }
    .footer p { font-family: Arial, sans-serif; font-size: 11px; color: rgba(255,255,255,0.15); line-height: 1.7; }
  </style>
</head>
<body>
  <div class="wrapper">
    <!-- Logo -->
    <div class="logo-row">
      <div class="logo-text">Nex<span>Assist</span></div>
      <div class="logo-sub">Personal Concierge</div>
    </div>

    <!-- Badge -->
    <div style="text-align:center">
      <div class="badge">Partner Approved</div>
    </div>

    <!-- Headline -->
    <h1>Welcome to the<br />NexAssist network.</h1>

    <p class="intro">
      Hi ${name || "there"},<br /><br />
      Your application for <strong>${company || "your company"}</strong> has been reviewed and approved. You now have access to the partner portal where you can see live client requests and send your offers directly.
    </p>

    <!-- Steps -->
    <div class="steps-box">
      <div class="steps-title">How to get started</div>
      <div class="step">
        <div class="step-num"><span>1</span></div>
        <div>
          <div class="step-label">Sign in to your partner account</div>
          <div class="step-desc">Go to the partner portal and enter this email address to receive your login code.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num"><span>2</span></div>
        <div>
          <div class="step-label">Browse client requests</div>
          <div class="step-desc">See real-time requests from high-net-worth clients looking for services in your category.</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num"><span>3</span></div>
        <div>
          <div class="step-label">Send your offer</div>
          <div class="step-desc">Respond to requests with your quote, photos, and what's included. The client will see your offer instantly.</div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="cta-wrapper">
      <a href="https://nexassist.vercel.app/partners/login" class="cta">Access Partner Portal →</a>
      <div class="url-note">
        Or visit: <a href="https://nexassist.vercel.app/partners/login">nexassist.vercel.app/partners/login</a>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Support -->
    <div class="support">
      <p>
        Questions? We're here to help.<br />
        <a href="mailto:info@usenextassist.com">info@usenextassist.com</a>
      </p>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p>
        NexAssist — Personal Concierge<br />
        You're receiving this because your partner application was approved.<br />
        <a href="mailto:info@usenextassist.com" style="color:rgba(201,169,98,0.3)">info@usenextassist.com</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "NexAssist <info@usenextassist.com>",
        to: [email],
        reply_to: "info@usenextassist.com",
        subject: "You're approved — Welcome to NexAssist",
        html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
