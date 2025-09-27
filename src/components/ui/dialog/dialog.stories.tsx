import { Portal } from '@ark-ui/react/portal'
import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogTitle,
  DialogTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Dialog',
  component: Dialog,
} satisfies Meta<typeof Dialog>

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open dialog</Button>
        </DialogTrigger>
        <Portal>
          <DialogBackdrop />
          <DialogPositioner>
            <DialogContent>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore nobis
                unde ex excepturi laboriosam!
              </DialogDescription>
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </DialogContent>
          </DialogPositioner>
        </Portal>
      </Dialog>
    )
  },
}
