/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
};

module.exports = nextConfig;
