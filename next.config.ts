import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // SSG 빌드 설정
  trailingSlash: true, // 정적 호스팅을 위한 trailing slash
  images: {
    unoptimized: true, // 정적 내보내기 시 이미지 최적화 비활성화
  },
};

export default nextConfig;
