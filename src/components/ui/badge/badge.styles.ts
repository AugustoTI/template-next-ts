import { tv, type VariantProps } from 'tailwind-variants'

export const badgeVariants = tv({
  base: 'inline-flex items-center gap-x-1 rounded-md px-2 py-1 text-xs font-medium whitespace-nowrap ring-1 ring-inset',
  variants: {
    variant: {
      primary: [
        'bg-primary-50 text-primary-900 ring-primary-500/30',
        'dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/30',
      ],
      neutral: [
        'bg-base-50 text-base-900 ring-base-500/30',
        'dark:bg-base-400/10 dark:text-base-400 dark:ring-base-400/20',
      ],
      success: [
        'bg-success-50 text-success-900 ring-success-600/30',
        'dark:bg-success-400/10 dark:text-success-400 dark:ring-success-400/20',
      ],
      error: [
        'bg-danger-50 text-danger-900 ring-danger-600/20',
        'dark:bg-danger-400/10 dark:text-danger-400 dark:ring-danger-400/20',
      ],
      warning: [
        'bg-warning-50 text-warning-900 ring-warning-600/30',
        'dark:bg-warning-400/10 dark:text-warning-500 dark:ring-warning-400/20',
      ],
    },
  },
})

export type BadgeVariantsProps = VariantProps<typeof badgeVariants>
