import { Input as InputPrimitive } from '@base-ui/react/input'
import { cn } from 'tailwind-variants'

export function Input({
  className,
  ...props
}: React.ComponentProps<typeof InputPrimitive>) {
  return (
    <InputPrimitive
      className={cn(
        'relative block w-full appearance-none rounded-md border border-base-300 bg-white px-2.5 py-2 text-base-900 placeholder-base-400 shadow-xs outline-hidden transition disabled:border-base-300 disabled:bg-base-100 disabled:text-base-400 sm:text-sm dark:border-base-800 dark:bg-base-950 dark:text-base-50 dark:placeholder-base-500 dark:disabled:border-base-700 dark:disabled:bg-base-800 dark:disabled:text-base-500 [&:not([type="password"])]:text-ellipsis',
        'focus:border-primary-500 focus:ring-primary-200 focus-visible:ring-2 data-invalid:border-danger-500 data-invalid:ring-2 data-invalid:ring-danger-200 dark:focus:border-primary-700 dark:focus:ring-primary-700/30 dark:data-invalid:border-danger-500 dark:data-invalid:ring-danger-500/30',
        [
          'file:-my-2 file:-ml-2.5 file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:px-3 file:py-2 file:outline-hidden focus:outline-hidden disabled:pointer-events-none file:disabled:pointer-events-none',
          'file:border-solid file:border-base-300 file:bg-base-50 file:text-base-500 file:hover:bg-base-100 dark:file:border-base-800 dark:file:bg-base-950 dark:file:hover:bg-base-900/20 dark:file:disabled:border-base-700',
          'file:me-3 file:[border-inline-end-width:1px]',
          'file:disabled:bg-base-100 file:disabled:text-base-500 dark:file:disabled:bg-base-800',
        ],
        className,
      )}
      {...props}
    />
  )
}
