'use client';

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import ReviewCard from './ReviewCard';

type Review = {
  id: number;
  imageSrc: string;
  name: string;
  role: string;
  content: ReactNode;
  highlight?: string;
  logoSrc?: string;
  logoAlt?: string;
  projectUrl?: string;
};

const reviews: Review[] = [
  {
    id: 1,
    imageSrc: '/images/homepage/desktop-tablet/clients/jf.jpeg',
    name: 'Jean-François Legras',
    role: 'Fondateur de MyClerk.IO',
    content:
      "Le résultat est à la hauteur de nos attentes, et c'est clairement un travail que nous n'aurions jamais pu produire nous-mêmes.",
    highlight: 'jamais pu produire nous-mêmes',
    logoSrc: '/images/homepage/logos/myclerk.svg',
    logoAlt: 'MyClerk',
    projectUrl: '/project/myclerk',
  },
  {
    id: 2,
    imageSrc: '/images/homepage/desktop-tablet/clients/vincent.jpeg',
    name: 'Vincent Vanfleteren',
    role: 'Co-fondateur de Alcôve',
    content:
      'Lucas a su être force de proposition et s’adapter totalement à notre projet. Nous avons beaucoup apprécié ses conseils et sa réactivité. Nous sommes ravis du résultat !',
    highlight: 's’adapter totalement à notre projet',
    logoSrc: '/images/homepage/logos/alcove.svg',
    logoAlt: 'Alcove',
    projectUrl: '/project/alcove',
  },
  {
    id: 3,
    imageSrc: '/images/homepage/desktop-tablet/clients/jr.png',
    name: 'Jean-Romain Bardet',
    role: 'CEO de SCorp-io',
    content:
      'Le travail est structuré, les livrables sont propres, et surtout exploitables concrètement (ce qui n’est pas toujours le cas).',
    highlight: 'exploitables concrètement',
    logoSrc: '/images/homepage/logos/scorp-io.svg',
    logoAlt: 'SCorp-io',
    projectUrl: '/project/scorp-io',
  },
  {
    id: 4,
    imageSrc: '/images/homepage/desktop-tablet/clients/brenna.jpeg',
    name: 'Brenna Palmer',
    role: 'Brand Manager Data Governance Kitchen',
    content:
      "C'est notre deuxième projet avec Lucas, et tout s'est parfaitement déroulé. Nous avons beaucoup apprécié la façon dont il a organisé le projet.",
    highlight: "tout s'est parfaitement déroulé",
    logoSrc: '/images/homepage/logos/dgk.svg',
    logoAlt: 'Data Governance Kitchen',
    projectUrl: '/project/dgk',
  },
  {
    id: 5,
    imageSrc: '/images/homepage/desktop-tablet/clients/guillaume.jpeg',
    name: 'Guillaume Adrian',
    role: 'Fondateur Dolmen',
    content:
      'Lucas combine deux qualités qui vont rarement ensemble : une vraie sensibilité créative et la capacité à délivrer pile au bon moment.',
    highlight: 'délivrer pile au bon moment',
    logoSrc: '/images/homepage/logos/dolmen.svg',
    logoAlt: 'Dolmen',
    projectUrl: '/project/dolmen',
  },
  {
    id: 6,
    imageSrc: '/images/homepage/desktop-tablet/clients/tommy.png',
    name: 'Tommy Di Luna',
    role: 'Co-fondateur Lidory',
    content:
      'Son écoute et sa créativité ont permis de donner vie à une identité soignée et parfaitement alignée avec nos attentes.',
    highlight: 'parfaitement alignée avec nos attentes',
    logoSrc: '/images/homepage/logos/lidory.svg',
    logoAlt: 'Lidory',
    projectUrl: '/project/lidory',
  },
  {
    id: 7,
    imageSrc: '/images/homepage/desktop-tablet/clients/thomas.jpeg',
    name: 'Thomas Bihannic',
    role: 'Fondateur de L’Atelier',
    content:
      'Lucas a su traduire rapidement l’univers qu’on voulait créer en une identité visuelle cohérente, affirmée et directement utilisable. Le résultat parle de lui-même.',
    highlight: 'directement utilisable',
    logoSrc: '/images/homepage/logos/latelier.svg',
    logoAlt: 'L’Atelier',
  },
];

const N = reviews.length;
// 같은 카드 세트를 3번 이어 붙여서 무한처럼 보이게 함
const items = [...reviews, ...reviews, ...reviews];

const AUTO_DELAY = 5000;
const DURATION = 600;
const SWIPE_THRESHOLD = 50;

// 화면 크기별 카드 폭 비율과 간격
function getLayout(vw: number) {
  if (vw >= 1024) return { ratio: 0.29, gap: 24 };
  if (vw >= 768) return { ratio: 0.4, gap: 24 };
  return { ratio: 0.8, gap: 12 };
}

