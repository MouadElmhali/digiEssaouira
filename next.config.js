/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/blog',
        destination: 'http://localhost:3001/blog'
      },
      {
        source: '/blog/:path*',
        destination: 'http://localhost:3001/blog/:path*'
      }
    ]
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    return config;
  },
};

module.exports = nextConfig;
