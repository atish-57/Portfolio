import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Atish Ranjan <onboarding@resend.dev>',
      to: ['1214atish@gmail.com'],
      subject: `Contact from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 