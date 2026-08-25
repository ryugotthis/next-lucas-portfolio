// components/homepage/FitSection.tsx

import Image from 'next/image';

// 👇 여기 텍스트만 수정하면 리스트 내용이 바뀝니다.
const yesItems: string[] = [
  'Vous vous lancez ou voulez monter en gamme',
  'Vous voulez que vos développeurs puissent intégrer le branding sans vous solliciter à chaque étape',
  "Vous voulez un branding qui s'adapte à votre produit. Et pas le contraire.",
  "Vous cherchez un partenaire qui comprend les contraintes d'un produit digital",
];

const noItems: string[] = [
  'Vous cherchez juste un logo rapide et pas cher.',
  "Votre produit n'est pas encore validé et vous n'êtes pas prêt à investir dans la marque",
  'Vous cherchez un exécutant et pas un designer qui vous guide.',
  'Votre marque sera exclusivement print ou physique',
];

function CheckCircleIcon() {
  return (
    <span className="flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full bg-[#7061FF]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.3334 4L6.00008 11.3333L2.66675 8"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossCircleIcon() {
  return (
    <span className="flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full bg-[#E4E3F3]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L4 12M4 4L12 12"
          stroke="#A9A8C9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Fit() {
  return (
    <section
      aria-labelledby="fit-title"
      className="mt-[64px] flex flex-col items-center px-[24px] md:mt-[76px] md:px-0 lg:mt-[138px]"
    >
      <h2
        id="fit-title"
        className="bold w-[300px] text-center text-[20px] leading-[24px] md:w-[420px] md:text-[24px] md:leading-[28px] lg:w-[560px] lg:text-[40px] lg:leading-[44px]"
      >
        Mon offre est-elle
        <br />
        faite pour vous ?
      </h2>

      <div className="mt-[32px] grid w-full max-w-[900px] grid-cols-1 gap-y-[36px] md:mt-[48px] md:grid-cols-[1fr_1px_1fr] md:gap-x-[40px] lg:mt-[56px] lg:gap-x-[56px]">
        {/* Left — Yes list */}
        <div className="flex flex-col gap-y-[20px]">
          {yesItems.map((item) => (
            <div key={item} className="flex items-start gap-[12px]">
              <Image src="/icons/Yes.svg" alt="Check" width={36} height={36} />
              <p className="bold pt-[4px] text-[14px] leading-[20px] md:text-[15px] md:leading-[21px] lg:text-[16px] lg:leading-[22px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Divider — 모바일에서는 숨김 */}
        <div className="hidden bg-[#D9D9F0] md:block" />

        {/* Right — No list */}
        <div className="flex flex-col gap-y-[20px]">
          {noItems.map((item) => (
            <div key={item} className="flex items-start gap-[12px]">
              <Image src="/icons/No.svg" alt="Cross" width={36} height={36} />
              <p className="pt-[4px] text-[14px] leading-[20px] text-[#9B9BAF] md:text-[15px] md:leading-[21px] lg:text-[16px] lg:leading-[22px]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
