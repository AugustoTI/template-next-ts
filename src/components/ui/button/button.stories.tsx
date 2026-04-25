import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuLoaderCircle } from 'react-icons/lu'

import { Button } from '.'

export default {
  title: 'UI/Button',
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    loadingText: 'Loading...',
  },
  argTypes: {
    spinner: {
      control: { type: 'select' },
      options: ['default', 'custom'],
      mapping: {
        default: undefined,
        custom: LuLoaderCircle,
      },
    },
    variant: {
      options: ['primary', 'secondary', 'ghost', 'danger', 'success', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      control: { type: 'select' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    loadingText: {
      control: { type: 'text' },
    },
  },
}
