import Image from 'next/image';

type MediaProps = {
  src: string;
  alt?: string;
  fill?: boolean;
  className?: string;
};

export default function Media({ src, alt = 'media', fill, className }: MediaProps) {
  if (!src) return null;

  const lower = src.toLowerCase();

  // 비디오 처리
  if (lower.endsWith('.mp4') || lower.endsWith('.webm')) {
    return (
      <video
        className={`h-full w-full object-cover ${className || ''}`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  // gif는 애니메이션 유지 위해 <img>
  if (lower.endsWith('.gif')) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className || ''}`} />;
  }

  // 기본은 next/image (jpg, png, webp 등)
  if (fill) {
    return <Image src={src} alt={alt} fill className={`object-cover ${className || ''}`} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={800}
      height={600}
      className={`object-cover ${className || ''}`}
    />
  );
}
