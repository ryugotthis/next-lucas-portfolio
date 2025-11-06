import Image from 'next/image';

type MediaProps = {
  src: string;
  alt?: string;
  fill?: boolean;              // 기본 true: 현재 레이아웃 패턴에 맞춤
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  poster?: string;
};

function mimeFrom(src: string) {
  const lower = src.toLowerCase();
  if (lower.endsWith('.mp4')) return 'video/mp4';
  if (lower.endsWith('.webm')) return 'video/webm';
  return undefined;
}

export default function Media({
  src,
  alt = 'media',
  fill = true,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = 'metadata',
  poster,
}: MediaProps) {
  if (!src) return null;
  const lower = src.toLowerCase();

  // video
  if (lower.endsWith('.mp4') || lower.endsWith('.webm')) {
    const type = mimeFrom(src);
    return (
      <video
        className={`h-full w-full object-cover ${className || ''}`}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        poster={poster}
      >
        <source src={src} type={type} />
      </video>
    );
  }

  // gif (애니메이션 유지)
  if (lower.endsWith('.gif')) {
    return <img src={src} alt={alt} className={`h-full w-full object-cover ${className || ''}`} />;
  }

  // image (jpg/png/webp 등)
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