import { type Metadata } from 'next'
import { type FC } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
}

const HomePage: FC = () => {
  return <h1>Hello, Next.js!</h1>
}

export { HomePage as default }
