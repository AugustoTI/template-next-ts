import { Portal } from '@ark-ui/react'
import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
} from '.'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'
import { buttonVariants } from '../button/button.styles'

export default {
  title: 'UI/HoverCard',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            target="_blank"
            href="https://github.com/AugustoTI"
            className={buttonVariants({ variant: 'link' })}
            rel="noreferrer"
          >
            @AugustoTI
          </a>
        </HoverCardTrigger>
        <Portal>
          <HoverCardPositioner>
            <HoverCardContent>
              <HoverCardArrow>
                <HoverCardArrowTip />
              </HoverCardArrow>

              <div className="flex justify-between gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/AugustoTI.png" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">AugustoTI</h4>
                  <p className="text-sm">
                    Developer passionate about technology and focused on delivering
                    quality
                  </p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCardPositioner>
        </Portal>
      </HoverCard>
    )
  },
}
