import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable trailing slash for cleaner URLs
  // trailingSlash: true,

  // Image optimization domains (add external image hosts here)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
