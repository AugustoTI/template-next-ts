import { PasswordInput as ArkPasswordInput } from '@ark-ui/react/password-input'
import { Label, type LabelProps } from '@radix-ui/react-label'
import { cn } from 'tailwind-variants'

import { inputStyles, labelStyle } from '../field'
import { Icons } from '../icons'

export function PasswordInput({
  className,
  ...props
}: React.ComponentProps<typeof ArkPasswordInput.Root>) {
  return <ArkPasswordInput.Root className={cn('grid gap-2', className)} {...props} />
}

export function PasswordInputLabel({ className, ...props }: LabelProps) {
  return (
    <ArkPasswordInput.Label asChild>
      <Label data-slot="label" className={labelStyle({ className })} {...props} />
    </ArkPasswordInput.Label>
  )
}

export function PasswordInputControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkPasswordInput.Control>) {
  return <ArkPasswordInput.Control className={cn('relative', className)} {...props} />
}

export function PasswordInputElement({
  className,
  ...props
}: React.ComponentProps<typeof ArkPasswordInput.Input>) {
  return (
    <ArkPasswordInput.Input className={cn(inputStyles(), 'pe-9', className)} {...props} />
  )
}

export function PasswordInputVisibilityTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkPasswordInput.VisibilityTrigger>) {
  return (
    <ArkPasswordInput.VisibilityTrigger
      className={cn(
        'absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus-visible:z-10 focus-visible:border focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:text-white dark:focus-visible:border-primary-700 dark:focus-visible:ring-primary-700/30',
        className,
      )}
      {...props}
    />
  )
}

export function PasswordInputIndicator({
  children,
  fallback,
  ...props
}: React.ComponentProps<typeof ArkPasswordInput.Indicator>) {
  return (
    <ArkPasswordInput.Indicator
      {...props}
      fallback={fallback ? fallback : <Icons.Eye size={16} />}
    >
      {children ? children : <Icons.EyeOff size={16} />}
    </ArkPasswordInput.Indicator>
  )
}
