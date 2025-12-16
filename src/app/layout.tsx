import '~/styles/global.css'

import { ThemeProvider } from '~/providers/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
  generator: 'NextJS',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const language = await getLocale()

  return (
    <html lang={language} className="antialiased" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
