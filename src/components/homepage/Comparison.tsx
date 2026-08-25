import Image from 'next/image';

// 👇 여기 텍스트만 수정하면 테이블 내용이 바뀝니다.
type ComparisonRow = {
  brandReady: string;
  classic: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    brandReady: 'Livré en variables Figma utilisables',
    classic: 'Livré en PDF ou PNG',
  },
  {
    brandReady: "Pensé pour l'interface et le produit",
    classic: 'Pensé pour le print et les réseaux',
  },
  {
    brandReady: 'Couleurs sémantiques testées WCAG',
    classic: 'Couleurs choisies pour être "jolies"',
  },
  {
    brandReady: 'Kit réseaux sociaux + Kit UI',
    classic: 'Kit réseaux sociaux',
  },
  {
    brandReady: 'Système modulaire fait pour évoluer',
    classic: 'Système qui ne suit pas la croissance',
  },
];

export default function Comparison() {
  return (
    <>
      <h2
        id="comparison-title"
        className="bold w-[352px] text-center text-[20px] leading-[24px] md:w-[500px] md:text-[24px] md:leading-[28px] lg:w-[900px] lg:text-[48px] lg:leading-[52px]"
      >
        Pourquoi un branding classique ne suffit
        <br className="hidden md:block" />
        pas pour une boîte tech en croissance
      </h2>

      <p className="text-description mt-[12px] w-[293px] text-center text-[12px] leading-[16px] md:mt-[16px] md:w-[420px] md:text-[14px] md:leading-[18px] lg:mt-[20px] lg:w-[560px] lg:text-[18px] lg:leading-[22px]">
        La plupart des designers créent pour le print ou les
        <br className="hidden md:block" />
        réseaux sociaux. Mon travail est fait pour votre produit.
      </p>

      {/* 모바일: flex-col(세로 스택) → 태블릿부터 md:flex-row(가로 배치, PC와 동일) */}
      <div className="mt-[32px] flex w-full max-w-[814px] flex-col gap-[16px] md:mt-[48px] md:flex-row md:gap-0 lg:mt-[56px]">
        {/* Left column — Brand Ready (여백 추가로 박스 확장) */}
        <div className="rounded-5px] flex-1 overflow-hidden bg-[#F1F3FF] pt-[8px] pb-[16px] shadow-[0_4px_24px_rgba(112,97,255,0.3)]">
          {/* 제목은 그대로 유지 */}
          <div className="bg-[#F1F3FF] px-[16px] py-[16px] md:px-[24px] md:py-[20px]">
            <p className="bold text-center text-[16px] leading-[20px] md:text-right md:text-[20px] md:leading-[24px] lg:text-[32px] lg:leading-[28px]">
              Brand Ready
            </p>
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row.brandReady}
              className="flex flex-row-reverse items-center justify-end gap-[8px] border-t border-[#C9C8E4] bg-[#F1F3FF] py-[16px] pl-[16px] md:flex-row md:justify-end md:px-[24px] md:py-[20px]"
            >
              <p className="bold text-left text-[12px] leading-[16px] md:text-right md:text-[14px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]">
                {row.brandReady}
              </p>
              <span aria-hidden="true" className="bold text-[#7061FF]">
                <Image src="/icons/Done.svg" alt="check" width={24} height={24} />
              </span>
            </div>
          ))}

          {/* 마지막 행 밑 구분선 */}
          <div className="border-t border-[#C9C8E4]" />
        </div>

        {/* Right column — Branding classique (왼쪽과 세로 여백 맞춰서 줄 정렬) */}
        <div className="flex-1 overflow-hidden rounded-[16px] pt-[8px] pb-[16px]">
          {/* 제목은 그대로 유지 */}
          <div className="py-[16px] pr-[16px] md:px-[24px] md:py-[20px]">
            <p className="bold text-description text-center text-[16px] leading-[20px] md:text-left md:text-[20px] md:leading-[24px] lg:text-[32px] lg:leading-[28px]">
              Branding classique
            </p>
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row.classic}
              className="flex items-center justify-start gap-[8px] border-t border-[#C9C8E4] px-[16px] py-[16px] md:justify-start md:px-[24px] md:py-[20px]"
            >
              <span aria-hidden="true" className="text-[#b8b8b8]">
                <Image src="/icons/Done-grey.svg" alt="check" width={24} height={24} />
              </span>
              <p className="text-left text-[12px] leading-[16px] text-[#888888] md:text-left md:text-[14px] md:leading-[18px] lg:text-[18px] lg:leading-[20px]">
                {row.classic}
              </p>
            </div>
          ))}

          {/* 마지막 행 밑 구분선 (왼쪽과 대칭) */}
          <div className="border-t border-[#C9C8E4]" />
        </div>
      </div>
    </>
  );
}
