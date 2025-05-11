import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com', 'placekitten.com', 'placehold.co'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
