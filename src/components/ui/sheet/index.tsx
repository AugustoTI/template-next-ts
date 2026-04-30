import { Dialog as SheetPrimitive } from '@base-ui/react/dialog'
import { cn } from 'tailwind-variants'

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Backdrop>) {
  return (
    <SheetPrimitive.Backdrop
      className={cn(
        'fixed inset-0 isolate z-50 bg-black/50 duration-200 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 supports-backdrop-filter:backdrop-blur-xs',
        className,
      )}
      {...props}
    />
  )
}

interface DialogContentProps extends React.ComponentProps<typeof SheetPrimitive.Popup> {
  side?: 'top' | 'right' | 'bottom' | 'left'
}

function DialogContent({ className, side = 'right', ...props }: DialogContentProps) {
  return (
    <SheetPrimitive.Popup
      className={cn(
        'fixed z-50 flex flex-col gap-4 border-base-200 bg-white shadow-lg transition ease-in-out focus:outline-hidden data-closed:animate-out data-closed:duration-150 data-open:animate-in data-open:duration-500 dark:border-gray-900 dark:bg-primary-950/20',
        side === 'right' &&
          'inset-y-0 right-0 h-full w-3/4 border-l data-closed:slide-out-to-right data-open:slide-in-from-right sm:max-w-sm',
        side === 'left' &&
          'inset-y-0 left-0 h-full w-3/4 border-r data-closed:slide-out-to-left data-open:slide-in-from-left sm:max-w-sm',
        side === 'top' &&
          'inset-x-0 top-0 h-auto border-b data-closed:slide-out-to-top data-open:slide-in-from-top',
        side === 'bottom' &&
          'inset-x-0 bottom-0 h-auto border-t data-closed:slide-out-to-bottom data-open:slide-in-from-bottom',
        className,
      )}
      {...props}
    />
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex flex-col gap-1.5 p-4 pb-0', className)} {...props} />
}

function SheetBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex grow flex-col overflow-y-auto p-4 pt-0', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-4 pt-0 text-base-900 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn('text-base font-semibold text-base-900 dark:text-base-50', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={cn('text-base-500 dark:text-base-400', className)}
      {...props}
    />
  )
}

export const Sheet = Object.assign(SheetPrimitive.Root, {
  Close: SheetPrimitive.Close,
  Trigger: SheetPrimitive.Trigger,
  Portal: SheetPrimitive.Portal,
  Backdrop: DialogBackdrop,
  Content: DialogContent,
  Header: SheetHeader,
  Body: SheetBody,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
})
