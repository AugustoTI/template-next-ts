import { type Meta, type StoryObj } from '@storybook/nextjs'
import { TbReload } from 'react-icons/tb'

import {
  SignaturePad,
  SignaturePadClearTrigger,
  SignaturePadControl,
  SignaturePadGuide,
  SignaturePadLabel,
  SignaturePadSegment,
} from '.'

export default {
  title: 'UI/SignaturePad',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-xl">
        <SignaturePad>
          <SignaturePadLabel>Sign below</SignaturePadLabel>
          <SignaturePadControl>
            <SignaturePadSegment />
            <SignaturePadGuide />
            <SignaturePadClearTrigger>
              <TbReload />
            </SignaturePadClearTrigger>
          </SignaturePadControl>
        </SignaturePad>
      </div>
    )
  },
}
