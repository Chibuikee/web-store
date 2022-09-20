/** @type {import('next').NextConfig} */
const nextConfig = {
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
