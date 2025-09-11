/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Only set basePath and assetPrefix for production builds (GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/technicals',
    assetPrefix: '/technicals/',
  }),
}

export default nextConfig