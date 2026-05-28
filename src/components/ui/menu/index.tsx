import { Menu as MenuPrimitive } from '@base-ui/react/menu'
import { cn } from 'tailwind-variants'

import { Icons } from '../icons'

function MenuPositioner({
  side = 'bottom',
  sideOffset = 8,
  align = 'start',
  alignOffset = 0,
  className,
  ...props
}: MenuPrimitive.Positioner.Props) {
  return (
    <MenuPrimitive.Positioner
      side={side}
      sideOffset={sideOffset}
      align={align}
      alignOffset={alignOffset}
      className={cn('isolate z-50 outline-none', className)}
      {...props}
    />
  )
}

function MenuContent({ className, ...props }: MenuPrimitive.Popup.Props) {
  return (
    <MenuPrimitive.Popup
      className={cn(
        'z-50 max-h-(--available-height) min-w-48 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-base-200 bg-white text-base-900 shadow-xl shadow-black/2.5 outline-hidden dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        // transitions
        'data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  )
}

function MenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      className={cn(
        'flex min-h-8 cursor-default items-center gap-2 px-2 py-1 text-base-900 outline-none select-none sm:min-h-7 sm:text-sm dark:text-base-50 [&>svg]:pointer-events-none [&>svg]:-mx-0.5 [&>svg]:shrink-0 [&>svg:not([class*="opacity-"])]:opacity-80 [&>svg:not([class*="size-"])]:size-4.5 sm:[&>svg:not([class*="size-"])]:size-4',
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:data-highlighted:bg-base-200 dark:data-disabled:text-base-600 dark:data-disabled:data-highlighted:bg-base-900',
        'not-data-disabled:data-highlighted:bg-base-300 dark:not-data-disabled:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}

function MenuGroupLabel({ className, ...props }: MenuPrimitive.GroupLabel.Props) {
  return (
    <MenuPrimitive.GroupLabel
      className={cn(
        'px-2 py-1.5 text-xs font-medium text-base-500 dark:text-base-400',
        className,
      )}
      {...props}
    />
  )
}

function MenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props): React.ReactElement {
  return (
    <MenuPrimitive.Separator
      className={cn('h-px bg-gray-200 dark:bg-gray-800', className)}
      {...props}
    />
  )
}

export function MenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean
}): React.ReactElement {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(
        "flex min-h-8 items-center gap-2 px-2 py-1 text-base text-base-900 outline-none data-disabled:pointer-events-none data-disabled:opacity-64 sm:min-h-7 sm:text-sm dark:text-base-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&>svg:not(:last-child)]:-mx-0.5",
        'data-disabled:pointer-events-none data-disabled:opacity-64',
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        'data-popup-open:bg-base-300 dark:data-popup-open:bg-base-800',
        className,
      )}
      data-inset={inset}
      {...props}
    >
      {children}
      <Icons.ChevronRight className="ms-auto -me-0.5 opacity-80" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

export function MenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      checked={checked}
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[.75rem_1fr] items-center gap-2 py-1 ps-2 pe-4 text-base text-base-900 outline-none in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] data-disabled:pointer-events-none data-disabled:opacity-64 sm:min-h-7 sm:text-sm dark:text-base-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    >
      <MenuPrimitive.CheckboxItemIndicator className="col-start-1 -ms-0.5">
        <Icons.Check className="size-4" />
      </MenuPrimitive.CheckboxItemIndicator>
      <span className="col-start-2">{children}</span>
    </MenuPrimitive.CheckboxItem>
  )
}

export function MenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.RadioItem
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[.75rem_1fr] items-center gap-2 py-1 ps-2 pe-4 text-base text-base-900 outline-none in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] data-disabled:pointer-events-none data-disabled:opacity-64 sm:min-h-7 sm:text-sm dark:text-base-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    >
      <MenuPrimitive.RadioItemIndicator className="col-start-1 -ms-0.5">
        <Icons.Check className="size-4" />
      </MenuPrimitive.RadioItemIndicator>
      <span className="col-start-2">{children}</span>
    </MenuPrimitive.RadioItem>
  )
}

export const Menu = Object.assign(MenuPrimitive.Root, {
  Trigger: MenuPrimitive.Trigger,
  Group: MenuPrimitive.Group,
  Submenu: MenuPrimitive.SubmenuRoot,
  SubTrigger: MenuSubTrigger,
  RadioGroup: MenuPrimitive.RadioGroup,
  Portal: MenuPrimitive.Portal,
  Positioner: MenuPositioner,
  Content: MenuContent,
  Item: MenuItem,
  GroupLabel: MenuGroupLabel,
  Separator: MenuSeparator,
  CheckboxItem: MenuCheckboxItem,
  RadioItem: MenuRadioItem,
})
