import ImagePreview from './ImagePreview';

export interface PreviewCardProps {
  url: string;
  imageSrc: string;
  alt?: string;
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
}

export default function PreviewCard({
  url,
  imageSrc,
  alt = 'preview image',
  className,
  title,
  description,
}: PreviewCardProps) {
  return (
    <div>
      <ImagePreview url={url} imageSrc={imageSrc} alt={alt} className={className} />
      <h2 className="bold mt-[8px] mb-[3px] hidden md:block md:text-[16px] lg:text-[24px]">
        {title}
      </h2>
      <p className="text-description hidden text-[14px] leading-[16px] md:block md:text-[11px] md:leading-[13px] lg:text-[14px] lg:leading-[16px]">
        {description}
      </p>
    </div>
  );
}
