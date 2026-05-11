import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Popover } from '.'
import { Button } from '../button'

export default {
  title: 'UI/Popover',
  component: Popover,
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="absolute inset-0 flex h-dvh items-center justify-center">
        <Popover>
          <Popover.Trigger render={<Button />}>Open Popover</Popover.Trigger>
          <Popover.Portal>
            <Popover.Positioner>
              <Popover.Content>
                <Popover.Title>Popover Title</Popover.Title>
                <Popover.Description>
                  This is description of the popover.
                </Popover.Description>
              </Popover.Content>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover>
      </div>
    )
  },
}
