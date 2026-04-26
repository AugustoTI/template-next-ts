import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Input } from '.'

export default {
  title: 'UI/Input',
  component: Input,
} satisfies Meta<typeof Input>

type Story = StoryObj<typeof Input>

export const Default: Story = {}
