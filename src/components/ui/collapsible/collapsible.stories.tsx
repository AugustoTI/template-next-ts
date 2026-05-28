import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Collapsible } from '.'
import { Icons } from '../icons'

export default {
  title: 'UI/Collapsible',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Collapsible className="max-w-48">
        <Collapsible.Trigger className="inline-flex items-center gap-2 text-sm font-medium data-panel-open:[&_svg]:rotate-180">
          Show recovery keys
          <Icons.ChevronDown className="size-4 transition-transform" />
        </Collapsible.Trigger>
        <Collapsible.Panel>
          <ul className="flex flex-col gap-1 py-2 text-sm text-base-950 dark:text-base-50">
            <li className="rounded-sm bg-base-200 px-2 py-1 font-mono dark:bg-base-800">
              4829-1735-6621
            </li>
            <li className="rounded-sm bg-base-200 px-2 py-1 font-mono dark:bg-base-800">
              9182-6407-5532
            </li>
            <li className="rounded-sm bg-base-200 px-2 py-1 font-mono dark:bg-base-800">
              3051-7924-9018
            </li>
          </ul>
        </Collapsible.Panel>
      </Collapsible>
    )
  },
}
