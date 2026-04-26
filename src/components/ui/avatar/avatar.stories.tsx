import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Avatar } from '.'

export default {
  title: 'UI/Avatar',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="flex flex-row flex-wrap items-center gap-12">
        <Avatar>
          <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
          <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <Avatar.Fallback>ER</Avatar.Fallback>
        </Avatar>
        <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-white *:data-[slot=avatar]:grayscale dark:*:data-[slot=avatar]:ring-base-950">
          <Avatar>
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image src="https://github.com/leerob.png" alt="@leerob" />
            <Avatar.Fallback>LR</Avatar.Fallback>
          </Avatar>
          <Avatar>
            <Avatar.Image src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <Avatar.Fallback>ER</Avatar.Fallback>
          </Avatar>
          <Avatar>LT</Avatar>
        </div>
      </div>
    )
  },
}
