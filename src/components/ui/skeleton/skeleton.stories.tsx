import { Meta, StoryObj } from '@storybook/nextjs'

import { Skeleton } from '.'

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
} satisfies Meta<typeof Skeleton>

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render() {
    return (
      <div className="flex max-w-96 gap-2">
        <Skeleton className="size-10 shrink-0 rounded-full" />
        <div className="w-full space-y-3">
          <Skeleton className="h-6 rounded-sm" />
          <Skeleton className="h-10 rounded-sm" />
        </div>
      </div>
    )
  },
}
