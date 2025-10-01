// import { NextResponse } from 'next/server';
// import postmark from 'postmark';

// export async function POST(req: Request) {
//   try {
//     const { lastName, firstName, email, message } = await req.json();
//     const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Anonyme';

//     const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN!);

//     await client.sendEmail({
//       From: 'no-reply@lucasprovost.com',
//       To: 'provostlucas.design@gmail.com',
//       Subject: `📩 Nouveau message de ${fullName}`,
//       TextBody: `Nom: ${lastName}\nPrénom: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
//       ReplyTo: email,
//     });

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error('Postmark error:', err);
//     return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
//   }
// }

import { ServerClient } from 'postmark';

export async function POST(req: Request) {
  try {
    const { lastName, firstName, email, message } = await req.json();
    const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Anonyme';

    const client = new ServerClient(process.env.POSTMARK_API_TOKEN!);

    await client.sendEmail({
      From: 'no-reply@lucasprovost.com', // Postmark에서 인증된 도메인 사용
      To: 'provostlucas.design@gmail.com',
      Subject: `📩 Nouveau message de ${fullName}`,
      TextBody: `Nom: ${lastName}\nPrénom: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
      ReplyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Postmark error:', err);
    return new Response(JSON.stringify({ success: false, error: (err as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
