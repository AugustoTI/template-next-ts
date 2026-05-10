import { Switch as SwitchPrimitive } from '@base-ui/react/switch'
import { tv, type VariantProps } from 'tailwind-variants'

export const switchVariants = tv({
  slots: {
    root: [
      'group relative isolate inline-flex shrink-0 cursor-pointer items-center rounded-full p-0.5 shadow-inner ring-1 outline-hidden transition ring-inset',
      'bg-base-200 ring-black/5 dark:bg-base-950 dark:ring-base-800',
      'data-checked:bg-primary-500 dark:data-checked:bg-primary-500',
      'data-disabled:cursor-default',
      'data-disabled:data-checked:bg-primary-200',
      'data-disabled:data-checked:ring-base-300',
      'dark:data-disabled:data-checked:ring-base-900',
      'dark:data-disabled:data-checked:bg-primary-900',
      'data-disabled:data-unchecked:ring-base-300',
      'data-disabled:data-unchecked:bg-base-100',
      'dark:data-disabled:data-unchecked:ring-base-700',
      'dark:data-disabled:data-unchecked:bg-base-800',
    ],
    thumb: [
      'pointer-events-none relative inline-block transform appearance-none rounded-full border-none bg-white shadow-lg outline-hidden transition-all duration-150 ease-in-out focus:border-none focus:outline-hidden focus:outline-transparent dark:bg-base-50',
      'group-data-disabled:bg-base-50 group-data-disabled:shadow-none dark:group-data-disabled:bg-base-500',
    ],
  },
  variants: {
    size: {
      default: {
        root: 'h-5 w-9',
        thumb: 'h-4 w-4 data-checked:translate-x-4 data-unchecked:translate-x-0',
      },
      small: {
        root: 'h-4 w-7',
        thumb: 'h-3 w-3 data-checked:translate-x-3 data-unchecked:translate-x-0',
      },
    },
  },
})

type SwitchVariant = VariantProps<typeof switchVariants>

interface SwitchProps extends SwitchPrimitive.Root.Props, SwitchVariant {
  classNames?: {
    control?: string
    thumb?: string
  }
}

export function Switch({ classNames, size = 'default', ...props }: SwitchProps) {
  const { root, thumb } = switchVariants({ size })

  return (
    <SwitchPrimitive.Root className={root({ className: classNames?.control })} {...props}>
      <SwitchPrimitive.Thumb className={thumb({ className: classNames?.thumb })} />
    </SwitchPrimitive.Root>
  )
}
