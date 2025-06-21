/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-tweet"],
  images: {
    unoptimized: true,
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
