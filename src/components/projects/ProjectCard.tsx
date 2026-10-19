import { ReactNode } from 'react';
import Media from '../ui/Media';

type ProjectCardProps = {
  section: {
    imgType: number;
    title?: string;
    semiTitle?: ReactNode;
    topDescription?: ReactNode;
    topSemiDescription?: ReactNode;
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

// 이미지 위에 선택적으로 나오는 제목과 세미 제목 (맨 위 히어로와 같은 스타일)
function TitleBlock({ title, semiTitle }: { title?: string; semiTitle?: ReactNode }) {
  if (!title && !semiTitle) return null;
  return (
    <div className="mb-[2%]">
      {title && (
        <h3 className="text-text-sub pl-1.5 text-[11px] uppercase md:text-[16px]">{title}</h3>
      )}
      {semiTitle && (
        <h4 className="text-primary text-[16px] md:text-[28px] lg:text-[48px] lg:leading-[54px]">
          {semiTitle}
        </h4>
      )}
    </div>
  );
}

// 설명 블록: 이미지 위(top) 또는 아래(bottom)에서 같이 사용
function DescriptionBlock({
  description,
  semiDescription,
  position = 'bottom',
}: {
  description?: ReactNode;
  semiDescription?: ReactNode;
  isLast?: boolean;
  position?: 'top' | 'bottom';
}) {
  if (!description && !semiDescription) return null;
  return (
    <div className={`${position === 'top' ? 'mb-[2%]' : 'mt-[2%]'} w-full md:w-[54%]`}>
      <div
        className={`text-[14px] md:text-[24px] ${
          semiDescription ? 'text-foreground' : 'text-text-sub'
        }`}
      >
        {description}
      </div>
      {semiDescription && (
        <div className="text-text-sub mt-[1%] md:text-[20px]">{semiDescription}</div>
      )}
    </div>
  );
}

export default function ProjectCard({ section }: ProjectCardProps) {
  const {
    imgType,
    title,
    semiTitle,
    topDescription,
    topSemiDescription,
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

  // 이미지 위 설명 (topDescription이 있을 때만 나옴)
  const above = (
    <DescriptionBlock
      description={topDescription}
      semiDescription={topSemiDescription}
      position="top"
    />
  );

  // 이미지 아래 설명 (기본)
  const below = (
    <DescriptionBlock
      description={description}
      semiDescription={semiDescription}
      isLast={isLast}
      position="bottom"
    />
  );

  return (
    <>
      {/* 모든 타입 공통: title, semiTitle이 있을 때만 맨 위에 표시 */}
      <TitleBlock title={title} semiTitle={semiTitle} />

      {/* 타입 1: 단일 미디어 (imgSrc 필수) */}
      {imgType === 1 && imgSrc && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle1 && <p className="text-primary text-[16px] md:text-[40px]">{imgTitle1}</p>}
          {above}
          <div className="relative aspect-video w-full">
            <Media src={imgSrc} alt="project media" />
          </div>
          {below}
        </div>
      )}

      {/* 타입 2: 2분할 */}
      {imgType === 2 && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle2 && <p className="text-primary text-[16px] md:text-[40px]">{imgTitle2}</p>}
          {above}
          <div className="grid grid-cols-2 gap-[10px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {imgSrc1 && <Media src={imgSrc1} alt="project media 1" />}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
              {imgSrc2 && <Media src={imgSrc2} alt="project media 2" />}
            </div>
          </div>
          {below}
        </div>
      )}

      {/* 타입 3: 1(비디오/이미지) + 2분할 */}
      {imgType === 3 && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle3 && <p className="text-primary text-[16px] md:text-[40px]">{imgTitle3}</p>}
          {above}
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
          {below}
        </div>
      )}

      {/* 타입 4: 2x2 그리드 */}
      {imgType === 4 && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle4 && <p className="text-primary text-[16px] md:text-[40px]">{imgTitle4}</p>}
          {above}
          <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
            {[imgSrc1, imgSrc2, imgSrc3, imgSrc4].map((src, i) => (
              <div key={i} className="relative aspect-square w-full overflow-hidden rounded-[5px]">
                {src && <Media src={src} alt={`project media ${i + 1}`} />}
              </div>
            ))}
          </div>
          {below}
        </div>
      )}

      {/* 타입 5: 2분할 + 1(비디오/이미지) */}
      {imgType === 5 && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {imgTitle5 && <p className="text-primary text-[16px] md:text-[40px]">{imgTitle5}</p>}
          {above}
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
          {below}
        </div>
      )}

      {/* 타입 6: lg부터 좌우 50:50, 모바일/태블릿은 세로로 쌓임 (제목, 텍스트, 이미지, 나머지 텍스트) */}
      {imgType === 6 && (
        <div className="text-text-sub text-[11px] md:text-[18px] lg:text-[26px]">
          {/* topDescription만 맨 위에 추가 (description은 원래 왼쪽 열에 있음) */}
          {above}

          <div className="flex flex-col gap-[16px] md:gap-[24px] lg:flex-row lg:items-start">
            {/* 모바일 + 태블릿: 제목과 첫 문단이 이미지 위에 옴 */}
            <div className="lg:hidden">
              {imgTitle6 && (
                <p className="text-primary mb-[8px] text-[20px] md:mb-[12px] md:text-[32px]">
                  {imgTitle6}
                </p>
              )}
              {leadText && <div className="leading-[1.5]">{leadText}</div>}
            </div>

            {/* 데스크탑: 왼쪽 텍스트 열 */}
            <div className="hidden w-full lg:block lg:w-1/2">
              {imgTitle6 && <p className="text-primary text-[40px]">{imgTitle6}</p>}
              {leadText && <div className={imgTitle6 ? 'mt-[16px]' : ''}>{leadText}</div>}
              {description && <div className={leadText ? 'mt-[16px]' : ''}>{description}</div>}
            </div>

            {/* 이미지 */}
            <div className="relative aspect-square w-full overflow-hidden rounded-[5px] lg:w-1/2">
              {imgSrc1 && <Media src={imgSrc1} alt="project media" />}
            </div>

            {/* 모바일 + 태블릿: 나머지 텍스트는 이미지 아래로 옴 */}
            {description && <div className="leading-[1.5] lg:hidden">{description}</div>}
          </div>

          {/* semiDescription만 전달. description은 위에서 이미 렌더링했으므로 중복 방지 */}
          <DescriptionBlock semiDescription={semiDescription} isLast={isLast} />
        </div>
      )}
    </>
  );
}
