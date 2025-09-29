import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuChevronsUpDown } from 'react-icons/lu'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Collapsible',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Collapsible className="w-[350px] px-4">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h4 className="text-sm font-semibold">@AugustoTI starred 2 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <CollapsibleIndicator>
                <LuChevronsUpDown />
              </CollapsibleIndicator>
            </Button>
          </CollapsibleTrigger>
        </div>

        <div className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm">
            @ark-ui/react
          </div>
          <CollapsibleContent>
            <div className="rounded-md border px-4 py-2 font-mono text-sm">radix-ui</div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    )
  },
}
