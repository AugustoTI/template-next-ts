import { type Meta, type StoryObj } from '@storybook/nextjs'

import { PinInput, PinInputControl, PinInputElement, PinInputLabel } from '.'

export default {
  title: 'UI/PinInput',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <PinInput>
        <PinInputLabel>Enter the code</PinInputLabel>
        <PinInputControl>
          {[0, 1, 2, 3].map((id, index) => (
            <PinInputElement key={id} index={index} />
          ))}
        </PinInputControl>
      </PinInput>
    )
  },
}
