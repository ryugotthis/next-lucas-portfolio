import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // JSON 데이터 파싱
    const { lastName, firstName, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // 고객 이름 합치기
    const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Anonyme';

    // Postmark API 호출
    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': process.env.POSTMARK_API_TOKEN!, // 환경변수
      },
      body: JSON.stringify({
        From: 'no-reply@lucasprovost.com', // Postmark 인증된 도메인 이메일
        To: 'provostlucas.design@gmail.com', // Lucas 님 Gmail
        Subject: `📩 Nouveau message de ${fullName}`,
        TextBody: `Nom: ${lastName}\nPrénom: ${firstName}\nEmail: ${email}\n\nMessage:\n${message}`,
        ReplyTo: email, // 고객이 입력한 이메일 → Lucas 님이 Gmail에서 "Répondre" 누르면 고객에게 답장됨
        FromName: fullName, // Gmail에 표시되는 보낸 사람 이름
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Postmark error:', errorText);
      return NextResponse.json(
        { success: false, error: 'Postmark request failed' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
