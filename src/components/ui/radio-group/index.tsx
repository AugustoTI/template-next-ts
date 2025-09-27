'use client'

import {
  RadioGroup as ArkRadioGroup,
  useRadioGroupItemContext,
} from '@ark-ui/react/radio-group'

import { cn } from '~/utils/cn'

import { labelStyle } from '../field'

export function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof ArkRadioGroup.Root>) {
  return (
    <ArkRadioGroup.Root className={cn('flex flex-col gap-2', className)} {...props} />
  )
}

export function RadioLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkRadioGroup.Label>) {
  return <ArkRadioGroup.Label className={cn(labelStyle(), className)} {...props} />
}

export function RadioItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkRadioGroup.Item>) {
  return (
    <ArkRadioGroup.Item className={cn('flex items-center gap-2', className)} {...props} />
  )
}

export function RadioItemText({
  className,
  ...props
}: React.ComponentProps<typeof ArkRadioGroup.ItemText>) {
  return <ArkRadioGroup.ItemText className={cn(labelStyle(), className)} {...props} />
}

export function RadioItemControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkRadioGroup.ItemControl>) {
  const { disabled, checked } = useRadioGroupItemContext()

  return (
    <ArkRadioGroup.ItemControl
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded-full border shadow-xs transition-colors duration-100',
        // background color
        'bg-white dark:bg-base-950',
        // border color
        'border-base-300 dark:border-base-800',
        // checked
        'data-[state=checked]:border-transparent data-[state=checked]:bg-primary-500',
        'dark:data-[state=checked]:border-transparent dark:data-[state=checked]:bg-primary-500',
        // disabled
        'data-[disabled]:border-base-300 data-[disabled]:bg-base-100',
        'dark:data-[disabled]:border-base-700 dark:data-[disabled]:bg-base-800',
        'data-[disabled]:cursor-not-allowed',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'size-2.5 rounded-full bg-transparent',
          checked && 'bg-white',
          checked && disabled && 'bg-white/60',
        )}
      />
    </ArkRadioGroup.ItemControl>
  )
}

export const RadioItemHiddenInput = ArkRadioGroup.ItemHiddenInput

export const RadioIndicator = ArkRadioGroup.Indicator
