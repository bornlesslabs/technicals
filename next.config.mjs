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
  // Only set export output and GitHub Pages config for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/technicals',
    assetPrefix: '/technicals/',
  }),
}

export default nextConfig