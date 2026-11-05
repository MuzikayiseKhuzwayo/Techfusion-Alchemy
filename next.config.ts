import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/techfusion-alchemy-bucket/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
      {
        source: '/llms-full.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
  async redirects() {
    // Phase 1.5 / Tactics 36-37: Redirect hygiene so earned backlinks & aliases never hit 404
    return [
      {
        source: '/stats',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/benchmarks',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/study',
        destination: '/research',
        permanent: true,
      },
      {
        source: '/calc',
        destination: '/calculator',
        permanent: true,
      },
      {
        source: '/roi',
        destination: '/calculator',
        permanent: true,
      },
      {
        source: '/roi-calculator',
        destination: '/calculator',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
