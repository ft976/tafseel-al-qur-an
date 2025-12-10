import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Fix for Turbopack root directory warning
  experimental: {
    turbopack: {
      root: "."
    }
  }
};

export default nextConfig;