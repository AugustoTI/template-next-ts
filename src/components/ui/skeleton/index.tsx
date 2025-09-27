import { cn } from '~/utils/cn'

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-base-300 dark:bg-base-800', className)}
      {...props}
    />
  )
}
