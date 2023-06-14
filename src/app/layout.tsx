import '@/styles/global.css'
import { FC, ReactNode } from 'react'

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

export default RootLayout
