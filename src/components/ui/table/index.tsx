import { cn } from 'tailwind-variants'

export function TableRoot({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      // Make table scrollable on mobile
      className={cn('w-full overflow-auto whitespace-nowrap', className)}
      {...props}
    />
  )
}

export function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <table
      className={cn(
        'w-full caption-bottom border-b border-base-200 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function TableHead({ ...props }: React.ComponentProps<'thead'>) {
  return <thead {...props} />
}

export function TableHeaderCell({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'border-b border-base-200 px-4 py-3.5 text-left text-sm font-semibold text-base-900 dark:border-base-800 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      className={cn('divide-y divide-base-200 dark:divide-base-800', className)}
      {...props}
    />
  )
}

export function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      className={cn(
        '[&_td:last-child]:pr-4 [&_th:last-child]:pr-4',
        '[&_td:first-child]:pl-4 [&_th:first-child]:pl-4',
        className,
      )}
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      className={cn('p-4 text-sm text-base-600 dark:text-base-400', className)}
      {...props}
    />
  )
}

export function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      className={cn(
        'border-t border-base-200 text-left font-medium text-base-900 dark:border-base-800 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      className={cn(
        'mt-3 px-3 text-center text-sm text-base-500 dark:text-base-500',
        className,
      )}
      {...props}
    />
  )
}
