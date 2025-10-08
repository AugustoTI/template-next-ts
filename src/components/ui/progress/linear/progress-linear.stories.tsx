import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  ProgressLinear,
  ProgressLinearLabel,
  ProgressLinearRange,
  ProgressLinearTrack,
  ProgressLinearValueText,
} from '.'

export default {
  title: 'UI/ProgressLinear',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <ProgressLinear className="max-w-80" defaultValue={42}>
        <div className="flex items-center justify-between">
          <ProgressLinearLabel>Download progress</ProgressLinearLabel>
          <ProgressLinearValueText />
        </div>
        <ProgressLinearTrack>
          <ProgressLinearRange />
        </ProgressLinearTrack>
      </ProgressLinear>
    )
  },
}
