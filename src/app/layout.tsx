import '~/styles/global.css'

import { ThemeProvider } from '@wrksz/themes/next'
import { i18nConfig } from '~/i18n/config'
import { I18nProvider } from 'next-i18next/client'
import { getResources, getT, initServerI18next } from 'next-i18next/server'
import { type Metadata } from 'next'
import { Geist, Roboto } from 'next/font/google'

import { cn } from '~/utils/cn'

initServerI18next(i18nConfig)

const geistHeading = Geist({ subsets: ['latin'], variable: '--font-heading' })
const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
  generator: 'NextJS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n, lng } = await getT()
  const resources = getResources(i18n)

  return (
    <html
      lang={lng}
      className={cn('antialiased', 'font-sans', roboto.variable, geistHeading.variable)}
      suppressHydrationWarning
    >
      <body>
        <I18nProvider language={lng} resources={resources}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
