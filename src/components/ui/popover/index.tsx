import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { cn } from 'tailwind-variants'
import React from 'react'

export function Popover({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: React.ComponentProps<typeof ArkPopover.Root>) {
  return (
    <ArkPopover.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      data-slot="popover"
      {...props}
    />
  )
}

export function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof ArkPopover.Trigger>) {
  return <ArkPopover.Trigger data-slot="popover-trigger" {...props} />
}

export function PopoverIndicator({
  ...props
}: React.ComponentProps<typeof ArkPopover.Indicator>) {
  return <ArkPopover.Indicator data-slot="popover-indicator" {...props} />
}

export function PopoverPositioner({
  ...props
}: React.ComponentProps<typeof ArkPopover.Positioner>) {
  return <ArkPopover.Positioner data-slot="popover-positioner" {...props} />
}

export function PopoverContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkPopover.Content>) {
  return (
    <ArkPopover.Content
      data-slot="popover-content"
      className={cn(
        'relative max-h-(--available-height) w-72 origin-(--transform-origin) rounded-md border border-base-200 bg-white p-2.5 text-sm text-base-900 shadow-md outline-hidden data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof ArkPopover.Title>) {
  return (
    <ArkPopover.Title
      data-slot="popover-title"
      className={cn('font-medium', className)}
      {...props}
    />
  )
}

export function PopoverDescription({
  ...props
}: React.ComponentProps<typeof ArkPopover.Description>) {
  return <ArkPopover.Description data-slot="popover-description" {...props} />
}

export function PopoverCloseTrigger({
  ...props
}: React.ComponentProps<typeof ArkPopover.CloseTrigger>) {
  return <ArkPopover.CloseTrigger data-slot="popover-close-trigger" {...props} />
}

export function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof ArkPopover.Anchor>) {
  return <ArkPopover.Anchor data-slot="popover-anchor" {...props} />
}

export function PopoverArrow({
  className,
  ...props
}: React.ComponentProps<typeof ArkPopover.Arrow>) {
  return (
    <ArkPopover.Arrow
      data-slot="popover-arrow"
      className={cn(
        '[--arrow-background:var(--color-white)] [--arrow-size:0.75rem] dark:[--arrow-background:var(--default-950)]',
        className,
      )}
      {...props}
    />
  )
}

export function PopoverArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof ArkPopover.ArrowTip>) {
  return (
    <ArkPopover.ArrowTip
      data-slot="popover-arrow-tip"
      className={cn('border-s border-t border-base-200 dark:border-base-800', className)}
      {...props}
    />
  )
}
