import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Rating } from '.'

export default {
  title: 'UI/Rating',
  component: Rating,
} satisfies Meta<typeof Rating>

type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    rating: 3.5,
    showValue: true,
    editable: true,
  },
}

export const ReadOnly: Story = {
  args: {
    rating: 4,
    showValue: true,
    editable: false,
  },
}

export const HalfStar: Story = {
  args: {
    rating: 2.5,
    showValue: true,
    editable: false,
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Rating rating={3.5} showValue size="sm" />
      <Rating rating={3.5} showValue size="md" />
      <Rating rating={3.5} showValue size="lg" />
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <Rating.Root defaultValue={3} editable max={5}>
      <Rating.Stars size="md" />
      <Rating.Value />
    </Rating.Root>
  ),
}
