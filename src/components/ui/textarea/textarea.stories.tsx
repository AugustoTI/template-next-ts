import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Textarea } from '.'

export default {
  title: 'UI/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

type Story = StoryObj<typeof Textarea>

export const Default: Story = {}
