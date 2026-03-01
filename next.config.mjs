/** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ⭐ 중요
  images: {
    unoptimized: true
  }
};

export default nextConfig;

export default nextConfig
