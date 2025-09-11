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
  // GitHub Pages / static export configuration (only when explicitly signaled)
  ...(process.env.GITHUB_PAGES === 'true') && {
    output: 'export',
    basePath: '/technicals',
    assetPrefix: '/technicals/',
  },
}

module.exports = nextConfig
