import { type Meta, type StoryObj } from '@storybook/nextjs'

import { NumberInput, NumberInputElement, NumberInputLabel } from '.'

export default {
  title: 'UI/NumberInput',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="flex">
        <NumberInput
          min={1}
          defaultValue="20"
          formatOptions={{
            currency: 'USD',
            style: 'currency',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }}
        >
          <NumberInputLabel>Label</NumberInputLabel>
          <NumberInputElement />
        </NumberInput>
      </div>
    )
  },
}
