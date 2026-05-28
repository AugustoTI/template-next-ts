import { Fieldset as FieldsetPrimitive } from '@base-ui/react/fieldset'
import { cn } from 'tailwind-variants'

function FieldsetRoot({ ...props }: FieldsetPrimitive.Root.Props) {
  return <FieldsetPrimitive.Root {...props} />
}

function FieldsetLegend({ className, ...props }: FieldsetPrimitive.Legend.Props) {
  return (
    <FieldsetPrimitive.Legend className={cn('font-semibold', className)} {...props} />
  )
}

export const Fieldset = Object.assign(FieldsetRoot, {
  Legend: FieldsetLegend,
})
