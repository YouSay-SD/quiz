/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'interactive-examples.mdn.mozilla.net',
      'filedn.com',
      '48tools.com',
    ],
  },
}

module.exports = nextConfig
