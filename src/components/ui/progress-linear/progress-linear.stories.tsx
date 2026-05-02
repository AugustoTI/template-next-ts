import { type Meta, type StoryObj } from '@storybook/nextjs'

import { ProgressLinear } from '.'

export default {
  title: 'UI/Progress Linear',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-80">
        <ProgressLinear value={60}>
          <div className="flex items-center justify-between gap-2">
            <ProgressLinear.Label>Export data</ProgressLinear.Label>
            <ProgressLinear.Value />
          </div>
          <ProgressLinear.Track>
            <ProgressLinear.Indicator />
          </ProgressLinear.Track>
        </ProgressLinear>
      </div>
    )
  },
}
