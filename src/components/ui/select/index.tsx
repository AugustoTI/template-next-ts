import { Select as SelectPrimitive } from '@base-ui/react/select'
import { cn } from 'tailwind-variants'

import { Icons } from '../icons'

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn('line-clamp-1 data-placeholder:text-base-500', className)}
      {...props}
    />
  )
}
function SelectTrigger({ className, children, ...props }: SelectPrimitive.Trigger.Props) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'group/trigger flex w-full items-center justify-between gap-2 rounded-md border border-base-300 bg-white px-3 py-2 text-start text-base-900 shadow-xs outline-hidden transition select-none hover:bg-base-50 data-disabled:bg-base-100 data-disabled:text-base-400 sm:text-sm dark:border-base-800 dark:bg-base-950 dark:text-base-50 dark:hover:bg-base-950/50 dark:data-disabled:border-base-700 dark:data-disabled:bg-base-800 dark:data-disabled:text-base-500',
        'focus:border-primary-500 dark:focus:border-primary-700',
        'data-invalid:border-danger-500 dark:data-invalid:border-danger-700',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <Icons.ChevronDown className="size-4 shrink-0 text-base-400 transition-transform group-data-disabled/trigger:text-base-300 data-popup-open:rotate-180 dark:text-base-600" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}
function SelectContent({
  className,
  children,
  side = 'bottom',
  sideOffset = 8,
  alignOffset = 0,
  align = 'start',
  alignItemWithTrigger = false,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    'align' | 'alignOffset' | 'side' | 'sideOffset' | 'alignItemWithTrigger'
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            'relative isolate z-50 w-(--anchor-width) min-w-36 origin-(--transform-origin) rounded-md border border-base-300 bg-white text-base-900 shadow-xs data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton />
          {children}
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectList({ className, ...props }: SelectPrimitive.List.Props) {
  return (
    <SelectPrimitive.List
      className={cn(
        'relative max-h-(--available-height) scroll-pt-9 scroll-pb-6 overflow-y-auto py-1',
        className,
      )}
      {...props}
    />
  )
}

function SelectLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      className={cn(
        'px-3 py-2 text-xs font-medium tracking-wide text-base-500',
        className,
      )}
      {...props}
    />
  )
}
function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "grid cursor-default grid-cols-[1fr_1rem] items-center gap-2 py-2 pr-4 pl-3 text-sm outline-none select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-base-200 data-selected:font-bold dark:data-highlighted:bg-base-900 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="min-w-0 truncate">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className="pointer-events-none flex size-4 items-center justify-center">
            <Icons.Check aria-hidden className="pointer-events-none" />
          </span>
        }
      />
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      className={cn(
        'pointer-events-none -mx-1 my-1 h-px bg-base-300 dark:bg-base-700',
        className,
      )}
      {...props}
    />
  )
}
function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center rounded-md bg-white py-1 dark:bg-base-950 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <Icons.ChevronUp />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center rounded-md bg-white py-1 dark:bg-base-950 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <Icons.ChevronDown />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export const Select = Object.assign(SelectPrimitive.Root, {
  Trigger: SelectTrigger,
  Content: SelectContent,
  Group: SelectPrimitive.Group,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
  Value: SelectValue,
  List: SelectList,
})
