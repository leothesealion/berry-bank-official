import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['sanity', '@sanity/vision'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Suppress specific React warnings from Sanity internals
      config.resolve.alias = {
        ...config.resolve.alias,
      };
    }
    return config;
  },
};

export default nextConfig;
