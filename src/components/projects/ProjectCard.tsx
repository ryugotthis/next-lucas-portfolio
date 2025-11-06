import { ReactNode } from 'react';
import Media from '../ui/Media';

type ProjectCardProps = {
  section: {
    imgType: number;
    description?: ReactNode;
    semiDescription?: ReactNode;
    isLast?: boolean;
    imgSrc?: string;
    imgSrc1?: string;
    imgSrc2?: string;
    imgSrc3?: string;
    imgSrc4?: string;
  };
};

// 중복되는 설명 블록 컴포넌트로 분리
function DescriptionBlock({
  description,
  semiDescription,
  isLast,
}: {
  description?: ReactNode;
  semiDescription?: ReactNode;
  isLast?: boolean;
}) {
  if (isLast) return null;
  return (
    <div className="mt-[2%] w-[67%]">
      <div className={semiDescription ? 'bold' : ''}>{description}</div>
      {semiDescription && <div className="mt-[1%] text-[20px]">{semiDescription}</div>}
    </div>
  );
}

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

  return (
    <>
      {/* 타입 1: 단일 미디어 (imgSrc 필수) */}
      {imgType === 1 && imgSrc && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="relative aspect-video w-full">
            <Media src={imgSrc} alt="project media" />
          </div>
          <DescriptionBlock
            description={description}
            semiDescription={semiDescription}
            isLast={isLast}
          />
        </div>
      )}

      {/* 타입 2: 2분할 */}
      {imgType === 2 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="grid grid-cols-2 gap-[10px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {imgSrc1 && <Media src={imgSrc1} alt="project media 1" />}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {imgSrc2 && <Media src={imgSrc2} alt="project media 2" />}
            </div>
          </div>
          <DescriptionBlock
            description={description}
            semiDescription={semiDescription}
            isLast={isLast}
          />
        </div>
      )}

      {/* 타입 3: 1(비디오/이미지) + 2분할 */}
      {imgType === 3 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="flex flex-col gap-[10px]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[5px]">
              {imgSrc1 && <Media src={imgSrc1} alt="project media 1" />}
            </div>
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {imgSrc2 && <Media src={imgSrc2} alt="project media 2" />}
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {imgSrc3 && <Media src={imgSrc3} alt="project media 3" />}
              </div>
            </div>
          </div>
          <DescriptionBlock
            description={description}
            semiDescription={semiDescription}
            isLast={isLast}
          />
        </div>
      )}

      {/* 타입 4: 2x2 그리드 */}
      {imgType === 4 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            {[imgSrc1, imgSrc2, imgSrc3, imgSrc4].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square w-full overflow-hidden rounded-[5px]"
              >
                {src && <Media src={src} alt={`project media ${i + 1}`} />}
              </div>
            ))}
          </div>
          <DescriptionBlock
            description={description}
            semiDescription={semiDescription}
            isLast={isLast}
          />
        </div>
      )}

      {/* 타입 5: 2분할 + 1(비디오/이미지) */}
      {imgType === 5 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          <div className="flex flex-col gap-[10px]">
            <div className="grid grid-cols-2 gap-[10px]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {imgSrc1 && <Media src={imgSrc1} alt="project media 1" />}
              </div>
              <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {imgSrc2 && <Media src={imgSrc2} alt="project media 2" />}
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-[5px]">
              {imgSrc3 && <Media src={imgSrc3} alt="project media 3" />}
            </div>
          </div>
          <DescriptionBlock
            description={description}
            semiDescription={semiDescription}
            isLast={isLast}
          />
        </div>
      )}
    </>
  );
}
