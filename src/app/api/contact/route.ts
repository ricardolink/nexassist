import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
        <div style="background: #080d18; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <h1 style="color: #C9A962; margin: 0; font-size: 22px; letter-spacing: 2px;">NEW CONTACT MESSAGE</h1>
          <p style="color: #ffffff80; margin: 6px 0 0; font-size: 13px;">NexAssist · ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PST</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
          <tr style="background: #080d18;">
            <td colspan="2" style="padding: 14px 20px;">
              <span style="color: #C9A962; font-weight: bold; font-size: 14px; letter-spacing: 1px;">SENDER DETAILS</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; width: 30%; border-bottom: 1px solid #f0f0f0;">Name</td>
            <td style="padding: 14px 20px; color: #111; font-weight: bold; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${name}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Email</td>
            <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #C9A962;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Subject</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${subject || "—"}</td>
          </tr>

          <tr style="background: #080d18;">
            <td colspan="2" style="padding: 14px 20px;">
              <span style="color: #C9A962; font-weight: bold; font-size: 14px; letter-spacing: 1px;">MESSAGE</span>
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding: 20px; color: #111; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>

        <p style="margin-top: 24px; color: #aaa; font-size: 11px; text-align: center;">NexAssist · usenexassist.com</p>
      </div>
    `;

    await resend.emails.send({
      from: "NexAssist <onboarding@resend.dev>",
      to: "nexassist@yahoo.com",
      replyTo: email,
      subject: `Contact Form: ${subject || "New Message"} — ${name}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
