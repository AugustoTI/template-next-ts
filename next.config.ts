import '~/config/env'

import createNextIntlPlugin from 'next-intl/plugin'
import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  typedRoutes: true,
}

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/pt-BR.json',
  },
})
export default withNextIntl(nextConfig)
