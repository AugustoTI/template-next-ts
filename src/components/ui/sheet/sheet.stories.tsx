import { Portal } from '@ark-ui/react/portal'
import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Sheet,
  SheetBackdrop,
  SheetBody,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPositioner,
  SheetTitle,
  SheetTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'Ui/Sheet',
  component: Sheet,
} satisfies Meta<typeof Sheet>

type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open</Button>
        </SheetTrigger>
        <Portal>
          <SheetBackdrop />
          <SheetPositioner>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Title</SheetTitle>
              </SheetHeader>
              <SheetBody>
                <SheetDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
                  explicabo!
                </SheetDescription>
              </SheetBody>
              <SheetFooter>Footer</SheetFooter>
            </SheetContent>
          </SheetPositioner>
        </Portal>
      </Sheet>
    )
  },
}
