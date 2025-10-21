import { type Meta, type StoryObj } from '@storybook/nextjs'
import Image from 'next/image'

import { QrCode, QrCodeFrame, QrCodeOverlay, QrCodePattern } from '.'

export default {
  title: 'UI/QrCode',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div>
        <h2 className="text-base-950 dark:text-base-50">Use your phone&apos;s camera</h2>
        <QrCode value="https://github.com/AugustoTI" encoding={{ ecc: 'H' }}>
          <QrCodeFrame>
            <QrCodePattern />
          </QrCodeFrame>
          <QrCodeOverlay>
            <Image
              src="https://github.com/AugustoTI.png"
              alt=""
              width={280}
              height={280}
              className="object-center"
            />
          </QrCodeOverlay>
        </QrCode>
      </div>
    )
  },
}
