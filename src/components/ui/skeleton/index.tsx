import { cn } from 'tailwind-variants'

export function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'animate-skeleton rounded-md',
        '[--skeleton-highlight:--alpha(var(--color-white)/64%)] dark:[--skeleton-highlight:--alpha(var(--color-base-700)/100%)]',
        '[background:linear-gradient(120deg,transparent_40%,var(--skeleton-highlight),transparent_60%)_var(--color-base-300)_0_0/200%_100%_fixed]',
        'dark:[background:linear-gradient(120deg,transparent_40%,var(--skeleton-highlight),transparent_60%)_var(--color-base-800)_0_0/200%_100%_fixed]',
        className,
      )}
      {...props}
    />
  )
}
