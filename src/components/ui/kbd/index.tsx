import { cn } from 'tailwind-variants'

export function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-base-200 px-1 font-sans text-xs font-medium text-base-950 select-none dark:bg-base-700 dark:text-base-50',
        "[&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      {...props}
    />
  )
}

export function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}
