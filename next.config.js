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
        pathname: "images/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "random/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "v0/b/web-store-57434.appspot.com/o/images/**",
      },
      {
        protocol: "https",
        hostname: "techcrunch.com",
        pathname: "wp-content/**",
      },
    ],
    domains: [
      "images.stockx.com",
      "source.unsplash.com",
      "firebasestorage.googleapis.com",
      "techcrunch.com",
    ],
  },
};

module.exports = nextConfig;
