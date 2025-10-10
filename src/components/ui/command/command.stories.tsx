import { type Meta, type StoryObj } from '@storybook/nextjs'
import { BiSmile } from 'react-icons/bi'
import { LuCalculator, LuCalendar, LuCreditCard } from 'react-icons/lu'
import React from 'react'

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '.'
import { Icons } from '../icons'
import { Kbd } from '../kbd'

export default {
  title: 'UI/Command',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Command className="max-w-[450px] rounded-lg border border-base-200 shadow-md dark:border-base-800">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
}

function CommandDialogModeDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <p className="text-sm dark:text-base-50">
        Press <Kbd>⌘J</Kbd>
      </p>
      <CommandDialog open={open} onOpenChange={({ open }) => setOpen(open)}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <LuCalendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <BiSmile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <LuCalculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <Icons.User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <LuCreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Icons.Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export const Dialog_Mode: Story = {
  render: CommandDialogModeDemo,
}
