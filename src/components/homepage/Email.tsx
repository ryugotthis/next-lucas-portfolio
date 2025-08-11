'use client';

export default function Email() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: submit
      }}
      className="mx-auto h-full w-full max-w-xl rounded-[5px] bg-transparent"
    >
      {/* 1행: Nom / Prénom */}
      <div className="grid h-[10%] grid-cols-1 gap-3 md:grid-cols-2">
        <div className="relative">
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
        <div className="relative">
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
      <div className="mt-3 h-[10%]">
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
        className="bg-primary text-bgCard bold mt-4 h-[15%] w-full rounded-[5px] text-[12px] transition hover:bg-[#4e46ff] active:translate-y-[1px] md:h-[10%] lg:text-[16px]"
      >
        Envoyer
      </button>
    </form>
  );
}
