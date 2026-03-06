import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      serviceType,
      description,
      dateNeeded,
      city,
      budget,
      name,
      email,
      phone,
      countryDial,
      countryFlag,
      photoPreview, // base64 data URL
    } = body;

    const attachments: { filename: string; content: string }[] = [];

    if (photoPreview && photoPreview.startsWith("data:image/")) {
      const matches = photoPreview.match(/^data:(image\/\w+);base64,(.+)$/);
      if (matches) {
        const ext = matches[1].split("/")[1];
        attachments.push({
          filename: `client-photo.${ext}`,
          content: matches[2],
        });
      }
    }

    const phoneDisplay = phone ? `${countryFlag ?? ""} ${countryDial ?? ""} ${phone}` : "Not provided";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 8px;">
        <div style="background: #080d18; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
          <h1 style="color: #C9A962; margin: 0; font-size: 22px; letter-spacing: 2px;">NEW REQUEST</h1>
          <p style="color: #ffffff80; margin: 6px 0 0; font-size: 13px;">NexAssist · ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PST</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08);">
          <tr style="background: #080d18;">
            <td colspan="2" style="padding: 14px 20px;">
              <span style="color: #C9A962; font-weight: bold; font-size: 14px; letter-spacing: 1px;">SERVICE REQUESTED</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; width: 35%; border-bottom: 1px solid #f0f0f0;">Service Type</td>
            <td style="padding: 14px 20px; color: #111; font-weight: bold; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${serviceType ?? "—"}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Description</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${description ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Date Needed</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${dateNeeded ?? "Flexible"}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">City / Location</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${city ?? "—"}</td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Budget</td>
            <td style="padding: 14px 20px; color: #111; font-weight: bold; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${budget ?? "—"}</td>
          </tr>

          <tr style="background: #080d18;">
            <td colspan="2" style="padding: 14px 20px;">
              <span style="color: #C9A962; font-weight: bold; font-size: 14px; letter-spacing: 1px;">CLIENT INFO</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Name</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px; border-bottom: 1px solid #f0f0f0;">${name ?? "—"}</td>
          </tr>
          <tr style="background: #fafafa;">
            <td style="padding: 14px 20px; color: #555; font-size: 13px; border-bottom: 1px solid #f0f0f0;">Email</td>
            <td style="padding: 14px 20px; font-size: 14px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #C9A962;">${email ?? "—"}</a></td>
          </tr>
          <tr>
            <td style="padding: 14px 20px; color: #555; font-size: 13px;">Phone</td>
            <td style="padding: 14px 20px; color: #111; font-size: 14px;">${phoneDisplay}</td>
          </tr>
        </table>

        ${attachments.length > 0 ? `<p style="margin-top: 20px; color: #555; font-size: 13px;">📎 <strong>${attachments.length} photo</strong> attached below.</p>` : ""}

        <p style="margin-top: 24px; color: #aaa; font-size: 11px; text-align: center;">NexAssist · usenexassist.com</p>
      </div>
    `;

    await resend.emails.send({
      from: "NexAssist <onboarding@resend.dev>",
      to: "ricardolink@gmail.com",
      subject: `New Request: ${serviceType ?? "Service"} — ${name ?? "Client"}`,
      html: htmlBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Email notify error:", err);
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
