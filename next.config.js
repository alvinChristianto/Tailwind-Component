/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        port: '',
        pathname: '/photo-1512621776951-a57141f2eefd/**',
      },
    ],
  },
}

module.exports = nextConfig
