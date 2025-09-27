import { Select as ArkSelect, type SelectRootProps } from '@ark-ui/react/select'
import { Label } from '@radix-ui/react-label'
import React from 'react'

import { cn } from '~/utils/cn'

import { labelStyle } from '../field'

export const SelectHidden = ArkSelect.HiddenSelect

export function Select<T>({
  className,
  positioning,
  loopFocus = true,
  lazyMount = true,
  unmountOnExit = true,
  ...props
}: SelectRootProps<T>) {
  return (
    <ArkSelect.Root
      className={cn('grid gap-2', className)}
      loopFocus={loopFocus}
      positioning={{ sameWidth: true, ...positioning }}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...props}
    />
  )
}

export function SelectLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkSelect.Label>) {
  return (
    <ArkSelect.Label asChild className={labelStyle({ className })} {...props}>
      <Label>{children}</Label>
    </ArkSelect.Label>
  )
}

export function SelectControl({
  ...props
}: React.ComponentProps<typeof ArkSelect.Control>) {
  return <ArkSelect.Control {...props} />
}

export function SelectTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.Trigger>) {
  return (
    <ArkSelect.Trigger
      className={cn(
        // base
        'group/trigger flex w-full items-center justify-between gap-2 rounded-md border px-3 py-2 text-start shadow-xs outline-hidden transition select-none sm:text-sm',
        // border color
        'border-base-300 dark:border-base-800',
        // text color
        'text-base-900 dark:text-base-50',
        // placeholder
        'data-placeholder-shown:text-base-500 dark:data-placeholder-shown:text-base-500',
        // background color
        'bg-white dark:bg-base-950',
        // hover
        'hover:bg-base-50 dark:hover:bg-base-950/50',
        // disabled
        'data-disabled:bg-base-100 data-disabled:text-base-400',
        'dark:data-disabled:border-base-700 dark:data-disabled:bg-base-800 dark:data-disabled:text-base-500',
        // focus
        'focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:border-primary-700 dark:focus:ring-primary-700/30',
        // invalid
        'data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:data-invalid:border-danger-700 dark:data-invalid:ring-danger-700/30',
        className,
      )}
      {...props}
    />
  )
}

export function SelectValueText({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.ValueText>) {
  return (
    <ArkSelect.ValueText
      className={cn('line-clamp-1 max-w-4/5 text-wrap', className)}
      {...props}
    />
  )
}

export function SelectIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.Indicator>) {
  return (
    <ArkSelect.Indicator
      asChild
      className={cn(
        // base
        'size-4 shrink-0',
        // text color
        'text-base-400 dark:text-base-600',
        // disabled
        'group-data-disabled/trigger:text-base-300 dark:group-data-disabled/trigger:text-base-600',
        className,
      )}
      {...props}
    />
  )
}

export function SelectClearTrigger({
  ...props
}: React.ComponentProps<typeof ArkSelect.ClearTrigger>) {
  return <ArkSelect.ClearTrigger {...props} />
}

export function SelectPositioner({
  ...props
}: React.ComponentProps<typeof ArkSelect.Positioner>) {
  return <ArkSelect.Positioner {...props} />
}

export function SelectContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.Content>) {
  return (
    <ArkSelect.Content
      className={cn(
        // base
        'relative z-50 overflow-hidden overflow-y-auto rounded-md border shadow-xl shadow-black/[2.5%]',
        // background color
        'bg-white dark:bg-base-950',
        // text color
        'text-base-900 dark:text-base-50',
        // border color
        'border-base-200 dark:border-base-800',
        // animation
        'origin-(--transform-origin) data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
        className,
      )}
      {...props}
    />
  )
}

export function SelectItemGroup({
  ...props
}: React.ComponentProps<typeof ArkSelect.ItemGroup>) {
  return <ArkSelect.ItemGroup {...props} />
}

export function SelectItemGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.ItemGroupLabel>) {
  return (
    <ArkSelect.ItemGroupLabel
      className={cn(
        // base
        'px-3 py-2 text-xs font-medium tracking-wide',
        // text color
        'text-base-500',
        className,
      )}
      {...props}
    />
  )
}

export function SelectItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.Item>) {
  return (
    <ArkSelect.Item
      className={cn(
        // base
        'grid cursor-pointer grid-cols-[1fr_20px] gap-x-2 px-3 py-2 outline-hidden transition-colors data-[state=checked]:font-semibold sm:text-sm',
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

export function SelectItemText({
  className,
  ...props
}: React.ComponentProps<typeof ArkSelect.ItemText>) {
  return <ArkSelect.ItemText className={cn('flex-1 truncate', className)} {...props} />
}

export function SelectItemIndicator({
  ...props
}: React.ComponentProps<typeof ArkSelect.ItemIndicator>) {
  return <ArkSelect.ItemIndicator {...props} />
}
