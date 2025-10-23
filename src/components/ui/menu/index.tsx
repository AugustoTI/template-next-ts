import { Menu as ArkMenu } from '@ark-ui/react/menu'

import { cn } from '~/utils/cn'

export function Menu({
  lazyMount = true,
  unmountOnExit = true,
  loopFocus = true,
  ...props
}: React.ComponentProps<typeof ArkMenu.Root>) {
  return (
    <ArkMenu.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      loopFocus={loopFocus}
      {...props}
    />
  )
}

export function MenuTrigger({ ...props }: React.ComponentProps<typeof ArkMenu.Trigger>) {
  return <ArkMenu.Trigger {...props} />
}

export function MenuPositioner({
  ...props
}: React.ComponentProps<typeof ArkMenu.Positioner>) {
  return <ArkMenu.Positioner {...props} />
}

export function MenuContent({ ...props }: React.ComponentProps<typeof ArkMenu.Content>) {
  return (
    <ArkMenu.Content
      className={cn(
        // base
        'relative origin-(--transform-origin) overflow-hidden overflow-y-auto rounded-md border p-1 shadow-xl shadow-black/2.5 outline-hidden',
        // widths
        'min-w-48',
        // heights
        'max-h-(--available-height)',
        // background color
        'bg-white dark:bg-base-950',
        // text color
        'text-base-900 dark:text-base-50',
        // border color
        'border-base-200 dark:border-base-800',
        // Transition
        'data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
      )}
      {...props}
    />
  )
}

export function MenuItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkMenu.Item>) {
  return (
    <ArkMenu.Item
      className={cn(
        // base
        'group/MenuItem relative flex items-center rounded-sm py-1.5 pr-1 pl-2 transition-colors select-none data-highlighted:font-semibold sm:text-sm',
        // text color
        'text-base-900 dark:text-base-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:hover:bg-none dark:data-disabled:text-base-600',
        // focus
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        // hover
        'hover:bg-base-100 dark:hover:bg-base-900',
        className,
      )}
      {...props}
    />
  )
}

export function MenuItemGroup({
  ...props
}: React.ComponentProps<typeof ArkMenu.ItemGroup>) {
  return <ArkMenu.ItemGroup {...props} />
}

export function MenuItemGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkMenu.ItemGroupLabel>) {
  return (
    <ArkMenu.ItemGroupLabel
      className={cn(
        // base
        'px-2 py-2 text-xs font-medium tracking-wide',
        // text color
        'text-base-500',
        className,
      )}
      {...props}
    />
  )
}

export function MenuTriggerItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkMenu.TriggerItem>) {
  return (
    <ArkMenu.TriggerItem
      className={cn(
        // base
        'relative flex cursor-default items-center rounded-sm py-1.5 pr-1 pl-2 outline-hidden transition-colors select-none sm:text-sm',
        // text color
        'text-base-900 dark:text-base-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:hover:bg-none dark:data-disabled:text-base-600',
        // focus
        'data-highlighted:bg-base-300 data-[state=open]:bg-base-300 dark:data-highlighted:bg-base-800 dark:data-[state=open]:bg-base-800',
        // hover
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    >
      {children}
    </ArkMenu.TriggerItem>
  )
}

export function MenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ArkMenu.RadioItemGroup>) {
  return <ArkMenu.RadioItemGroup {...props} />
}

export function MenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkMenu.RadioItem>) {
  return (
    <ArkMenu.RadioItem
      className={cn(
        // base
        'relative flex items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8 outline-hidden transition-colors select-none data-highlighted:font-semibold sm:text-sm',
        // text color
        'text-base-900 dark:text-base-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:hover:bg-none dark:data-disabled:text-base-600',
        // focus
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function MenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkMenu.CheckboxItem>) {
  return (
    <ArkMenu.CheckboxItem
      className={cn(
        // base
        'relative flex items-center gap-x-2 rounded-sm py-1.5 pr-1 pl-8 outline-hidden transition-colors select-none data-highlighted:font-semibold sm:text-sm',
        // text color
        'text-base-900 dark:text-base-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:hover:bg-none dark:data-disabled:text-base-600',
        // focus
        'data-highlighted:bg-base-300 dark:data-highlighted:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function MenuItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkMenu.ItemIndicator>) {
  return (
    <ArkMenu.ItemIndicator
      className={cn('absolute left-2 flex size-4 items-center justify-center', className)}
      {...props}
    />
  )
}

export function MenuItemText({
  ...props
}: React.ComponentProps<typeof ArkMenu.ItemText>) {
  return <ArkMenu.ItemText {...props} />
}

export function MenuContextTrigger({
  ...props
}: React.ComponentProps<typeof ArkMenu.ContextTrigger>) {
  return <ArkMenu.ContextTrigger {...props} />
}
