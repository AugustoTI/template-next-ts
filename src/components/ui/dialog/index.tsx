import {
  Dialog as ArkDialog,
  type DialogBackdropProps,
  type DialogCloseTriggerProps,
  type DialogContentProps,
  type DialogDescriptionProps,
  type DialogPositionerProps,
  type DialogRootProps,
  type DialogTitleProps,
  type DialogTriggerProps,
} from '@ark-ui/react/dialog'
import React from 'react'

import { cn } from '~/utils/cn'

export function Dialog({
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: DialogRootProps) {
  return (
    <ArkDialog.Root
      data-slot="dialog"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

export function DialogTrigger({ ...props }: DialogTriggerProps) {
  return <ArkDialog.Trigger data-slot="dialog-trigger" {...props} />
}

export function DialogClose({ ...props }: DialogCloseTriggerProps) {
  return <ArkDialog.CloseTrigger data-slot="dialog-close" {...props} />
}

export function DialogBackdrop({ className, ...props }: DialogBackdropProps) {
  return (
    <ArkDialog.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  )
}

export function DialogPositioner({ className, ...props }: DialogPositionerProps) {
  return (
    <ArkDialog.Positioner
      data-slot="dialog-positioner"
      className={cn(
        'fixed inset-0 z-60 flex items-center justify-center overflow-auto',
        className,
      )}
      {...props}
    />
  )
}

export function DialogContent({ className, ...props }: DialogContentProps) {
  return (
    <ArkDialog.Content
      data-slot="dialog-content"
      className={cn(
        'grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border border-base-200 bg-white p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg dark:border-base-900 dark:bg-primary-950/20',
        className,
      )}
      {...props}
    />
  )
}

export function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

export function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    />
  )
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <ArkDialog.Title
      data-slot="dialog-title"
      className={cn('text-lg font-semibold text-base-900 dark:text-base-50', className)}
      {...props}
    />
  )
}

export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <ArkDialog.Description
      data-slot="dialog-description"
      className={cn('text-base-500', className)}
      {...props}
    />
  )
}
