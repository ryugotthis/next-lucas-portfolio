import ImagePreview from './ImagePreview';

export interface PreviewCardProps {
  url: string;
  imageSrc: string;
  alt?: string;
  className?: string;
  title?: string;
  subtitle?: string; // 추가: 제목 위 작은 글씨 (분야)
  description?: string | React.ReactNode;
}

export default function PreviewCard({
  url,
  imageSrc,
  alt = 'preview image',
  className,
  title,
  subtitle,
  description,
}: PreviewCardProps) {
  return (
    <div>
      <ImagePreview url={url} imageSrc={imageSrc} alt={alt} className={className} />

      {subtitle ? (
        // subtitle이 있으면: 모든 화면에서 소제목 + 제목 표시
        <div className="mt-[8px] md:mt-[12px]">
          <p className="text-text-sub text-[10px] uppercase md:text-[14px] lg:text-[16px]">
            {subtitle}
          </p>
          <h2 className="text-primary text-[16px] uppercase md:text-[20px] lg:text-[28px]">
            {title}
          </h2>
        </div>
      ) : (
        // subtitle이 없으면: 기존 방식 그대로 (데스크탑/태블릿에서만 표시)
        <>
          <h2 className="bold mt-[8px] mb-[3px] hidden md:block md:text-[16px] lg:text-[24px]">
            {title}
          </h2>
          <p className="text-description hidden text-[14px] leading-[16px] md:block md:text-[11px] md:leading-[13px] lg:text-[14px] lg:leading-[16px]">
            {description}
          </p>
        </>
      )}
    </div>
  );
}
