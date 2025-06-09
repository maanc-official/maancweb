const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Disable image optimization
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
