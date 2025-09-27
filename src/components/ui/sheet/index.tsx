import { Dialog as SheetPrimitive } from '@ark-ui/react/dialog'
import * as React from 'react'

import { cn } from '~/utils/cn'

export function Sheet({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return (
    <SheetPrimitive.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      data-slot="sheet"
      {...props}
    />
  )
}

export function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

export function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.CloseTrigger>) {
  return <SheetPrimitive.CloseTrigger data-slot="sheet-close" {...props} />
}

export function SheetBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      data-slot="sheet-overlay"
      className={cn(
        // base
        'fixed inset-0 z-50 overflow-y-auto',
        // background color
        'bg-black/30',
        // animation
        'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  )
}

export function SheetPositioner({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Positioner>) {
  return <SheetPrimitive.Positioner data-slot="sheet-positioner" {...props} />
}

export function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPrimitive.Content
      data-slot="sheet-content"
      className={cn(
        // base
        'fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out focus:outline-hidden data-[state=closed]:animate-out data-[state=closed]:duration-150 data-[state=open]:animate-in data-[state=open]:duration-500',
        // border color
        'border-gray-200 dark:border-gray-900',
        // background
        'bg-white dark:bg-primary-950/20',
        side === 'right' &&
          'inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
        side === 'left' &&
          'inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        side === 'top' &&
          'inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        side === 'bottom' &&
          'inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        className,
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  )
}

export function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

export function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-body"
      className={cn('flex flex-1 flex-col p-4', className)}
      {...props}
    />
  )
}

export function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('flex flex-col gap-2 p-4 text-base-900 dark:text-base-50', className)}
      {...props}
    />
  )
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn(
        // base
        'text-base font-semibold',
        // text color
        'text-base-900 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-base-500', className)}
      {...props}
    />
  )
}
