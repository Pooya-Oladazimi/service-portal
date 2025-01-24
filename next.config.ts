import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.base_path,
  assetPrefix: process.env.base_path + '/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
