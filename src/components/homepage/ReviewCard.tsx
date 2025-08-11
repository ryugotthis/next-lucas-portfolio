import Image from 'next/image';

interface ReviewProps {
  imageSrc: string;
  name: string;
  role: string;
  content?: string | React.ReactNode;
}

export default function ReviewCard({ imageSrc, name, role, content }: ReviewProps) {
  return (
    <div className="rounded-[2px] bg-[#F1F3FF] p-[5%] md:rounded-[5px]">
      <div className="flex items-center">
        <div className="relative h-[59px] w-[59px] overflow-hidden rounded-full md:h-[30px] md:w-[30px] lg:h-[59px] lg:w-[59px]">
          <Image src={imageSrc} alt={`${name} photo`} fill />
        </div>
        <div className="ml-[10px] md:ml-[9px] lg:ml-[10px]">
          <h1 className="bold text-[18px] md:text-[14px] lg:text-[18px]">{name}</h1>
          <h2 className="text-[10px] md:text-[10px] lg:text-[14px]">{role}</h2>
        </div>
      </div>
      <p className="mt-[11px] text-[12px] leading-[14px] md:mt-[17px] lg:text-[14px] lg:leading-[18px]">
        {content}
      </p>
    </div>
  );
}
