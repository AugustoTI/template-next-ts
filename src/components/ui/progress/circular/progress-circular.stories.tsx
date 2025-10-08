import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  ProgressCircular,
  ProgressCircularContainer,
  ProgressCircularLabel,
  ProgressCircularRange,
  ProgressCircularTrack,
  ProgressCircularValueText,
} from '.'

export default {
  title: 'UI/ProgressCircular',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <ProgressCircular className="max-w-80" defaultValue={65}>
        <ProgressCircularLabel>Loading progress</ProgressCircularLabel>
        <div className="flex w-fit flex-col items-center">
          <ProgressCircularContainer>
            <ProgressCircularTrack />
            <ProgressCircularRange />
          </ProgressCircularContainer>
          <ProgressCircularValueText />
        </div>
      </ProgressCircular>
    )
  },
}
