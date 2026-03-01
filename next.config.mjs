// next.config.mjs 또는 next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      // 현재 디렉터리를 강제로 루트로 지정합니다.
      root: "./",
    },
  },
};

export default nextConfig;
