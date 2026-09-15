import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { fullName, email, company, endpoints, interest } = data;

    const recipient = 'techsolveenginellp@gmail.com';

    console.log('====================================================');
    console.log(`[LEAD RECEIVED FOR ${recipient}]`);
    console.log(`Name:        ${fullName}`);
    console.log(`Email:       ${email}`);
    console.log(`Company:     ${company || 'Not provided'}`);
    console.log(`Endpoints:   ${endpoints || 'Not selected'}`);
    console.log(`Interest:    ${interest || 'General'}`);
    console.log('====================================================');

    const gmailUser = process.env.GMAIL_USER || 'techsolveenginellp@gmail.com';
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!gmailPass) {
      console.warn('⚠️ GMAIL_APP_PASSWORD is not set in .env.local yet.');
      return NextResponse.json({
        success: true,
        warning: 'GMAIL_APP_PASSWORD not set in .env.local, lead logged to server console.',
      });
    }

    // Configure Nodemailer Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const mailOptions = {
      from: `"SkieSecure Notification" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Early Access Request: ${fullName} (${company || email})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF; color: #1E293B;">
          
          <!-- Header Bar -->
          <div style="border-bottom: 2px solid #1A44F5; padding-bottom: 20px; margin-bottom: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle;">
                  <span style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #0F172A;">
                    Skie<span style="color: #1A44F5;">Secure</span>
                  </span>
                </td>
                <td style="text-align: right; vertical-align: middle;">
                  <span style="display: inline-block; background-color: #E5EEFF; border: 1px solid #DBEAFE; color: #1A44F5; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px;">
                    Early Access Lead
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #0F172A; letter-spacing: -0.3px;">
            New Early Access Submission
          </h1>
          <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B; line-height: 1.5;">
            A visitor has submitted their details to request priority access to the SkieSecure platform.
          </p>

          <!-- Lead Details Table -->
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; width: 140px; font-weight: 500;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Work Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #1A44F5; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #1A44F5; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${company || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Environment</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${endpoints || 'Not selected'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Plan Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #1A44F5; font-weight: 600;">${interest || 'General'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: 500;">Received At</td>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</td>
              </tr>
            </table>
          </div>

          <!-- Quick Action Button -->
          <div style="text-align: center; margin-bottom: 24px;">
            <a href="mailto:${email}?subject=Welcome%20to%20SkieSecure%20Early%20Access" style="display: inline-block; background-color: #1A44F5; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none; padding: 10px 24px; border-radius: 6px;">
              Reply to ${fullName}
            </a>
          </div>

          <!-- Footer -->
          <div style="border-top: 1px solid #E2E8F0; padding-top: 16px; text-align: center; color: #94A3B8; font-size: 12px; line-height: 1.5;">
            This automated alert was dispatched by the SkieSecure web portal.<br />
            Recipient: <a href="mailto:${recipient}" style="color: #64748B; text-decoration: none;">${recipient}</a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email successfully sent to ${recipient}`);

    return NextResponse.json({
      success: true,
      message: `Real email successfully delivered to ${recipient}`,
    });
  } catch (error) {
    console.error('❌ Error sending email via Gmail SMTP:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
