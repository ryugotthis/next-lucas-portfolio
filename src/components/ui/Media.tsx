"use client";

import { useEffect, useRef,useMemo } from 'react';
import Image from 'next/image';

type MediaProps = {
  src: string;
  alt?: string;
  fill?: boolean;              // 기본 true: 현재 레이아웃 패턴에 맞춤
  className?: string;


};

/** 확장자로부터 간단한 MIME 타입 추론 */
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

}: MediaProps) {
  if (!src) return null;

  // 파일 타입 판별(렌더 전 한 번만 계산)
  const { isVideo, isGif } = useMemo(() => {
    const lower = src.toLowerCase();
    return {
      isVideo: lower.endsWith(".mp4") || lower.endsWith(".webm"),
      isGif: lower.endsWith(".gif"),
    };
  }, [src]);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  /**
   * 뷰포트에 보일 때만 재생 / 안 보이면 일시정지
   * - iOS/Safari 자동재생 정책 대응: muted + playsInline + autoPlay 조합
   * - threshold 0.35: 35% 이상 보일 때 재생 (스크롤 중 토글 난조 완화)
   */

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const video = videoRef.current;

    // iOS 안정성: 속성 보장(혹시라도 동적으로 변했을 경우 대비)
    video.muted = true;
    video.playsInline = true;

    const onIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // 재생 시 에러는 무시(사용자 제스처 없이 play 실패 가능성 대비)
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, { threshold: 0.35 });
    observer.observe(video);

    return () => {
      observer.disconnect();
      // 컴포넌트 언마운트 시 정지(리소스 절약)
      video.pause();
    };
  }, [isVideo]);


  // video
  if (isVideo) {
    const type = mimeFrom(src);
    return (
      <video
        className={`h-full w-full object-cover ${className || ''}`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata" // 메타데이터만 로딩 → 초기 네트워크 부담↓
        poster=""
      >
        <source src={src} type={type} />
      </video>
    );
  }

  // gif (애니메이션 유지)
  if (isGif) {
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