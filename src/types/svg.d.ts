declare module '*.svg?url' {
  import { StaticImageData } from 'next/image'
  const content: StaticImageData

  export default content
}
