import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Slider } from '.'

export default {
  title: 'Slider',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Slider className="max-w-96">
        <div className="flex justify-between gap-2">
          <Slider.Label>Label</Slider.Label>
          <Slider.Value />
        </div>

        <Slider.Control>
          <Slider.Track>
            <Slider.Thumb />
          </Slider.Track>
        </Slider.Control>
      </Slider>
    )
  },
}
