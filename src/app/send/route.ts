import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { lastName, firstName, email, message } = await req.json();

    await sgMail.send({
      to: process.env.CONTACT_EMAIL!, // 네 Gmail
      from: process.env.SENDER_EMAIL!, // no-reply@lucasprovost.com
      subject: `📩 Nouveau message de ${firstName} ${lastName}`,
      text: `${message}\n\nDe: ${firstName} ${lastName} <${email}>`,
      replyTo: email, // 고객 이메일
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
