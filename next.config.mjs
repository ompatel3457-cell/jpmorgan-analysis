/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jpmorgan-analysis',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig