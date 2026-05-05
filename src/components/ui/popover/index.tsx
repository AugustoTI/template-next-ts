import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import { cn } from 'tailwind-variants'

function PopoverPositioner({
  className,
  sideOffset = 4,
  alignOffset = 0,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Positioner>) {
  return (
    <PopoverPrimitive.Positioner
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={cn('isolate z-50', className)}
      {...props}
    />
  )
}

interface PopoverContentProps extends React.ComponentProps<
  typeof PopoverPrimitive.Popup
> {
  showArrow?: boolean
}

function PopoverContent({ className, ...props }: PopoverContentProps) {
  return (
    <PopoverPrimitive.Popup
      className={cn(
        'relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-md border border-base-200 bg-white p-2.5 text-sm text-base-900 shadow-md outline-hidden dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  )
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return <PopoverPrimitive.Title className={cn('font-medium', className)} {...props} />
}

export const Popover = Object.assign(PopoverPrimitive.Root, {
  Trigger: PopoverPrimitive.Trigger,
  Positioner: PopoverPositioner,
  Content: PopoverContent,
  Portal: PopoverPrimitive.Portal,
  Backdrop: PopoverPrimitive.Backdrop,
  Viewport: PopoverPrimitive.Viewport,
  Close: PopoverPrimitive.Close,
  Title: PopoverTitle,
  Description: PopoverPrimitive.Description,
})
