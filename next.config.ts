import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // 정적 사이트(SGG-only)로 완전히 내보낼 때만 사용.
  // 현재는 API 라우트를 사용하므로 비활성화 (동적 호스팅)
  trailingSlash: false, // 서버/동적 호스팅 환경(Vercel)에서는 불필요. 정적 export 시 true로 설정 가능.
  images: {
    unoptimized: false, // 이미지 최적화 활성화 (정적 export 시 true로 변경)
  },
};

export default nextConfig;
