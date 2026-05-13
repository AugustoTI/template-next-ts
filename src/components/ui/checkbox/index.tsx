import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox'
import { cn } from 'tailwind-variants'

import { Icons } from '../icons'

export function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'relative inline-flex size-5 shrink-0 items-center justify-center rounded-sm border border-base-300 bg-white text-white shadow-xs transition duration-100 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        'data-disabled:border-base-300 data-disabled:bg-base-100 data-disabled:text-base-400',
        'dark:data-disabled:border-base-700 dark:data-disabled:bg-base-800 dark:data-disabled:text-base-500',
        'data-checked:border-transparent data-checked:bg-primary-600',
        'dark:data-checked:border-transparent dark:data-checked:bg-primary-600',
        'data-indeterminate:border-transparent data-indeterminate:bg-primary-600',
        'dark:data-indeterminate:border-transparent dark:data-indeterminate:bg-primary-600',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="group/checkbox-indicator">
        <Icons.Check
          aria-hidden
          className="hidden group-data-checked/checkbox-indicator:block"
        />
        <Icons.Minus
          aria-hidden
          className="hidden group-data-indeterminate/checkbox-indicator:block"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
