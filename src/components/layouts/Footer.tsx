'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative pb-[12px] md:pb-[24px] lg:pb-[48px]">
      <div className="flex h-[302px] flex-col items-center justify-center gap-[32px] md:h-[256px] md:w-[75%] md:flex-row md:items-end md:justify-between md:gap-0">
        <Link href="/" className="">
          <Image src="/icons/Logo_Lucas-03.svg" alt="Lucas_logo" width={70} height={65} />
        </Link>
        <div className="bold flex h-[30%] w-full justify-between text-[11px] md:w-[60%] md:justify-between md:text-[12px] lg:text-[16px]">
          <ul className="flex flex-col items-start justify-between md:items-center">
            <li className="">
              <button className="cursor-pointer" onClick={() => handleScroll('project')}>
                Projets
              </button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('process')}>
                Ma méthode
              </button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('offer')}>
                Offres
              </button>
            </li>
          </ul>
          <ul className="flex flex-col items-center justify-between">
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('contact')}>
                Qui suis-je ?
              </button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('contact')}>
                Contact
              </button>
            </li>
            <li>
              <Link href="/">Prendre RDV</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-end justify-between md:items-center">
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('project')}>
                Mentions Légales
              </button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('project')}>
                CGPS
              </button>
            </li>
            <li>
              <button className="cursor-pointer" onClick={() => handleScroll('project')}>
                Politique de Confidentialité
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="absolute right-[-162px] bottom-0 hidden h-[490px] w-[491px] overflow-y-hidden lg:block">
        <div className="relative bottom-[-109px] h-[490px] w-[491px]">
          <Image src="/illustrations/Meditation_Illu.png" alt="meditation illustration" fill />
        </div>
      </div>
    </div>
  );
}
