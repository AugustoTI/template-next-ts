import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Tooltip } from '.'
import { Button } from '../button'
import { Icons } from '../icons'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tooltip.Provider>
        <div className="flex items-center gap-2">
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

          <Tooltip>
            <Tooltip.Trigger render={<Button size="icon-lg" variant="secondary" />}>
              <Icons.Settings />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner>
                <Tooltip.Content>
                  <p>Settings</p>
                </Tooltip.Content>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip>
        </div>
      </Tooltip.Provider>
    )
  },
}
