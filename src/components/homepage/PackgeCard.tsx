'user client';

import Image from 'next/image';
import BookingButton from '../ui/BookingButton';

interface PackageContent {
  name: string;
  include: boolean;
}

interface PackageCardProps {
  title: string;
  price: string;

  contents: PackageContent[];
  extraContents: PackageContent[];
}

export default function PackageCard({ title, contents, extraContents, price }: PackageCardProps) {
  return (
    <div className="flex flex-col items-center rounded-[2px] bg-[#F1F3FF] py-[4%] md:rounded-[5px]">
      <h1 className="bold text-[24px] leading-[24px] lg:text-[48px] lg:leading-[48px]">{title}</h1>
      <div className="mx-auto mt-[15px] mb-[41px] flex flex-col gap-[19px] text-[13px] leading-[22px] lg:mt-[31px] lg:mb-[48px] lg:gap-[35px] lg:text-[20px] lg:leading-[36px]">
        <div className="">
          {contents.map((content) => (
            <div key={content.name} className="flex items-center gap-[5px] lg:gap-[12px]">
              <Image
                src={content.include ? '/icons/Check.svg' : '/icons/Cross.svg'}
                alt="content.name"
                width={content.include ? 13.5 : 11}
                height={content.include ? 8.5 : 11}
              />
              <p className={content.include ? 'bold text-[0A0832]' : 'text-description'}>
                {content.name}
              </p>
            </div>
          ))}
        </div>
        <div>
          {extraContents.map((content) => (
            <div key={content.name} className="flex items-center gap-[5px] lg:gap-[12px]">
              <Image
                src={content.include ? '/icons/Plus.svg' : '/icons/Cross.svg'}
                alt="content.name"
                width={content.include ? 13.5 : 11}
                height={content.include ? 8.5 : 11}
              />
              <p className={content.include ? 'bold' : 'text-description'}>{content.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-baseline justify-center gap-[8px] text-[24px] lg:gap-[14px] lg:text-[48px]">
          <div className="bold flex">{price}</div>
          <div className="text-[14px] lg:text-[18px]">TTC</div>
        </div>
        <BookingButton />
      </div>
    </div>
  );
}
