import '~/_app/styles/global.css'

import { type Metadata } from 'next'

import { Providers } from '~/_app/providers'
import { fontHeading, fontSans } from '~/_app/styles/fonts'
import { cn } from '~/shared/lib/cn'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
  generator: 'NextJS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn('antialiased', 'font-sans', fontSans.variable, fontHeading.variable)}
      suppressHydrationWarning
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
