import('./src/env.mjs')

const isDev = process.env.NODE_ENV !== 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: !isDev,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
