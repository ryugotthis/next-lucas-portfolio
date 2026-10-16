import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ReviewProps {
  imageSrc: string;
  name: string;
  role: string;
  content?: string | ReactNode;
  highlight?: string;
  logoSrc?: string;
  logoAlt?: string;
  projectUrl?: string;
}

// 따옴표 아이콘이 있으니까 글 안의 “ ”는 빼고, 핵심 문장만 보라색 굵은 글씨로
function renderContent(content: ReviewProps['content'], highlight?: string) {
  if (typeof content !== 'string') return content;

  const text = content.replace(/^[“"]\s*/, '').replace(/\s*[”"]$/, '');
  if (!highlight) return text;

  const i = text.indexOf(highlight);
  if (i === -1) return text;

  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-[#7061FF]">{highlight}</strong>
      {text.slice(i + highlight.length)}
    </>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 26 20" fill="currentColor" aria-hidden="true">
      <path d="M0 20V11C0 5 3.5 1.5 10 0v4.5C7 5.5 6 7 5.8 9H10v11z" />
      <path d="M16 20V11C16 5 19.5 1.5 26 0v4.5C23 5.5 22 7 21.8 9H26v11z" />
    </svg>
  );
}

export default function ReviewCard({
  imageSrc,
  name,
  role,
  content,
  highlight,
  logoSrc,
  logoAlt,
  projectUrl,
}: ReviewProps) {
  return (
    <div className="bg-background-sub flex h-full flex-col rounded-[2px] p-[20px] md:rounded-[5px] md:p-[24px]">
      <div className="flex items-center">
        <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full lg:h-[59px] lg:w-[59px]">
          <Image src={imageSrc} alt={`${name} photo`} fill className="object-cover" />
        </div>
        <div className="ml-[12px]">
          <p className="bold text-[16px] leading-[20px] lg:text-[18px]">{name}</p>
          <p className="text-[12px] leading-[16px] lg:text-[14px]">{role}</p>
        </div>
      </div>

      <QuoteIcon className="mt-[20px] h-[16px] w-auto shrink-0 -scale-y-100 self-start text-[#7061FF] md:mt-[24px] md:h-[18px] lg:h-[22px]" />

      <p className="mt-[12px] text-[14px] leading-[20px] md:mt-[16px] lg:text-[18px] lg:leading-[26px]">
        {renderContent(content, highlight)}
      </p>

      {(logoSrc || projectUrl) && (
        <div className="mt-auto flex items-center justify-between gap-[12px] pt-[24px]">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={logoAlt ?? ''}
              width={120}
              height={24}
              className="h-[20px] w-auto md:h-[24px]"
            />
          ) : (
            <span />
          )}
          {projectUrl && (
            <Link
              href={projectUrl}
              className="text-description shrink-0 text-[12px] underline md:text-[14px]"
            >
              Voir le projet →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
