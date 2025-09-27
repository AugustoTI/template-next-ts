import { Switch as ArkSwitch } from '@ark-ui/react/switch'
import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '~/utils/cn'

import { labelStyle } from '../field'

export const switchVariants = tv({
  slots: {
    root: [
      // base
      'group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 shadow-inner ring-1 outline-hidden transition-all ring-inset',
      'bg-base-200 dark:bg-base-950',
      // ring color
      'ring-black/5 dark:ring-base-800',
      // checked
      'data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-500',
      // disabled
      'data-disabled:cursor-default',
      // disabled checked
      'data-disabled:data-[state=checked]:bg-primary-200',
      'data-disabled:data-[state=checked]:ring-base-300',
      // disabled checked dark
      'dark:data-disabled:data-[state=checked]:ring-base-900',
      'dark:data-disabled:data-[state=checked]:bg-primary-900',
      // disabled unchecked
      'data-disabled:data-[state=unchecked]:ring-base-300',
      'data-disabled:data-[state=unchecked]:bg-base-100',
      // disabled unchecked dark
      'dark:data-disabled:data-[state=unchecked]:ring-base-700',
      'dark:data-disabled:data-[state=unchecked]:bg-base-800',
    ],
    thumb: [
      // base
      'pointer-events-none relative inline-block transform appearance-none rounded-full border-none shadow-lg outline-hidden transition-all duration-150 ease-in-out focus:border-none focus:outline-hidden focus:outline-transparent',
      // background color
      'bg-white dark:bg-base-50',
      // disabled
      'group-data-disabled:shadow-none',
      'group-data-disabled:bg-base-50 dark:group-data-disabled:bg-base-500',
    ],
  },
  variants: {
    size: {
      default: {
        root: 'h-5 w-9',
        thumb:
          'h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
      },
      small: {
        root: 'h-4 w-7',
        thumb:
          'h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0',
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof ArkSwitch.Root>) {
  return (
    <ArkSwitch.Root
      className={cn('flex items-center justify-center gap-2', className)}
      {...props}
    />
  )
}

export function SwitchLabel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkSwitch.Label>) {
  return (
    <ArkSwitch.Label className={labelStyle({ className })} {...props}>
      {children}
    </ArkSwitch.Label>
  )
}

interface SwitchElementProps
  extends Omit<React.ComponentProps<typeof ArkSwitch.Control>, 'className'>,
    VariantProps<typeof switchVariants> {
  classNames?: {
    control?: string
    thumb?: string
  }
}

export function SwitchElement({ classNames, size, ...props }: SwitchElementProps) {
  const { root, thumb } = switchVariants({ size })

  return (
    <ArkSwitch.Control className={root({ className: classNames?.control })} {...props}>
      <ArkSwitch.Thumb className={thumb({ className: classNames?.thumb })} />
    </ArkSwitch.Control>
  )
}

export const SwitchHiddenInput = ArkSwitch.HiddenInput
