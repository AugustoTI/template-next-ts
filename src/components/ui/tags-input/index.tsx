import { TagsInput as ArkTagsInput } from '@ark-ui/react/tags-input'
import { Label } from '@radix-ui/react-label'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

export function TagsInput({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.Root>) {
  return (
    <ArkTagsInput.Root className={cn('grid gap-2', className)} {...props}>
      {children}
      <ArkTagsInput.HiddenInput />
    </ArkTagsInput.Root>
  )
}

export function TagsInputLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.Label>) {
  return (
    <ArkTagsInput.Label asChild>
      <Label className={labelStyle({ className })} {...props} />
    </ArkTagsInput.Label>
  )
}

export function TagsInputControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.Control>) {
  return (
    <ArkTagsInput.Control
      className={cn(
        'relative flex flex-wrap items-center gap-1.5 rounded-md border border-base-300 bg-white px-2.5 py-2 outline-hidden transition disabled:border-base-300 disabled:bg-base-100 sm:text-sm dark:border-base-800 dark:bg-base-950 dark:disabled:border-base-700 dark:disabled:bg-base-800',
        'focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-200 dark:focus-within:border-primary-700 dark:focus-within:ring-primary-700/30',
        'data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
        className,
      )}
      {...props}
    />
  )
}

export function TagsInputItem({
  ...props
}: React.ComponentProps<typeof ArkTagsInput.Item>) {
  return <ArkTagsInput.Item {...props} />
}

export function TagsInputItemPreview({
  className,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.ItemPreview>) {
  return (
    <ArkTagsInput.ItemPreview
      className={cn(
        'inline-flex h-6 items-center gap-1 rounded-md border border-base-300 ps-2 pe-1 font-medium dark:border-base-800',
        'text-base-900 data-highlighted:border-primary-500 data-highlighted:ring-2 data-highlighted:ring-primary-200 dark:text-base-50 dark:data-highlighted:border-primary-700 dark:data-highlighted:ring-primary-700/30',
        className,
      )}
      {...props}
    />
  )
}

export function TagsInputItemText({
  ...props
}: React.ComponentProps<typeof ArkTagsInput.ItemText>) {
  return <ArkTagsInput.ItemText {...props} />
}

export function TagsInputItemDeleteTrigger({
  ...props
}: React.ComponentProps<typeof ArkTagsInput.ItemDeleteTrigger>) {
  return <ArkTagsInput.ItemDeleteTrigger {...props} />
}

export function TagsInputItemElement({
  className,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.ItemInput>) {
  return (
    <ArkTagsInput.ItemInput
      autoComplete="off"
      className={cn('bg-transparent outline-none', className)}
      {...props}
    />
  )
}

export function TagsInputElement({
  className,
  ...props
}: React.ComponentProps<typeof ArkTagsInput.Input>) {
  return (
    <ArkTagsInput.Input
      autoComplete="off"
      className={cn(
        'bg-transparent text-base-900 outline-none dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function TagsInputClearTrigger({
  ...props
}: React.ComponentProps<typeof ArkTagsInput.ClearTrigger>) {
  return <ArkTagsInput.ClearTrigger {...props} />
}

export const TagsInputContext = ArkTagsInput.Context
