import { NextRequest, NextResponse } from 'next/server';

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

    // In production, you would send an email or store in a database.
    // Options:
    // 1. Use Resend (resend.com) - great for transactional emails
    // 2. Use SendGrid or Mailgun
    // 3. Store in a database (Supabase, PlanetScale, etc.)
    // 4. Send to a webhook (Slack, Discord, etc.)
    //
    // For now, log the submission and return success.
    console.log('Contact form submission:', {
      name,
      email,
      company: company || 'Not provided',
      budget: budget || 'Not specified',
      project,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: 'Thank you! Your message has been received. I\'ll get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or email directly.' },
      { status: 500 }
    );
  }
}