export default function ReviewList() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const dragged = useRef(false);

  const [width, setWidth] = useState(0);
  const [vw, setVw] = useState(1280);
  const [pos, setPos] = useState(N); // 가운데 세트의 첫 카드에서 시작
  const [animate, setAnimate] = useState(true);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  // 움직임 줄이기 설정 존중
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // 컨테이너 폭과 화면 폭 측정
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      setWidth(el.clientWidth);
      setVw(window.innerWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { ratio, gap } = getLayout(vw);
  const cardW = width * ratio;
  const step = cardW + gap;
  const baseOffset = (width - cardW) / 2 - pos * step;

  const go = useCallback((delta: number) => {
    setAnimate(true);
    setPos((p) => p + delta);
  }, []);

  // 점을 눌렀을 때: 가장 가까운 방향으로 이동
  const goToIndex = (i: number) => {
    const current = ((pos % N) + N) % N;
    let delta = i - current;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    go(delta);
  };

  // 가운데 세트를 벗어나면 애니메이션 없이 같은 카드의 가운데 세트 위치로 순간이동
  useEffect(() => {
    if (pos >= N && pos < 2 * N) return;
    const t = setTimeout(
      () => {
        setAnimate(false);
        setPos((p) => (p >= 2 * N ? p - N : p < N ? p + N : p));
      },
      reduced ? 0 : DURATION + 20
    );
    return () => clearTimeout(t);
  }, [pos, reduced]);

  // 순간이동 직후 애니메이션 다시 켜기
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // 자동 넘김
  useEffect(() => {
    if (paused || reduced || dragging) return;
    const t = setTimeout(() => go(1), AUTO_DELAY);
    return () => clearTimeout(t);
  }, [pos, paused, reduced, dragging, go]);

  // 스와이프 (마우스, 터치 공통)
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    dragged.current = false;
    setDragging(true);
    setPaused(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) dragged.current = true;
    setDragX(dx);
  };

  const endDrag = () => {
    if (startX.current === null) return;
    if (dragX <= -SWIPE_THRESHOLD) go(1);
    else if (dragX >= SWIPE_THRESHOLD) go(-1);
    startX.current = null;
    setDragX(0);
    setDragging(false);
    setPaused(false);
  };

  const active = ((pos % N) + N) % N;

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={viewportRef}
        className="w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        // 드래그 후에는 링크가 눌리지 않게
        onClickCapture={(e) => {
          if (dragged.current) {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div
          className="flex items-stretch"
          style={{
            gap,
            opacity: width ? 1 : 0,
            transform: `translateX(${baseOffset + dragX}px)`,
            transition:
              animate && !dragging && !reduced ? `transform ${DURATION}ms ease-in-out` : 'none',
          }}
        >
          {items.map((review, i) => (
            <div
              key={`${Math.floor(i / N)}-${review.id}`}
              style={{ width: cardW }}
              aria-hidden={i < N || i >= 2 * N}
              className={`shrink-0 transition-opacity duration-500 ${
                i === pos ? 'opacity-100' : 'opacity-60'
              }`}
            >
              <ReviewCard
                imageSrc={review.imageSrc}
                name={review.name}
                role={review.role}
                content={review.content}
                highlight={review.highlight}
                logoSrc={review.logoSrc}
                logoAlt={review.logoAlt}
                projectUrl={review.projectUrl}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 끝 페이드 */}
      <div className="from-background pointer-events-none absolute top-0 left-0 h-full w-[24px] bg-gradient-to-r to-transparent" />
      <div className="from-background pointer-events-none absolute top-0 right-0 h-full w-[24px] bg-gradient-to-l to-transparent" />

      {/* 좌우 화살표 (태블릿, 데스크탑만) */}
      <button
        type="button"
        aria-label="Avis précédent"
        onClick={() => go(-1)}
        className="bg-foreground text-background absolute top-1/2 left-[8px] hidden h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-80 md:flex"
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
      <button
        type="button"
        aria-label="Avis suivant"
        onClick={() => go(1)}
        className="bg-foreground text-background absolute top-1/2 right-[8px] hidden h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full shadow-md transition-opacity hover:opacity-80 md:flex"
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

      {/* 현재 위치 표시 */}
      <div className="mt-[20px] flex justify-center gap-[8px]">
        {reviews.map((review, i) => (
          <button
            key={review.id}
            type="button"
            aria-label={`Avis ${i + 1}`}
            aria-current={i === active}
            onClick={() => goToIndex(i)}
            className={`h-[8px] rounded-full transition-all duration-300 ${
              i === active ? 'bg-foreground w-[24px]' : 'bg-foreground/20 w-[8px]'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
