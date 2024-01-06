import '~/styles/global.css'

import { type ReactNode } from 'react'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
