import { type Meta, type StoryObj } from '@storybook/nextjs-vite'

import { Button } from '~/components/ui/button'

export default {
  title: 'UI/Button',
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Default: Story = {}
