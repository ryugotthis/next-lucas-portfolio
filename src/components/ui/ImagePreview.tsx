'use client';

import React from 'react';
import { useState } from 'react';
import Media from '../ui/Media';
import ArrowIcon from './ArrowIcon';
import ArrowHoverIcon from './ArrowHoverIcon';

interface ImagePreviewProps {
  url: string;
  imageSrc: string;
  alt?: string;
  className?: string;
}

export default function ImagePreview({
  url,
  imageSrc,
  alt = 'preview image',
  className = '',
}: ImagePreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    window.open(url, '_self', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-[2px] focus:outline-none md:rounded-[5px] ${className}`}
      aria-label={alt}
    >
      {/* Media 컴포넌트로 통일 */}
      <Media
        src={imageSrc}
        alt={alt}
        // className="transition-transform duration-500 ease-in-out group-hover:scale-105"
      />

      {/* 오버레이 버튼 */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          window.open(url, '_self', 'noopener,noreferrer');
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="absolute right-[20px] bottom-[20px] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full"
        aria-label="more button"
        tabIndex={0}
      >
        {isHovered ? <ArrowHoverIcon /> : <ArrowIcon />}
      </button>
    </div>
  );
}
