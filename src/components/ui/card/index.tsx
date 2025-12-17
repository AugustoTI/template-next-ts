import { ark, type HTMLProps } from '@ark-ui/react/factory'
import { cn } from 'tailwind-variants'

export function Card({ className, ...props }: HTMLProps<'div'>) {
  return (
    <ark.div
      className={cn(
        // base
        'relative w-full rounded-lg border p-6 text-left shadow-xs',
        // background color
        'bg-white dark:bg-base-950',
        // border color
        'border-base-300 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}
