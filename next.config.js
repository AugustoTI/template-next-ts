const isDev = process.env.NODE_ENV !== 'production'

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  disable: isDev,
  reloadOnOnline: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    removeConsole: !isDev,
  },
})

module.exports = nextConfig
