import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipPositioner,
  TooltipTrigger,
} from '.'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tooltip>
        <TooltipTrigger className="rounded-md bg-base-900 px-3 py-1.5 text-sm text-base-50">
          Hover me
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipPositioner>
            <TooltipContent>
              <p>Tooltip content</p>
            </TooltipContent>
          </TooltipPositioner>
        </TooltipPortal>
      </Tooltip>
    )
  },
}
