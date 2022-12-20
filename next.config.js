/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    loader: 'akamai',
    path: '',
    
  },
  assetPrefix: './'
}

module.exports = nextConfig
