import Image from 'next/image';
import React, { ReactNode, ReactElement, JSXElementConstructor } from 'react';

export type ContentItem = {
  id: number;
  title?: string; // 어떤 객체는 title 없음
  direction: 1 | -1 | 0;
  description?: ReactNode; // JSX 엘리먼트 포함 가능
  imgSrc: string;
};

export default function IntroductionCard({
  id,
  title,
  direction,
  description,
  imgSrc,
}: ContentItem) {
  function renderWithoutBr(description?: ReactNode): ReactNode {
    if (!description) return null;

    if (typeof description === 'string') return description;

    if (Array.isArray(description)) {
      return description.map((child, idx) => (
        <React.Fragment key={idx}>{renderWithoutBr(child)}</React.Fragment>
      ));
    }

    if (React.isValidElement(description)) {
      if (description.type === 'br') {
        return ' '; // <br/> 제거
      }

      // ✅ children 타입을 포함한 ReactElement로 단언
      const element = description as ReactElement<{ children?: ReactNode }>;

      return React.cloneElement(element, undefined, renderWithoutBr(element.props.children));
    }

    return description;
  }
  return (
    <>
      {direction === 1 && (
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-between pr-[20px]">
            <h1 className="bold text-[14px] leading-[18px] md:text-[28px] md:leading-[32px] lg:text-[38px] lg:leading-[46px]">
              {title}
            </h1>
            {/* 모바일 */}
            <p className="text-[11px] md:hidden">{renderWithoutBr(description)}</p>

            {/* 태블릿 이상 */}
            <p className="hidden md:block md:text-[16px] lg:text-[22px]">{description}</p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
            <Image src={imgSrc} alt={`photo ${id}`} fill />
          </div>
        </div>
      )}
      {direction === -1 && (
        <div className="grid grid-cols-2">
          <div className="relative aspect-square w-full overflow-hidden rounded-[5px]">
            <Image src={imgSrc} alt={`photo ${id}`} fill />
          </div>
          <div className="flex flex-col justify-between pl-[20px]">
            <h1 className="bold text-[14px] leading-[18px] md:text-[28px] md:leading-[32px] lg:text-[38px] lg:leading-[46px]">
              {title}
            </h1>
            {/* 모바일 */}
            <p className="text-[11px] md:hidden">{renderWithoutBr(description)}</p>

            {/* 태블릿 이상 */}
            <p className="hidden md:block md:text-[16px] lg:text-[22px]">{description}</p>
          </div>
        </div>
      )}
      {direction === 0 && (
        <div className="relative aspect-video w-full overflow-hidden rounded-[5px]">
          <Image src={imgSrc} alt={`photo ${id}`} fill />
        </div>
      )}
    </>
  );
}
