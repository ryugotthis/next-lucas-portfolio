'use client';

// import Image from 'next/image';
import React from 'react';
import ArrowIcon from './ArrowIcon';

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
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isVideo = imageSrc.endsWith('.mp4');

  return (
    <div
      onClick={handleClick}
      className={`group relative overflow-hidden rounded-[2px] focus:outline-none md:rounded-[5px] ${className}`}
      aria-label={alt}
    >
      {isVideo ? (
        <video
          src={imageSrc}
          className={`z-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105`}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div
          className="z-0 h-full w-full transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
        className="absolute right-[20px] bottom-[20px] flex h-8 w-8 items-center justify-center rounded-full"
        aria-label="more button"
        tabIndex={0}
      >
        {/* className="absolute right-[20px] bottom-[20px] flex h-8 w-8 items-center justify-center rounded-full bg-white/80 transition hover:bg-white" */}
        <ArrowIcon />

        {/* <Image
          src="/icons/More_button.svg"
          alt="more button icon"
          width={48}
          height={48}
          draggable={false}
        /> */}
      </button>
    </div>
  );
}
