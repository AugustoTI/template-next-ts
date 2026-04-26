import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Tooltip } from '.'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tooltip>
        <Tooltip.Trigger className="rounded-md bg-base-900 px-3 py-1.5 text-sm text-base-50">
          Hover me
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner>
            <Tooltip.Content>
              <p>Tooltip content</p>
            </Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip>
    )
  },
}
