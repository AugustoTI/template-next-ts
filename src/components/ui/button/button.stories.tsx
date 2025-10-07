import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Button } from '.'

export default {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'danger', 'success', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {}
