// components/homepage/PackageDetails.tsx

import Image from 'next/image';
import BookingButton from '../ui/BookingButton';

// 👇 여기 텍스트만 수정하면 내용이 바뀝니다.
const livrables: string[] = [
  'Logos et ses variantes',
  'Système colorimétrique (base et sémantique)',
  'Typographie web-ready',
  'Kit UI (boutons, styles de texte et couleurs)',
  'Kit réseaux sociaux',
  'Pattern / texture de marque',
  'Open Graph image',
];

const deroule: string[] = [
  'Audit du produit',
  'Atelier stratégique',
  '2-3 directions créatives',
  'Identité structurée dans Figma',
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
        className="bold text-center text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] lg:text-[48px] lg:leading-[44px]"
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
            <p className="bold text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[44px]">
              Brand Ready
            </p>
            <div className="border-foreground/10 mt-[16px] border-t md:mt-[20px] md:w-[700px] dark:border-[#AFACDB]" />
          </div>

          <div className="text-left md:text-right">
            <p className="bold text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] lg:text-[40px] lg:leading-[44px]">
              2700€
            </p>
            <p className="text-description text-[11px] leading-[14px] md:text-[14px] md:leading-[16px] dark:text-[#AFACDB]">
              Hors taxe
              <br />
              Exonéré de TVA
            </p>
          </div>
        </div>

        {/* 두 컬럼: 배송 항목 / 진행 과정 */}
        <div className="mt-[12px] grid grid-cols-1 gap-y-[28px] md:mt-[16px] md:grid-cols-2 md:gap-x-[32px]">
          <div>
            <p className="bold mb-[16px] text-[16px] leading-[20px] md:text-[24px] md:leading-[22px]">
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
            <p className="bold mb-[16px] text-[16px] leading-[20px] md:text-[24px] md:leading-[22px]">
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

        {/* 하단: 옵션 + CTA */}
        <div className="mt-[20px] flex flex-col gap-[20px] md:mt-[24px] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-description bold mb-[10px] text-[14px] leading-[18px] md:text-[24px] md:leading-[20px] dark:text-[#AFACDB]">
              Options
            </p>
            <div className="flex flex-col gap-y-[6px]">
              {options.map((option) => (
                <p
                  key={option.label}
                  className="text-description text-[13px] leading-[18px] md:text-[18px] md:leading-[20px] dark:text-[#AFACDB]"
                >
                  + {option.label} ({option.price})
                </p>
              ))}
            </div>
          </div>

          <BookingButton />
        </div>
      </div>
    </section>
  );
}
