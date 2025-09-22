'use client';
import { useState } from 'react';

export default function Email() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      lastName: String(fd.get('lastName') || '').trim(),
      firstName: String(fd.get('firstName') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      message: String(fd.get('message') || '').trim(),
    };

    // 간단 검증
    if (!payload.email || !payload.message) {
      setLoading(false);
      setMsg('Merci d’indiquer votre adresse e-mail et un message.');
      return;
    }

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      setMsg(
        data.success
          ? '✅ Votre message a été envoyé avec succès.'
          : '❌ Une erreur est survenue, veuillez réessayer.'
      );
      if (data.success) e.currentTarget.reset();
    } catch {
      setMsg('❌ Erreur réseau, veuillez vérifier votre connexion.');
    } finally {
      setLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="text-text-eamil mx-auto h-full w-full max-w-xl rounded-[5px] bg-transparent"
    >
      {/* 1행: Nom / Prénom */}
      <div className="flex h-[10%] flex-col gap-3 md:flex-row md:justify-between">
        <div className="relative w-full">
          <label htmlFor="lastName" className="sr-only">
            Nom
          </label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Nom"
            className="bg-bgCard h-full w-full rounded-md border-0 px-4 text-[15px] placeholder-[#BEC5F5] ring-0 outline-none focus:ring-2 focus:ring-[#6c63ff]/40 focus:outline-none"
          />
        </div>
        <div className="relative w-full">
          <label htmlFor="firstName" className="sr-only">
            Prénom
          </label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Prénom"
            className="bg-bgCard h-full w-full rounded-md border-0 px-4 text-[15px] placeholder-[#BEC5F5] ring-0 outline-none focus:ring-2 focus:ring-[#6c63ff]/40 focus:outline-none"
          />
        </div>
      </div>

      {/* 2행: Email */}
      <div className="mt-11 h-[10%]">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="bg-bgCard h-full w-full rounded-md border-0 px-4 text-[15px] placeholder-[#BEC5F5] outline-none focus:ring-2 focus:ring-[#6c63ff]/40"
        />
      </div>

      {/* 3행: Message (큰 영역) */}
      <div className="mt-3 h-[60%]">
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          className="bg-bgCard h-full w-full resize-none rounded-md border-0 p-4 text-[15px] placeholder-[#BEC5F5] outline-none focus:ring-2 focus:ring-[#6c63ff]/40"
        />
      </div>

      {/* 4행: 버튼 (가득, 보라색) */}
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-bgCard bold mt-4 h-[15%] w-full rounded-[5px] text-[12px] transition hover:bg-[#4e46ff] active:translate-y-[1px] md:h-[10%] lg:text-[16px]"
      >
        {loading ? 'Envoi...' : 'Envoyer'}
      </button>
      {msg && <p className="mt-2 text-sm">{msg}</p>}
    </form>
  );
}
