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
    image: '/images/homepage/design-system/1.jpg',
    title: 'Boutons',
    description:
      'Les composants interactifs du produit, 4 types, 4 tailles, tous les états, prêts à intégrer directement dans votre interface.',
  },
  {
    image: '/images/homepage/design-system/2.jpg',
    title: 'Couleurs',
    description:
      'Palette principale, accents de marque et couleurs sémantiques organisés en variables Figma, directement exportables pour vos développeurs.',
  },
  {
    image: '/images/homepage/design-system/3.jpg',
    title: 'Typographie',
    description:
      "La hiérarchie complète, de l'accroche hero aux labels de formulaire, avec toutes les specs utilisables dans le code.",
  },
  {
    image: '/images/homepage/design-system/4.jpg',
    title: 'Open Graph',
    description:
      "Le visuel qui s'affiche quand vous partagez un lien, aux bonnes dimensions et dans votre identité de marque.",
  },
  {
    image: '/images/homepage/design-system/5.jpg',
    title: 'Logo',
    description:
      "Toutes les variantes documentées avec leurs règles d'usage, quelle version utiliser, sur quel fond, à quelle taille minimum.",
  },
  {
    image: '/images/homepage/design-system/6.jpg',
    title: 'Pattern',
    description: "La texture graphique de marque et ses règles d'utilisation selon le support.",
  },
  {
    image: '/images/homepage/design-system/7.jpg',
    title: 'Social kit',
    description:
      "Les formats réseaux sociaux prêts à l'emploi, bannières et visuels aux dimensions exactes des plateformes.",
  },
];

export default function DesignSystemCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? designSystemSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === designSystemSlides.length - 1 ? 0 : prev + 1));
  };

  const currentSlide = designSystemSlides[currentIndex];

  return (
    <section
      aria-labelledby="design-system-title"
      className="mt-[64px] flex flex-col items-center px-[12px] md:mt-[76px] md:px-0 lg:mt-[138px]"
    >
      <h2
        id="design-system-title"
        className="bold text-center text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[44px]"
      >
        Le design system
      </h2>

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

          {/* 화살표 — 왼쪽 (모바일 축소, 이미지 기준 세로 중앙, 안 잘림) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Slide précédent"
            className="absolute top-1/2 left-[-8px] z-10 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] md:left-[-20px] md:h-[48px] md:w-[48px]"
          >
            <ChevronLeft className="h-[16px] w-[16px] text-[#0A0832] md:h-[24px] md:w-[24px]" />
          </button>

          {/* 화살표 — 오른쪽 (모바일 축소, 이미지 기준 세로 중앙, 안 잘림) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Slide suivant"
            className="absolute top-1/2 right-[-8px] z-10 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] md:right-[-20px] md:h-[48px] md:w-[48px]"
          >
            <ChevronRight className="h-[16px] w-[16px] text-[#0A0832] md:h-[24px] md:w-[24px]" />
          </button>

          {/* 점(dot) 네비게이션 — 이미지 위에 오버레이, 하단에서 살짝 띄움 */}
          <div className="absolute bottom-[12px] left-0 z-10 flex w-full items-center justify-center gap-[10px] md:bottom-[64px]">
            {designSystemSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Aller au slide ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-[8px] w-[8px] rounded-full transition-all md:h-[14px] md:w-[14px] ${
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
