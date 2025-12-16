import {
  Field as ArkField,
  type FieldErrorTextProps,
  type FieldHelperTextProps,
  type FieldInputProps,
  type FieldRequiredIndicatorProps,
  type FieldRootProps,
  type FieldTextareaProps,
} from '@ark-ui/react/field'
import { Label, type LabelProps } from '@radix-ui/react-label'
import { tv } from 'tailwind-variants'

import { cn } from '~/utils/cn'

export function Field({ className, ...props }: FieldRootProps) {
  return <ArkField.Root className={cn('grid gap-2', className)} {...props} />
}

export const labelStyle = tv({
  base: [
    // base
    'flex items-center gap-2 text-sm leading-none font-medium',
    // text color
    'text-base-900 dark:text-base-50',
    // disabled
    'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:opacity-50',
  ],
})

export function FieldLabel({ className, ...props }: LabelProps) {
  return (
    <ArkField.Label asChild>
      <Label data-slot="label" className={labelStyle({ className })} {...props} />
    </ArkField.Label>
  )
}

export function FieldRequiredIndicator({
  className,
  children,
  ...props
}: FieldRequiredIndicatorProps) {
  return (
    <span
      aria-hidden
      data-part="required-indicator"
      className={cn("text-danger-500 [&_svg:not([class*='size-'])]:size-2", className)}
      {...props}
    >
      {children ? children : '*'}
    </span>
  )
}

export function FieldHelperText({ className, ...props }: FieldHelperTextProps) {
  return (
    <ArkField.HelperText
      className={cn('text-sm text-base-500 dark:text-base-300', className)}
      {...props}
    />
  )
}

export function FieldErrorText({ className, ...props }: FieldErrorTextProps) {
  return (
    <ArkField.ErrorText
      className={cn('text-sm text-danger-600 dark:text-danger-400', className)}
      {...props}
    />
  )
}

export function Textarea({ className, ...props }: FieldTextareaProps) {
  return (
    <ArkField.Textarea
      className={cn(
        // base
        'flex min-h-16 w-full rounded-md border px-3 py-1.5 text-ellipsis shadow-xs outline-hidden transition-colors sm:text-sm',
        // text color
        'text-base-900 dark:text-base-50',
        // border color
        'border-base-300 dark:border-base-800',
        // background color
        'bg-white dark:bg-base-950',
        // placeholder color
        'placeholder-base-400 dark:placeholder-base-500',
        // disabled
        'disabled:border-base-300 disabled:bg-base-100 disabled:text-base-300',
        'dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500',
        // focus
        'focus:border-primary-500 focus:ring-primary-200 focus-visible:ring-2 dark:focus:border-primary-700 dark:focus:ring-primary-700/30',
        // error
        'data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
        className,
      )}
      {...props}
    />
  )
}

export const inputStyles = tv({
  base: [
    // base
    'relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-hidden transition sm:text-sm [&:not([type="password"])]:text-ellipsis',
    // border color
    'border-base-300 dark:border-base-800',
    // text color
    'text-base-900 dark:text-base-50',
    // placeholder color
    'placeholder-base-400 dark:placeholder-base-500',
    // background color
    'bg-white dark:bg-base-950',
    // disabled
    'disabled:border-base-300 disabled:bg-base-100 disabled:text-base-400',
    'dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500',
    // file
    [
      'file:-my-2 file:-ml-2.5 file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:px-3 file:py-2 file:outline-hidden focus:outline-hidden disabled:pointer-events-none file:disabled:pointer-events-none',
      'file:border-solid file:border-base-300 file:bg-base-50 file:text-base-500 file:hover:bg-base-100 dark:file:border-base-800 dark:file:bg-base-950 dark:file:hover:bg-base-900/20 dark:file:disabled:border-base-700',
      'file:me-3 file:[border-inline-end-width:1px]',
      'file:disabled:bg-base-100 file:disabled:text-base-500 dark:file:disabled:bg-base-800',
    ],
    'focus:border-primary-500 focus:ring-primary-200 focus-visible:ring-2 dark:focus:border-primary-700 dark:focus:ring-primary-700/30',
    'data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
  ],
})

export function Input({ className, ...props }: FieldInputProps) {
  return <ArkField.Input className={inputStyles({ className })} {...props} />
}
