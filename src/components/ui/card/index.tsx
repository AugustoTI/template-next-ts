import { ark, type HTMLProps } from '@ark-ui/react/factory'

import { cn } from '~/utils/cn'

export function Card({ className, ...props }: HTMLProps<'div'>) {
  return (
    <ark.div
      className={cn(
        // base
        'relative w-full rounded-lg border p-6 text-left shadow-xs',
        // background color
        'bg-white dark:bg-primary-950/20',
        // border color
        'border-base-200 dark:border-base-900',
        className,
      )}
      {...props}
    />
  )
}
