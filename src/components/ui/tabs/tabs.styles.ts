import { tv, VariantProps } from 'tailwind-variants'

import { cn } from '~/utils/cn'

export const tabListVariants = tv({
  variants: {
    variant: {
      line: [
        // base
        'flex items-center justify-start border-b',
        // border color
        'border-base-300 dark:border-base-800',
      ],
      solid: [
        // base
        'inline-flex items-center justify-center rounded-md p-1',
        // background color
        'bg-base-200 dark:bg-base-800',
      ],
    },
  },
})
export type TabsListVariantProps = VariantProps<typeof tabListVariants>

export function getVariantStyles(tabVariant: TabsListVariantProps['variant']) {
  switch (tabVariant) {
    case 'line':
      return cn(
        // base
        '-mb-px items-center justify-center border-b-2 border-transparent px-3 pb-2 text-sm font-medium whitespace-nowrap transition',
        // text color
        'text-base-600 dark:text-base-400',
        // hover
        'hover:text-base-900 dark:hover:text-base-100',
        // border hover
        'hover:border-base-500 dark:hover:border-base-300',
        // selected
        'data-[focus]:border-primary-500 data-[focus]:text-primary-600',
        'dark:data-[focus]:border-primary-500 dark:data-[focus]:text-primary-500',
        // disabled
        'data-disabled:pointer-events-none',
        'data-disabled:text-base-300 dark:data-disabled:text-base-700',
      )
    case 'solid':
      return cn(
        // base
        'inline-flex items-center justify-center rounded-sm px-3 py-1 text-sm font-medium whitespace-nowrap ring-1 transition-all ring-inset',
        // text color
        'text-base-600 dark:text-base-400',
        // hover
        'hover:text-base-950 dark:hover:text-base-200',
        // ring
        'ring-transparent',
        // selected
        'data-[focus]:bg-white data-[focus]:text-base-900 data-[focus]:shadow-sm',
        'dark:data-[focus]:bg-base-950 dark:data-[focus]:text-base-50',
        // disabled
        'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:opacity-50 dark:data-disabled:text-base-600',
      )
  }
}
