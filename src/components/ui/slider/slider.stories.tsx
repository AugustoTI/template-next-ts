import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Slider,
  SliderControl,
  SliderHiddenInput,
  SliderLabel,
  SliderRange,
  SliderThumb,
  SliderTrack,
  SliderValueText,
} from '.'

export default {
  title: 'UI/Slider',
  decorators: [
    Story => {
      return (
        <div className="max-w-80">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Slider>
        <div className="flex justify-between gap-2">
          <SliderLabel>Label</SliderLabel>
          <SliderValueText />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb index={0}>
            <SliderHiddenInput />
          </SliderThumb>
        </SliderControl>
      </Slider>
    )
  },
}
