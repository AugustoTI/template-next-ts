import { Portal } from '@ark-ui/react/portal'
import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Popover,
  PopoverArrow,
  PopoverArrowTip,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render() {
    return (
      <div className="absolute inset-0 flex h-dvh items-center justify-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button>Open popover</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverPositioner>
              <PopoverContent>
                <PopoverArrow>
                  <PopoverArrowTip />
                </PopoverArrow>
                <PopoverTitle>Popover title</PopoverTitle>
                <PopoverDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque
                  placeat saepe.
                </PopoverDescription>
              </PopoverContent>
            </PopoverPositioner>
          </Portal>
        </Popover>
      </div>
    )
  },
}
