import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, project, budget } = body;

    // Validate required fields
    if (!name || !email || !project) {
      return NextResponse.json(
        { error: 'Name, email, and project description are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Send notification email to you
    await resend.emails.send({
      from: 'MDK Engineering <contact@mdkengineering.com>',
      to: 'kueck.marcel@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company || 'Not provided'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Budget</td><td style="padding:8px;border-bottom:1px solid #eee;">${budget || 'Not specified'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Project</td><td style="padding:8px;">${project}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666;font-size:13px;">Sent from mdkengineering.com contact form</p>
      `,
    });

    return NextResponse.json(
      { message: 'Thank you! Your message has been received. We\'ll get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
