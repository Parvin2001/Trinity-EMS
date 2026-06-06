import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, phone, email, serviceType, message } = await req.json();

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "LifeCare EMS Contact Form <onboarding@resend.dev>",
      to: ["Tru@lifecareemsga.com"],
      replyTo: email,
      subject: `New Contact Form Submission — ${serviceType || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #5AB8E8; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 14px;">LifeCare EMS of Georgia</p>
          </div>
          <div style="background: #f9fafb; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Name</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; font-weight: 600;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Service Type</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px;">${serviceType || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #111827; font-size: 14px; line-height: 1.6;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 12px; background: #fef3c7; border: 1px solid #fbbf24; border-radius: 6px;">
              <p style="margin: 0; font-size: 12px; color: #92400e;">
                <strong>HIPAA Notice:</strong> This message was submitted through the general contact form. No protected health information (PHI) should have been included per the disclaimer shown on the form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Contact form error:", message);
    return NextResponse.json({ error: "Failed to send message.", detail: message }, { status: 500 });
  }
}
