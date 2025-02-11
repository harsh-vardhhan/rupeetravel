/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-tweet"],
  images: {
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
