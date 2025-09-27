import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
} satisfies Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render() {
    return (
      <div className="absolute inset-0 flex h-dvh items-center justify-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>Hover me</Button>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipContent>
              My content here
              <TooltipArrow />
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </div>
    )
  },
}
