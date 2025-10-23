import {
  Combobox as ArkCombobox,
  type ComboboxRootComponentProps,
} from '@ark-ui/react/combobox'
import { Label } from '@radix-ui/react-label'

import { cn } from '~/utils/cn'

import { Input, labelStyle } from '../field'

export function Combobox({
  lazyMount = true,
  unmountOnExit = true,
  className,
  ...props
}: ComboboxRootComponentProps) {
  return (
    <ArkCombobox.Root
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      className={cn('grid gap-2', className)}
      {...props}
    />
  )
}

export function ComboboxLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkCombobox.Label>) {
  return (
    <ArkCombobox.Label asChild>
      <Label className={labelStyle({ className })} {...props} />
    </ArkCombobox.Label>
  )
}

export function ComboboxControl({
  ...props
}: React.ComponentProps<typeof ArkCombobox.Control>) {
  return <ArkCombobox.Control {...props} />
}

export function ComboboxInput({
  ...props
}: React.ComponentProps<typeof ArkCombobox.Input>) {
  return (
    <ArkCombobox.Input asChild>
      <Input {...props} />
    </ArkCombobox.Input>
  )
}

export function ComboboxTrigger({
  ...props
}: React.ComponentProps<typeof ArkCombobox.Trigger>) {
  return <ArkCombobox.Trigger {...props} />
}

export function ComboboxClearTrigger({
  ...props
}: React.ComponentProps<typeof ArkCombobox.ClearTrigger>) {
  return <ArkCombobox.ClearTrigger {...props} />
}

export function ComboboxPositioner({
  ...props
}: React.ComponentProps<typeof ArkCombobox.Positioner>) {
  return <ArkCombobox.Positioner {...props} />
}

export function ComboboxContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkCombobox.Content>) {
  return (
    <ArkCombobox.Content
      className={cn(
        'relative max-h-(--available-height) w-auto origin-(--transform-origin) rounded-md border border-base-200 bg-white p-2.5 text-sm text-base-900 shadow-md outline-hidden data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function ComboboxItemGroup({
  ...props
}: React.ComponentProps<typeof ArkCombobox.ItemGroup>) {
  return <ArkCombobox.ItemGroup {...props} />
}

export function ComboboxItemGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkCombobox.ItemGroupLabel>) {
  return (
    <ArkCombobox.ItemGroupLabel
      className={cn(
        'px-2 py-2 text-xs font-medium tracking-wide text-base-500',
        className,
      )}
      {...props}
    />
  )
}

export function ComboboxItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkCombobox.Item>) {
  return (
    <ArkCombobox.Item
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

export function ComboboxItemText({
  ...props
}: React.ComponentProps<typeof ArkCombobox.ItemText>) {
  return <ArkCombobox.ItemText {...props} />
}

export function ComboboxItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkCombobox.ItemIndicator>) {
  return (
    <ArkCombobox.ItemIndicator
      className={cn('absolute left-2 flex size-4 items-center justify-center', className)}
      {...props}
    />
  )
}
