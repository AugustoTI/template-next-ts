import { tv, type VariantProps } from 'tailwind-variants'

export const buttonVariants = tv({
  base: "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-md border text-sm font-medium tracking-wide whitespace-nowrap shadow-xs outline-0 outline-offset-2 outline-primary-500 transition ease-in-out focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none disabled:select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  variants: {
    variant: {
      primary: [
        // border
        'border-transparent',
        // text color
        'text-white',
        // background color
        'bg-primary-600',
        // hover color
        'hover:bg-primary-600',
        // disabled
        'disabled:bg-primary-300 disabled:text-white',
        'dark:disabled:bg-primary-800 dark:disabled:text-primary-400',
      ],
      secondary: [
        // border
        'border-base-300 dark:border-base-800',
        // text color
        'text-base-900 dark:text-base-50',
        // background color
        'bg-white dark:bg-base-950',
        //hover color
        'hover:bg-base-200 dark:hover:bg-base-900',
        // disabled
        'disabled:text-base-400',
        'dark:disabled:text-base-600',
      ],
      light: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-gray-900 dark:text-gray-50',
        // background color
        'bg-gray-200 dark:bg-gray-900',
        // hover color
        'hover:bg-gray-300/70 dark:hover:bg-gray-800/80',
        // disabled
        'disabled:bg-gray-100 disabled:text-gray-400',
        'dark:disabled:bg-gray-800 dark:disabled:text-gray-600',
      ],
      ghost: [
        // base
        'shadow-none',
        // border
        'border-transparent',
        // text color
        'text-base-900 dark:text-base-50',
        // hover color
        'bg-transparent hover:bg-base-300 dark:hover:bg-base-800',
        // disabled
        'disabled:text-base-400',
        'dark:disabled:text-base-600',
      ],
      danger: [
        // text color
        'text-white',
        // border
        'border-transparent',
        // background color
        'bg-danger-600 dark:bg-danger-700',
        // hover color
        'hover:bg-danger-700 dark:hover:bg-danger-600',
        // disabled
        'disabled:bg-danger-300 disabled:text-white',
        'dark:disabled:bg-danger-950 dark:disabled:text-danger-400',
      ],
      success: [
        // text color
        'text-white',
        // border
        'border-transparent',
        // background color
        'bg-success-700',
        // hover color
        'hover:bg-success-800',
      ],
      link: 'border-transparent text-primary-600 underline-offset-4 shadow-none hover:underline dark:text-primary-400',
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

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
