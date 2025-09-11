/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages and production configuration
  ...(process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true') && {
    output: 'export',
    basePath: '/technicals',
    assetPrefix: '/technicals/',
  },
}

module.exports = nextConfig
