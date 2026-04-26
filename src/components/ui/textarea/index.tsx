import { cn } from 'tailwind-variants'

export function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'flex field-sizing-content max-h-28 min-h-16 w-full resize-none rounded-md border border-base-300 bg-white px-3 py-1.5 text-ellipsis text-base-900 placeholder-base-400 shadow-xs outline-hidden transition-colors focus:border-primary-500 focus:ring-primary-200 focus-visible:ring-2 disabled:border-base-300 disabled:bg-base-100 disabled:text-base-300 data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 sm:text-sm dark:border-base-800 dark:bg-base-950 dark:text-base-50 dark:placeholder-base-500 dark:focus:border-primary-700 dark:focus:ring-primary-700/30 dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
        className,
      )}
      {...props}
    />
  )
}

// "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
