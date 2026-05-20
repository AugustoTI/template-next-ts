import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Card } from '.'

export default {
  title: 'UI/Card',
  component: Card,
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render() {
    return (
      <Card>
        <p>Card content</p>
      </Card>
    )
  },
}
