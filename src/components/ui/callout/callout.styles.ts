import { tv, type VariantProps } from 'tailwind-variants'

export const calloutVariants = tv({
  base: 'flex flex-col overflow-hidden rounded-md p-4 text-sm',
  variants: {
    variant: {
      primary: [
        // text color
        'text-primary-900 dark:text-primary-400',
        // background color
        'bg-primary-50 dark:bg-primary-950/70',
      ],
      success: [
        // text color
        'text-success-900 dark:text-success-500',
        // background color
        'bg-success-50 dark:bg-success-950/70',
      ],
      error: [
        // text color
        'text-danger-900 dark:text-danger-300',
        // background color
        'bg-danger-50 dark:bg-danger-950/70',
      ],
      warning: [
        // text color
        'text-warning-900 dark:text-warning-500',
        // background color
        'bg-warning-50 dark:bg-warning-950/70',
      ],
      neutral: [
        // text color
        'text-base-900 dark:text-base-400',
        // background color
        'bg-base-100 dark:bg-base-800/70',
      ],
    },
  },
})

export type CalloutVariantsProps = VariantProps<typeof calloutVariants>
