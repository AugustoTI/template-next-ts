import { Radio as RadioPrimitive } from '@base-ui/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui/react/radio-group'
import { cn } from 'tailwind-variants'

function RadioGroupRoot({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive className={cn('flex flex-col gap-2', className)} {...props} />
  )
}

function RadioGroupInput({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      className={cn(
        'flex size-5 shrink-0 items-center justify-center rounded-full border border-base-300 bg-white shadow-xs transition-colors duration-100 dark:border-base-800 dark:bg-base-950',
        'data-checked:border-transparent data-checked:bg-primary-500 dark:data-checked:border-transparent dark:data-checked:bg-primary-500',
        'data-disabled:cursor-not-allowed data-disabled:border-base-300 data-disabled:bg-base-200 dark:data-disabled:border-base-700 dark:data-disabled:bg-base-800',
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="size-2 rounded-full not-data-disabled:data-checked:bg-white data-disabled:bg-white/80" />
    </RadioPrimitive.Root>
  )
}

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Radio: RadioGroupInput,
})
