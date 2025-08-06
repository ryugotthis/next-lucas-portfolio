import Image from 'next/image';

interface ProcessCardProps {
  order: number;
  title: string;
  description: string;
  imageSrc: string;
  imageRatio?: string; // 예: "aspect-[4/3]", "aspect-square", "aspect-video"
  imageClassName?: string; // 추가 스타일링을 위한 className
}

export default function ProcessCard({
  order,
  title,
  description,
  imageSrc,
  imageRatio, // 기본값 설정
}: ProcessCardProps) {
  return (
    <>
      {/* pc버전 */}
      <div className="hidden lg:block">
        {/* 제목 */}
        <div className="flex gap-[7px]">
          <div className="bg-primary h-[24px] w-[24px] rounded-full">
            <span>{order}</span>
          </div>
          <h1 className="lg:text-[24px] lg:leading-[24px]">{title}</h1>
        </div>
        {/* 이미지 */}
        <div className={`relative ${imageRatio} ${title}`}>
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        </div>
        <p>{description}</p>
      </div>
      {/* tablet버전 */}
    </>
  );
}
