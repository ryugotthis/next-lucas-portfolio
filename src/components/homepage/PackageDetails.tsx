// components/homepage/PackageDetails.tsx

import Image from 'next/image';
import BookingButton from '../ui/BookingButton';

// 👇 여기 텍스트만 수정하면 내용이 바뀝니다.
const livrables: string[] = [
  'Suite logo',
  'Système de couleurs & polices',
  'Kit réseaux sociaux',
  'Pattern / texture',
  'Illustrations',
  'Brandbook',
];

const deroule: string[] = [
  'Atelier stratégique',
  '2-3 directions créatives',
  'Identité structurée dans Figma',
  '4 séances conseils post-projet',
];

type Option = {
  label: string;
  price: string;
};

const options: Option[] = [
  { label: 'Brandbook', price: '+900€' },
  { label: 'Illustrations', price: '+700€' },
];

export default function PackageDetails() {
  return (
    <section
      aria-labelledby="package-details-title"
      className="mt-[64px] flex flex-col items-center px-[24px] md:mt-[76px] md:px-0 lg:mt-[138px]"
    >
      <h2
        id="package-details-title"
        className="bold text-center text-[24px] leading-[28px] uppercase md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[44px]"
      >
        Ce que vous recevez
      </h2>

      {/* 뱃지 */}
      <div className="mt-[20px] flex items-center md:mt-[24px]">
        <div className="bg-foreground text-background flex h-[28px] items-center rounded-[22px] px-[16px] text-[10px] leading-[10px] shadow-[0_0_16px_rgba(112,97,255,0.8)] md:h-[33px] md:px-[20px] md:text-[16px] md:leading-[14px]">
          <p>Seulement 2 places/mois</p>
        </div>
      </div>

      {/* 패키지 카드 */}
      <div className="bg-background-sub mt-[32px] w-full max-w-[992px] rounded-[5px] p-[24px] md:mt-[40px] md:px-[20px] lg:p-[24px]">
        {/* 헤더: 패키지명(+밑줄) + 가격 */}
        <div className="flex flex-col gap-[8px] md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[44px]">
              Brand Ready
            </p>
            <div className="border-foreground/10 mt-[16px] border-t md:mt-[20px] md:w-[700px] dark:border-[#AFACDB]" />
          </div>
        </div>

        {/* 두 컬럼: 배송 항목 / 진행 과정 */}
        <div className="mt-[12px] grid grid-cols-1 gap-y-[28px] md:mt-[16px] md:grid-cols-2 md:gap-x-[32px]">
          <div>
            <p className="mb-[16px] text-[16px] leading-[20px] md:text-[24px] md:leading-[22px]">
              Les livrables
            </p>
            <div className="flex flex-col gap-y-[14px]">
              {livrables.map((item) => (
                <div key={item} className="flex items-center gap-[5px]">
                  <Image src="/icons/Yes.svg" alt="Check" width={28} height={28} />

                  <p className="text-[14px] leading-[18px] md:text-[18px] md:leading-[20px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-[16px] text-[16px] leading-[20px] md:text-[24px] md:leading-[22px]">
              Le déroulé
            </p>
            <div className="flex flex-col gap-y-[14px]">
              {deroule.map((item) => (
                <div key={item} className="flex items-center gap-[5px]">
                  <Image src="/icons/Yes.svg" alt="Check" width={28} height={28} />
                  <p className="text-[14px] leading-[18px] md:text-[18px] md:leading-[20px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-foreground/10 mt-[24px] max-w-[220px] border-t md:mt-[32px] dark:border-[#AFACDB]" />

        {/* 하단: 가격 + CTA */}
        <div className="bg-background-sub mt-[20px] flex flex-col gap-[16px] md:mt-[24px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-end gap-[10px] md:items-center md:gap-[12px]">
            <p className="text-[24px] leading-[28px] md:text-[28px] md:leading-[32px] lg:text-[36px] lg:leading-[40px]">
              3250€
            </p>
            <div className="text-description text-[12px] leading-[14px] md:text-[14px] md:leading-[16px] dark:text-[#AFACDB]">
              <p>Hors taxe</p>
              <p>Exonéré de TVA</p>
            </div>
          </div>

          <BookingButton />
        </div>
      </div>
    </section>
  );
}
