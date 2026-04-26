import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Placeholder } from '.'

export default {
  title: 'UI/Placeholder',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-96">
        <Placeholder className="h-48">
          <Placeholder.Pattern />
        </Placeholder>
      </div>
    )
  },
}
