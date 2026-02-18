/** @type {import('next').NextConfig} */
const nextConfig = {
  //   eslint: {
  //   ignoreDuringBuilds: true,
  // },
  output: "standalone",
  
  images: {
    unoptimized: true,  
  }
};

export default nextConfig;
