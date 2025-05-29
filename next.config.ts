import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/nextjs-test",
  assetPrefix: "/nextjs-test/",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
