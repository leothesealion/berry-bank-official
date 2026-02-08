import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      // Log for development, but still return success for demo
      console.log('Newsletter signup (Resend not configured):', email);
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to the newsletter!',
      });
    }

    // Send welcome email using Resend
    await resend!.emails.send({
      from: 'Berry Bank <noreply@berrybank.app>',
      to: email,
      subject: 'Welcome to Berry Bank! 🌱',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #0B0B0B; font-family: system-ui, -apple-system, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <div style="text-align: center; margin-bottom: 40px;">
                <div style="display: inline-block; width: 60px; height: 60px; background-color: #9E1916; border-radius: 50%; line-height: 60px; font-size: 24px;">
                  🌱
                </div>
                <h1 style="color: #FAFAFA; font-size: 28px; margin-top: 20px; margin-bottom: 10px;">
                  Welcome to Berry Bank!
                </h1>
                <p style="color: #FAFAFA; opacity: 0.7; font-size: 16px; margin: 0;">
                  Latin America's First Green Digital Bank
                </p>
              </div>
              
              <div style="background-color: rgba(255,255,255,0.05); border-radius: 16px; padding: 30px; margin-bottom: 30px;">
                <p style="color: #FAFAFA; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                  Thank you for joining the green banking movement! You're now on our waitlist and will be among the first to know when we launch.
                </p>
                <p style="color: #FAFAFA; font-size: 16px; line-height: 1.6; margin: 0;">
                  Did you know? <span style="color: #16A075; font-weight: bold;">Switching to a green bank reduces your carbon footprint by 52.2%.</span>
                </p>
              </div>
              
              <div style="text-align: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="color: #FAFAFA; opacity: 0.4; font-size: 12px; margin: 0;">
                  © ${new Date().getFullYear()} Berry Fintech, Inc. | Austin, TX
                </p>
                <p style="color: #FAFAFA; opacity: 0.4; font-size: 12px; margin: 10px 0 0 0;">
                  <a href="https://berrybank.app/privacy" style="color: #9E1916; text-decoration: none;">Privacy Policy</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Add to audience/contact list (optional - requires Resend Audiences feature)
    try {
      await resend!.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID || '',
      });
    } catch (audienceError) {
      // Audience might not be set up, continue anyway
      console.log('Could not add to audience:', audienceError);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the newsletter!',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
