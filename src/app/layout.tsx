import '@/styles/global.css'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'

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
