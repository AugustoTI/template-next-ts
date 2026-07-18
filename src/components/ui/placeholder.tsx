import { cn } from '~/utils/cn'

function PlaceholderContainer({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('relative h-full overflow-hidden bg-muted', className)}
      {...props}
    />
  )
}

function PlaceholderPattern({
  className,
  fill = 'none',
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      className={cn('absolute inset-0 h-full w-full stroke-muted-foreground', className)}
      fill={fill}
      {...props}
    >
      <defs>
        <pattern
          id="pattern-1"
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3" />
        </pattern>
      </defs>
      <rect stroke="none" fill="url(#pattern-1)" width="100%" height="100%" />
    </svg>
  )
}

export { PlaceholderContainer, PlaceholderPattern }
