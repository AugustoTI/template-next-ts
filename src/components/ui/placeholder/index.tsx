import { cn } from '~/utils/cn'

export function Placeholder({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'size-full rounded-xl',
        'bg-[image:repeating-linear-gradient(315deg,_var(--default-300)_0,_var(--default-300)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed',
        'dark:bg-[image:repeating-linear-gradient(315deg,_var(--default-700)_0,_var(--default-700)_1px,_transparent_0,_transparent_50%)]',
        className,
      )}
      {...props}
    />
  )
}
