import '~/styles/global.css'

import { ThemeProvider } from '~/providers/theme-provider'
import { type Metadata } from 'next'

import { Tooltip } from '~/components/ui/tooltip'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
  generator: 'NextJS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <body className="relative isolate">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Tooltip.Provider>{children}</Tooltip.Provider>
        </ThemeProvider>
      </body>
    </html>
  )
}
