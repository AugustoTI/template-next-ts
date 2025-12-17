import { PinInput as ArkPinInput } from '@ark-ui/react/pin-input'
import { Label } from '@radix-ui/react-label'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

export function PinInput({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkPinInput.Root>) {
  return (
    <ArkPinInput.Root className={cn('grid gap-2', className)} {...props}>
      {children}
      <ArkPinInput.HiddenInput />
    </ArkPinInput.Root>
  )
}

export function PinInputLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkPinInput.Label>) {
  return (
    <ArkPinInput.Label asChild>
      <Label className={labelStyle({ className })} {...props} />
    </ArkPinInput.Label>
  )
}

export function PinInputControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkPinInput.Control>) {
  return <ArkPinInput.Control className={cn('flex gap-3', className)} {...props} />
}

export function PinInputElement({
  className,
  ...props
}: React.ComponentProps<typeof ArkPinInput.Input>) {
  return (
    <ArkPinInput.Input
      className={cn(
        'relative size-9 rounded-md border border-base-300 bg-white text-center text-base-900 shadow-xs outline-hidden transition focus:border-primary-500 focus:ring-primary-200 focus-visible:ring-2 disabled:border-base-300 disabled:bg-base-100 disabled:text-base-400 dark:border-base-800 dark:bg-base-950 dark:text-base-50 dark:focus:border-primary-700 dark:focus:ring-primary-700/30 dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500',
        'data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
        className,
      )}
      {...props}
    />
  )
}
