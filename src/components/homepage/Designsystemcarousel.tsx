'use client';

// components/homepage/DesignSystemCarousel.tsx

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type DesignSystemSlide = {
  image: string;
  title: string;
  description: string;
};

// 👇 여기 이미지 경로와 텍스트만 수정하면 슬라이드 내용이 바뀝니다.
const designSystemSlides: DesignSystemSlide[] = [
  {
    image: '/images/homepage/design-system/visual01.jpg',
    title: 'Logo Suite',
    description:
      'Toutes les versions de votre logo, avec les règles pour savoir laquelle utiliser, sur quel fond et à quelle taille.',
  },
  {
    image: '/images/homepage/design-system/visual02.jpg',
    title: 'Couleurs',
    description:
      'Votre palette, avec le rôle de chaque couleur et les bonnes proportions pour garder une marque cohérente partout.',
  },
  {
    image: '/images/homepage/design-system/visual03.jpg',
    title: 'Typographies',
    description:
      'Vos polices et leur hiérarchie, du grand titre au petit texte, avec des exemples pour savoir quoi utiliser où.',
  },
  {
    image: '/images/homepage/design-system/visual04.jpg',
    title: 'Illustrations',
    description:
      "Une patte graphique qui rend votre marque reconnaissable, avec des règles simples pour l'utiliser sur chaque support.",
  },
  {
    image: '/images/homepage/design-system/visual05.jpg',
    title: 'Kit réseaux sociaux',
    description:
      "Des modèles de posts prêts à personnaliser sur Canva ou Figma, sans avoir besoin d'être designer.",
  },
  {
    image: '/images/homepage/design-system/visual06.jpg',
    title: 'Brandbook',
    description:
      "Tout votre système réuni dans un seul document : chaque élément, ses règles d'usage et des exemples pour l'appliquer.",
  },
];

export default function DesignSystemCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    goToSlide(currentIndex === 0 ? designSystemSlides.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    goToSlide(currentIndex === designSystemSlides.length - 1 ? 0 : currentIndex + 1);
  };

  const currentSlide = designSystemSlides[currentIndex];

  return (
    <section
      aria-labelledby="design-system-title"
      className="mt-[64px] flex flex-col items-center md:mt-[76px] md:px-0 lg:mt-[138px]"
    >
      <div className="mb-[36px] flex flex-col items-center gap-[12px] md:mb-[32px] lg:mb-[44px] lg:gap-[20px]">
        <h2
          id="design-system-title"
          className="bold w-[352px] text-center text-[20px] leading-[24px] uppercase md:w-[380px] md:text-[24px] md:leading-[28px] lg:w-[750px] lg:text-[48px] lg:leading-[48px]"
        >
          Votre système visuel
        </h2>
        <p className="w-[293px] text-center text-[12px] leading-[16px] text-[#b8b8b8] md:w-[339px] md:text-[14px] md:leading-[16px] lg:w-[469px] lg:text-[18px] lg:leading-[22px]">
          Pas juste un PDF mais un vrai système de marque
          <br />
          simple à prendre en main sur Figma ou Canva
        </p>
      </div>

      <div className="relative mt-[32px] w-full">
        {/* 스크린샷 프레임 (크기 기준 박스) */}
        <div className="relative aspect-[970/600] w-full">
          {/* 이미지만 클리핑 */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              className="object-contain"
            />
          </div>

          {/* 화살표 — 왼쪽 (호버/클릭 피드백, 커서 포인터 명시) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Slide précédent"
            className="bg-foreground text-background absolute top-1/2 left-[8px] z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-80"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15 5l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 화살표 — 오른쪽 (호버/클릭 피드백, 커서 포인터 명시) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Slide suivant"
            className="bg-foreground text-background absolute top-1/2 right-[8px] z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-80"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* 점(dot) 네비게이션 — 이미지 위에 오버레이, 하단에서 살짝 띄움 */}
          <div className="absolute bottom-[12px] left-0 z-10 flex w-full items-center justify-center gap-[10px] md:bottom-[64px]">
            {designSystemSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-[8px] w-[8px] cursor-pointer rounded-full transition-all duration-200 hover:scale-125 md:h-[14px] md:w-[14px] ${
                  index === currentIndex ? 'bg-[#0A0832]' : 'bg-[#B8B8C8]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 캡션 텍스트 */}
        <div>
          <p className="bold text-[18px] leading-[22px] md:text-[24px] md:leading-[24px]">
            {currentSlide.title}
          </p>
          <p className="text-description mt-[6px] text-[13px] leading-[18px] md:text-[14px] md:leading-[20px]">
            {currentSlide.description}
          </p>
        </div>
      </div>
    </section>
  );
}
