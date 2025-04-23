import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.coworker.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.theforage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'theforage.wpengine.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
