import { type Meta, type StoryObj } from '@storybook/nextjs'
import Image from 'next/image'

import { HoverCard } from '.'
import { Button } from '../button'

export default {
  title: 'HoverCard',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="absolute inset-0 flex h-dvh items-center justify-center">
        <HoverCard>
          <HoverCard.Trigger render={<Button />}>Hover me</HoverCard.Trigger>

          <HoverCard.Portal>
            <HoverCard.Positioner>
              <HoverCard.Content>
                <div className="flex flex-col gap-2">
                  <Image
                    width={320}
                    height={150}
                    className="block rounded-xs"
                    src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
                    alt="Station Hofplein signage in Rotterdam, Netherlands"
                  />
                  <p className="text-sm leading-5 text-pretty text-base-900 dark:text-base-50">
                    <strong>Typography</strong> is the art and science of arranging type
                    to make written language clear, visually appealing, and effective in
                    communication.
                  </p>
                </div>
              </HoverCard.Content>
            </HoverCard.Positioner>
          </HoverCard.Portal>
        </HoverCard>
      </div>
    )
  },
}
