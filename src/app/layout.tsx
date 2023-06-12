import '@/styles/global.css'
import { type FC, type ReactNode } from 'react'

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export { RootLayout as default }
