import Image from 'next/image';
import { ReactNode } from 'react';
import Media from '../ui/Midea';

type ProjectCardProps = {
  section: {
    imgType: number;
    description?: ReactNode; // string | JSX.Element | undefined 모두 커버
    semiDescription?: ReactNode;
    isLast?: boolean;
    imgSrc?: string;
    imgSrc1?: string;
    imgSrc2?: string;
    imgSrc3?: string;
    imgSrc4?: string;
  };
};

export default function ProjectCard({ section }: ProjectCardProps) {
  const {
    imgType,
    description,
    semiDescription,
    imgSrc,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    isLast,
  } = section;

  // ✅ 파일 확장자에 따라 컴포넌트 다르게 렌더링
  const renderMedia = (src?: string) => {
    if (!src) return null;
    const lower = src.toLowerCase();

    if (lower.endsWith('.mp4') || lower.endsWith('.webm')) {
      return (
        <video className="fill object-cover" autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      );
    }

    // if (lower.endsWith('.gif')) {
    //   return <img src={src} alt="gif" className="h-full w-full object-cover" />;
    // }

    // ✅ 기본은 next/image
    return <Image src={src} alt="photo" fill className="object-cover" />;
  };
  return (
    <>
      {imgType === 1 && imgSrc && (
        <div>
          <div className="relative aspect-video w-full">{renderMedia(imgSrc!)}</div>
          {!isLast && <div className="mt-[2%] w-[67%]">{description}</div>}
        </div>
      )}
      {imgType === 2 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="grid grid-cols-2 gap-[10px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc1!)}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc2!)}
            </div>
          </div>

          {!isLast && (
            <div className="mt-[2%] w-[67%]">
              <div className={semiDescription ? 'bold' : ''}>{description}</div>
              <div className="mt-[1%] text-[20px]">{semiDescription}</div>
            </div>
          )}
        </div>
      )}
      {imgType === 3 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="flex flex-col gap-[10px]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc1!)}
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {renderMedia(imgSrc2!)}
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {renderMedia(imgSrc3!)}
              </div>
            </div>
          </div>

          {!isLast && (
            <div className="mt-[2%] w-[67%]">
              <div className={semiDescription ? 'bold' : ''}>{description}</div>
              <div className="mt-[1%] text-[20px]">{semiDescription}</div>
            </div>
          )}
        </div>
      )}
      {imgType === 4 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc1!)}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc2!)}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc3!)}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc4!)}
            </div>
          </div>

          {!isLast && (
            <div className="mt-[2%] w-[67%]">
              <div className={semiDescription ? 'bold' : ''}>{description}</div>
              <div className="mt-[1%] text-[20px]">{semiDescription}</div>
            </div>
          )}
        </div>
      )}
      {imgType === 5 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {renderMedia(imgSrc1!)}
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {renderMedia(imgSrc2!)}
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-[5px]">
              {renderMedia(imgSrc3!)}
            </div>
          </div>

          {!isLast && (
            <div className="mt-[2%] w-[67%]">
              <div className={semiDescription ? 'bold' : ''}>{description}</div>
              {semiDescription && <div className="mt-[1%] text-[20px]">{semiDescription}</div>}
            </div>
          )}
        </div>
      )}
    </>
  );
}
