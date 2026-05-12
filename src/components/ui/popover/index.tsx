import { Popover as PopoverPrimitive } from '@base-ui/react/popover'
import { cn } from 'tailwind-variants'

function PopoverPositioner({
  className,
  sideOffset = 10,
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

function PopoverContent({
  className,
  showArrow = true,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Popup
      className={cn(
        'relative h-(--popup-height,auto) w-(--popup-width,auto) origin-(--transform-origin) rounded-md border border-base-200 bg-white p-2.5 text-sm text-base-900 shadow-md outline-hidden dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    >
      {showArrow && (
        <PopoverPrimitive.Arrow className="flex data-[side=bottom]:-top-2.25 data-[side=left]:-right-3.5 data-[side=left]:rotate-90 data-[side=right]:-left-3.5 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2.25 data-[side=top]:rotate-180">
          <ArrowSvg />
        </PopoverPrimitive.Arrow>
      )}
      {children}
    </PopoverPrimitive.Popup>
  )
}

function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return <PopoverPrimitive.Title className={cn('font-medium', className)} {...props} />
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className="fill-white dark:fill-base-950"
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className="fill-base-200 dark:fill-base-800"
      />
    </svg>
  )
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
