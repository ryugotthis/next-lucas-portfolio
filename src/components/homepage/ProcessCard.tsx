import Image from 'next/image';

interface ProcessCardProps {
  order: number;
  title: string;
  description: string | React.ReactNode;
  imageSrc: string;
  reverse: boolean;
  imageClassName?: string; // 추가 스타일링을 위한 className
}

export default function ProcessCard({
  order,
  title,
  description,
  imageSrc,
  reverse = false,
}: ProcessCardProps) {
  return (
    <>
      {/* pc버전 */}
      <div className={`hidden h-full w-full rounded-[5px] bg-[#F1F3FF] p-[15px] lg:block`}>
        {/* 제목 */}
        <div className={`flex gap-[7px]`}>
          <div className="bg-primary flex h-[24px] w-[24px] items-center justify-center rounded-full">
            <span className="text-center text-[14px] leading-[14px] font-bold text-white">
              {order}
            </span>
          </div>
          <h1 className="bold text-[20px] leading-[20px]">{title}</h1>
        </div>
        {/* 이미지 */}

        <div className={`relative aspect-[1/1] w-full`}>
          <Image src={imageSrc} alt={title} fill className="object-contain" />
        </div>

        <p className="text-[14px] leading-[18px] text-[#464646]">{description}</p>
      </div>

      {/* tablet버전 */}
      <div className="hidden h-full w-full grid-cols-2 rounded-[5px] bg-[#F1F3FF] p-[15px] md:grid lg:hidden">
        {/* 이미지 */}

        <div
          className={`relative mx-auto my-auto flex aspect-[1/1] w-full max-w-[244px] items-center justify-center ${reverse ? 'order-2' : 'order-1'}`}
        >
          <Image src={imageSrc} alt={title} fill className="object-contain" />
        </div>

        {/* 제목 */}
        <div className={`flex flex-col gap-[15px] ${reverse ? 'order-1' : 'order-2'}`}>
          <div className="flex gap-[7px]">
            <div className="bg-primary flex h-[24px] w-[24px] items-center justify-center rounded-full">
              <span className="text-center text-[14px] leading-[14px] font-bold text-white">
                {order}
              </span>
            </div>
            <h1 className="bold text-[20px] leading-[20px]">{title}</h1>
          </div>

          <p className="max-w-[299px] text-[14px] leading-[18px] text-[#464646]">{description}</p>
        </div>
      </div>

      {/* mobile 버전 */}
      <div className="flex h-full w-full flex-col gap-[10px] rounded-[5px] bg-[#F1F3FF] p-[4%] md:hidden">
        <div className="flex gap-[7px]">
          <div className="bg-primary flex h-[24px] w-[24px] items-center justify-center rounded-full">
            <span className="text-center text-[14px] leading-[14px] font-bold text-white">
              {order}
            </span>
          </div>
          <h1 className="bold text-[16px] leading-[16px]">{title}</h1>
        </div>
        <p className="max-w-[299px] text-[10px] leading-[14px] text-[#464646]">{description}</p>
      </div>
    </>
  );
}
