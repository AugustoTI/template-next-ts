import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Dialog } from '.'
import { Button } from '../button'

export default {
  title: 'UI/Dialog',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Dialog>
        <Dialog.Trigger render={Button}>Open Dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Viewport>
            <Dialog.Content>
              <Dialog.Title>Dialog Title</Dialog.Title>
              <Dialog.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore nobis
                unde ex excepturi laboriosam!
              </Dialog.Description>
              <Dialog.Close render={Button}>Close</Dialog.Close>
            </Dialog.Content>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog>
    )
  },
}
