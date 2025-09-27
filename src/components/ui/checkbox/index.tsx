import { Checkbox as ArkCheckbox } from '@ark-ui/react/checkbox'
import { LuCheck, LuMinus } from 'react-icons/lu'

import { cn } from '~/utils/cn'

import { labelStyle } from '../field'

export function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof ArkCheckbox.Root>) {
  return (
    <ArkCheckbox.Root
      className={cn('inline-flex items-center gap-2', className)}
      {...props}
    />
  )
}

export function CheckboxLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkCheckbox.Label>) {
  return (
    <ArkCheckbox.Label className={labelStyle({ className })} {...props}>
      {children}
    </ArkCheckbox.Label>
  )
}

export function CheckboxElement({
  className,
  ...props
}: React.ComponentProps<typeof ArkCheckbox.Control>) {
  return (
    <ArkCheckbox.Control
      className={cn(
        // base
        'relative inline-flex size-5 shrink-0 items-center justify-center rounded-sm border shadow-xs transition duration-100',
        // text color
        'text-white dark:text-base-50',
        // background color
        'bg-white dark:bg-base-950',
        // border color
        'border-base-300 dark:border-base-800',
        // disabled
        'data-disabled:border-base-300 data-disabled:bg-base-100 data-disabled:text-base-400',
        'dark:data-disabled:border-base-700 dark:data-disabled:bg-base-800 dark:data-disabled:text-base-500',
        // checked
        'data-[state=checked]:border-transparent data-[state=checked]:bg-primary-600',
        'dark:data-[state=checked]:border-transparent dark:data-[state=checked]:bg-primary-600',
        // indeterminate
        'data-[state=indeterminate]:border-transparent data-[state=indeterminate]:bg-primary-600',
        'dark:data-[state=indeterminate]:border-transparent dark:data-[state=indeterminate]:bg-primary-600',

        className,
      )}
      {...props}
    >
      <ArkCheckbox.Indicator>
        <LuCheck />
      </ArkCheckbox.Indicator>
      <ArkCheckbox.Indicator indeterminate>
        <LuMinus />
      </ArkCheckbox.Indicator>
    </ArkCheckbox.Control>
  )
}

export const CheckboxHiddenInput = ArkCheckbox.HiddenInput

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentProps<typeof ArkCheckbox.Group>) {
  return <ArkCheckbox.Group className={cn('flex flex-col gap-3', className)} {...props} />
}
