import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Badge } from '.'

export default {
  title: 'UI/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      options: ['primary', 'neutral', 'warning', 'error', 'success'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Badge>

type Story = StoryObj<typeof Badge>

export const Default: Story = {}
