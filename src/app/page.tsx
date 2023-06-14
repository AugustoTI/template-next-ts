import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
}

const HomePage: FC = () => {
  return <h1>Hello, Next.js!</h1>
}

export default HomePage
