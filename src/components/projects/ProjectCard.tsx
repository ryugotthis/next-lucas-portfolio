import { ReactNode } from 'react';
import Media from '../ui/Media';

type ProjectCardProps = {
  section: {
    imgType: number;
    description?: ReactNode;
    semiDescription?: ReactNode;
    leadText?: ReactNode;
    isLast?: boolean;
    imgSrc?: string;
    imgSrc1?: string;
    imgSrc2?: string;
    imgSrc3?: string;
    imgSrc4?: string;
    imgTitle1?: string;
    imgTitle2?: string;
    imgTitle3?: string;
    imgTitle4?: string;
    imgTitle5?: string;
    imgTitle6?: string;
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
  if (!description && !semiDescription) return null;
  return (
    <div className="mt-[2%] w-[54%]">
      <div className={`text-[14px] md:text-[24px] ${semiDescription ? 'bold' : ''}`}>
        {description}
      </div>
      {semiDescription && <div className="mt-[1%] md:text-[20px]">{semiDescription}</div>}
    </div>
  );
}

export default function ProjectCard({ section }: ProjectCardProps) {
  const {
    imgType,
    description,
    semiDescription,
    leadText,
    imgSrc,
    imgSrc1,
    imgSrc2,
    imgSrc3,
    imgSrc4,
    imgTitle1,
    imgTitle2,
    imgTitle3,
    imgTitle4,
    imgTitle5,
    imgTitle6,
    isLast,
  } = section;

  return (
    <>
      {/* 타입 1: 단일 미디어 (imgSrc 필수) */}
      {imgType === 1 && imgSrc && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle1 && <p className="bold text-[16px] md:text-[40px]">{imgTitle1}</p>}
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
          {imgTitle2 && <p className="bold text-[16px] md:text-[40px]">{imgTitle2}</p>}
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
          {imgTitle3 && <p className="bold text-[16px] md:text-[40px]">{imgTitle3}</p>}
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
          {imgTitle4 && <p className="bold text-[16px] md:text-[40px]">{imgTitle4}</p>}
          <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            {[imgSrc1, imgSrc2, imgSrc3, imgSrc4].map((src, i) => (
              <div key={i} className="relative aspect-square w-full overflow-hidden rounded-[5px]">
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
          {imgTitle5 && <p className="bold text-[16px] md:text-[40px]">{imgTitle5}</p>}
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

      {/* 타입 6: 좌우 50:50 (텍스트/이미지) — 모바일은 첫 문단 → 이미지 → 나머지 텍스트 순서 */}
      {imgType === 6 && (
        <div className="text-[11px] md:text-[18px] lg:text-[26px]">
          {/* 모바일 전용: 첫 문단이 이미지보다 위에 옴 */}
          {leadText && <div className="md:hidden">{leadText}</div>}

          <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:gap-[24px]">
            {/* 왼쪽 텍스트 — PC부터만 보임 (제목이 제일 위, 그다음 첫 문단 + 나머지 텍스트) */}
            <div className="hidden w-full md:block md:w-1/2">
              {imgTitle6 && <p className="bold text-[16px] md:text-[40px]">{imgTitle6}</p>}
              {leadText && <div className={imgTitle6 ? 'mt-[16px]' : ''}>{leadText}</div>}
              {description && <div className={leadText ? 'mt-[16px]' : ''}>{description}</div>}
            </div>

            {/* 오른쪽 이미지 */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px] md:w-1/2">
              {imgSrc1 && <Media src={imgSrc1} alt="project media" />}
            </div>

            {/* 모바일 전용: 나머지 텍스트가 이미지 아래로 옴 */}
            {description && <div className="md:hidden">{description}</div>}
          </div>

          {/* semiDescription만 전달 — description은 위에서 이미 렌더링했으므로 중복 방지 */}
          <DescriptionBlock semiDescription={semiDescription} isLast={isLast} />
        </div>
      )}
    </>
  );
}
