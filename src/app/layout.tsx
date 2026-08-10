import '~/styles/global.css'

import { ThemeProvider } from '@wrksz/themes/next'
import { type Metadata } from 'next'
import { Geist, Roboto } from 'next/font/google'

import { cn } from '~/utils/cn'

const geistHeading = Geist({ subsets: ['latin'], variable: '--font-heading' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
  generator: 'NextJS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={cn('antialiased', 'font-sans', roboto.variable, geistHeading.variable)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
