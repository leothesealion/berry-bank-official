import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // 1. Validate Email exists
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // 2. Validate Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // 3. Check configuration
    if (!process.env.RESEND_API_KEY) {
      console.log('Newsletter signup (Resend not configured):', email);
      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed (Demo Mode)',
      });
    }

    // 4. Add to Resend Contacts (Step 4 FIXED)
    // We removed 'audienceId' so this now goes to your Global Contacts
    try {
      const { data, error } = await resend!.contacts.create({
        email: email,
        firstName: '', // Optional
        unsubscribed: false,
      });

      if (error) {
        console.error('Resend Contact Error:', error);
      } else {
        console.log('Resend Contact Success:', data);
      }
    } catch (contactError) {
      // Don't block the welcome email if contact storage fails
      console.error('Could not add to contacts:', contactError);
    }

    // 5. Send Welcome Email
    await resend!.emails.send({
      from: 'Berry Bank <noreply@berrybank.app>',
      to: email,
      subject: 'Welcome to Berry Bank! 🌱',
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin: 0; padding: 0; background-color: #0B0B0B; font-family: sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #FAFAFA; text-align: center;">Welcome to Berry Bank! 🌱</h1>
              <p style="color: #FAFAFA; text-align: center;">You are now on the waitlist.</p>
            </div>
          </body>
        </html>
      `,
    });

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