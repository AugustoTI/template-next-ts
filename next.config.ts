import '~/shared/config/env'

import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
}

export default nextConfig
