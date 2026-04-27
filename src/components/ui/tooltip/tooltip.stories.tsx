import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Tooltip } from '.'
import { Button } from '../button'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tooltip>
        <Tooltip.Trigger render={Button}>Hover me</Tooltip.Trigger>
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
