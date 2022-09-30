/** @type {import('next').NextConfig} */
const nextConfig = {
  // target: "serverless",
  // experimental: { nftTracing: true },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.stockx.com",
        port: "",
        pathname: "images/**",
      },
    ],
    domains: ["images.stockx.com"],
  },
};

module.exports = nextConfig;
