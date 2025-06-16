/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    runtime: 'experimental-edge',  // Ensure Edge runtime is enabled
    nodejs_compat: true, // Enable Node.js compatibility
  },
  reactStrictMode: true,
  transpilePackages: ["react-tweet"],
  images: {
    unoptimized: true, //
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
