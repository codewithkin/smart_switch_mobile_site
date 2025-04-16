import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'loremflickr.com'], // Add the domain here
  },
};

export default nextConfig;
