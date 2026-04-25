import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { tv, VariantProps } from 'tailwind-variants'

import { Icons } from '../icons'

export const buttonBaseStyles = tv({
  base: "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-md border text-sm font-medium tracking-wide whitespace-nowrap shadow-xs outline-0 outline-offset-2 outline-primary-500 transition ease-in-out focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
})

export const buttonVariantStyles = tv({
  extend: buttonBaseStyles,
  variants: {
    variant: {
      primary: [
        'border-transparent bg-primary-600 text-white',
        'hover:bg-primary-600',
        'disabled:bg-primary-300 disabled:text-white dark:disabled:bg-primary-800 dark:disabled:text-primary-400',
      ],
      secondary: [
        'border-base-300 bg-white text-base-900 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        'hover:bg-base-200 dark:hover:bg-base-900',
        'disabled:text-base-400 dark:disabled:text-base-600',
      ],
      ghost: [
        'border-transparent bg-transparent text-base-900 shadow-none dark:text-base-50',
        'hover:bg-base-300 dark:hover:bg-base-800',
        'disabled:text-base-400 dark:disabled:text-base-600',
      ],
      danger: [
        'border-transparent bg-danger-600 text-white dark:bg-danger-700',
        'hover:bg-danger-700 dark:hover:bg-danger-600',
        'disabled:bg-danger-300 disabled:text-white dark:disabled:bg-danger-950 dark:disabled:text-danger-400',
      ],
      success: ['border-transparent bg-success-700 text-white', 'hover:bg-success-800'],
      link: [
        'border-transparent text-primary-600 underline-offset-4 shadow-none dark:text-primary-400',
        'hover:underline',
      ],
    },
    size: {
      sm: 'h-8 gap-1.5 rounded-md px-3',
      md: 'h-9 px-4 py-2',
      lg: 'h-10 rounded-md px-6 text-base',
      icon: 'size-9',
      'icon-sm': 'size-8',
      'icon-lg': 'size-10',
    },
  },
})

export type ButtonVariants = VariantProps<typeof buttonVariantStyles>

export interface ButtonProps
  extends React.ComponentProps<typeof ButtonPrimitive>, ButtonVariants {
  loading?: boolean
  loadingText?: string
  spinner?: React.FC<React.ComponentProps<'svg'>> | React.ReactElement
}

export function Button({
  loading,
  loadingText,
  spinner: Spinner = Icons.Loader,
  disabled,
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={buttonVariantStyles({ variant, size })}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <>
          {typeof Spinner === 'function' ? <Spinner className="animate-spin" /> : Spinner}
          {loadingText ? <span>{loadingText}</span> : children}
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  )
}
