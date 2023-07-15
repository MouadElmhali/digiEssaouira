/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      },
      {
        source: '/',
        destination: 'http://localhost:3000/'
      },
      {
        source: '/:path*',
        destination: 'http://localhost:3000/:path*'
      }
    ]
  }
};

module.exports = nextConfig;
