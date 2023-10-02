import '@/styles/global.css'
import { type Metadata } from 'next'
import { type ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
