import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn.sanity.io','shahamanatcraftint.com','img.freepik.com','miro.medium.com','tailwindui.com', 'images.unsplash.com','media.istockphoto.com','www.shutterstock.com','encrypted-tbn0.gstatic.com','media.licdn.com','assets.aceternity.com']
  },
  env: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    SANITY_STUDIO_DATASET: process.env.SANITY_STUDIO_DATASET,
  }
};

export default nextConfig;
