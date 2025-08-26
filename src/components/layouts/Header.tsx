'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 모바일 메뉴 항목 클릭 시: 스크롤 + 메뉴 닫기
  const handleMenuItemClick = (id: string) => {
    handleScroll(id);
    setIsMenuOpen(false);
  };
  return (
    <div className="bg-background fixed top-0 z-10 w-full items-center justify-between py-[16px] md:static md:flex md:justify-between md:p-0 lg:grid lg:grid-cols-3">
      <div className="lg:justify-start">
        <Link
          href="/"
          className="block h-[44.8px] w-[45px] md:h-[54.8px] md:w-[52px] lg:h-[65.22px] lg:w-[70px]"
        >
          <Image src="/icons/Logo_Lucas-03.svg" alt="Lucas_logo" width={70} height={65} />
        </Link>
      </div>

      {/* 데스크톱 네비게이션 */}
      <div className="z-30 hidden md:flex lg:justify-center">
        <nav className="flex min-w-0 flex-shrink-0 list-none gap-[41px] text-[14px]">
          <li className="whitespace-nowrap">
            <Link href="/#project">Projets</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/#process">Ma méthode</Link>
          </li>

          <li className="whitespace-nowrap">
            <Link href="/#offer">Offres</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/qui-suis-je">Qui suis-je ?</Link>
          </li>
          <li className="whitespace-nowrap">
            <Link href="/#contact">Contact</Link>
          </li>
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
              <li className="px-4 py-3 hover:bg-gray-100">
                {' '}
                <Link href="/#project" onClick={() => setIsMenuOpen(false)}>
                  Projets
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100">
                <Link href="/#process" onClick={() => setIsMenuOpen(false)}>
                  Ma méthode
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100">
                <Link href="/#offer" onClick={() => setIsMenuOpen(false)}>
                  Offres
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100">
                <Link href="/qui-suis-je" onClick={() => setIsMenuOpen(false)}>
                  Qui suis-je ?
                </Link>
              </li>
              <li className="px-4 py-3 hover:bg-gray-100">
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
