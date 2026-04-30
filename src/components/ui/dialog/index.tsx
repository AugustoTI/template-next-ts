import { Dialog as DialogPrimitive } from '@base-ui/react/dialog'
import { cn } from 'tailwind-variants'

function DialogBackdrop({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Backdrop>) {
  return (
    <DialogPrimitive.Backdrop
      className={cn(
        'fixed inset-0 isolate z-50 bg-black/50 duration-200 data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 supports-backdrop-filter:backdrop-blur-xs',
        className,
      )}
      {...props}
    />
  )
}

function DialogViewport({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Viewport>) {
  return (
    <DialogPrimitive.Viewport
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center overflow-auto',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPrimitive.Popup
      className={cn(
        'grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border border-base-200 bg-white p-6 shadow-lg duration-200 outline-none data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 sm:max-w-sm dark:border-base-900 dark:bg-base-950',
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn('text-lg font-semibold text-base-900 dark:text-base-50', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn(
        'text-balance text-base-500 sm:text-pretty dark:text-base-400',
        className,
      )}
      {...props}
    />
  )
}

export const Dialog = Object.assign(DialogPrimitive.Root, {
  Trigger: DialogPrimitive.Trigger,
  Portal: DialogPrimitive.Portal,
  Backdrop: DialogBackdrop,
  Viewport: DialogViewport,
  Content: DialogContent,
  Close: DialogPrimitive.Close,
  Title: DialogTitle,
  Description: DialogDescription,
})
