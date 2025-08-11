'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Hearder() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-background fixed top-0 z-10 w-full items-center justify-between px-[24px] py-[16px] md:static md:flex md:justify-between md:p-0 lg:grid lg:grid-cols-3">
      <div className="lg:justify-start">
        <Link href="/" className="">
          <Image src="/icons/Logo_Lucas-03.svg" alt="Lucas_logo" width={70} height={65} />
        </Link>
      </div>

      {/* 데스크톱 네비게이션 */}
      <div className="hidden md:flex lg:justify-center">
        <nav className="flex min-w-0 flex-shrink-0 list-none gap-[41px] text-[14px]">
          <li className="whitespace-nowrap">Projets</li>
          <li className="whitespace-nowrap">Ma méthode</li>
          <li className="whitespace-nowrap">Offres</li>
          <li className="whitespace-nowrap">Qui suis-je ?</li>
          <li className="whitespace-nowrap">Contacnt</li>
        </nav>
      </div>

      {/* 데스크톱 클라이언트 섹션 */}
      <div className="hidden items-center gap-[11px] lg:flex lg:justify-end">
        <div className="flex items-center">
          {['client1.jpeg', 'client3.jpeg', 'client5.png'].map((img, idx) => (
            <Image
              key={img}
              src={`/images/homepage/desktop-tablet/clients/${img}`}
              alt={`client-${idx + 1}`}
              width={38}
              height={38}
              className={`rounded-full object-cover ${idx !== 0 ? '-ml-4' : ''} ${
                idx === 0 ? 'z-30' : idx === 1 ? 'z-20' : 'z-10'
              }`}
              priority
              unoptimized
            />
          ))}
        </div>
        <span>+100 clients accompagnés</span>
      </div>
      {/* 모바일 햄버거 버튼 */}
      <button
        onClick={toggleMenu}
        className="absolute top-0 right-0 z-30 px-[24px] py-[16px] md:hidden"
      >
        {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
      </button>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-0 right-0 bg-black/50 md:hidden">
          <div className="bg-background absolute top-0 right-0 h-full w-[60%] md:hidden">
            <nav className="flex list-none flex-col items-end py-4 pt-[70px] text-[24px]">
              <li className="px-4 py-3 hover:bg-gray-100">Projets</li>
              <li className="px-4 py-3 hover:bg-gray-100">Ma méthode</li>
              <li className="px-4 py-3 hover:bg-gray-100">Offres</li>
              <li className="px-4 py-3 hover:bg-gray-100">Qui suis-je ?</li>
              <li className="px-4 py-3 hover:bg-gray-100">Contact</li>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
