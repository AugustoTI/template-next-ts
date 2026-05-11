import { cn } from 'tailwind-variants'

export function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'flex field-sizing-content max-h-28 min-h-16 w-full resize-none rounded-md border border-base-300 bg-white px-3 py-1.5 text-ellipsis text-base-900 placeholder-base-400 shadow-xs outline-hidden transition-colors focus:border-primary-500 disabled:border-base-300 disabled:bg-base-100 disabled:text-base-300 data-invalid:border-danger-500 sm:text-sm dark:border-base-800 dark:bg-base-950 dark:text-base-50 dark:placeholder-base-500 dark:focus:border-primary-700 dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500 dark:data-invalid:border-danger-500',
        className,
      )}
      {...props}
    />
  )
}
