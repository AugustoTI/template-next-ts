import { Field as FieldPrimitive } from '@base-ui/react/field'
import { cn, tv } from 'tailwind-variants'

import { Icons } from '../icons'

export const labelStyle = tv({
  base: [
    'flex items-center gap-0.5 text-sm leading-none font-medium',
    'text-base-900 dark:text-base-50',
    'data-disabled:pointer-events-none data-disabled:text-base-400 data-disabled:opacity-50',
  ],
})

function FieldRoot({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return <FieldPrimitive.Root className={cn('grid gap-2', className)} {...props} />
}

interface FieldLabelProps extends React.ComponentProps<typeof FieldPrimitive.Label> {
  requiredIndicator?: boolean
}

function FieldLabel({
  className,
  children,
  requiredIndicator,
  ...props
}: FieldLabelProps) {
  return (
    <FieldPrimitive.Label className={cn(labelStyle(), className)} {...props}>
      {children}
      {requiredIndicator && (
        <span>
          <Icons.Asterisk className="size-3 text-danger-500" />
        </span>
      )}
    </FieldPrimitive.Label>
  )
}

function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description
      className={cn('text-sm text-base-500 dark:text-base-300', className)}
      {...props}
    />
  )
}

function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      className={cn('text-sm text-danger-600 dark:text-danger-400', className)}
      {...props}
    />
  )
}

export const Field = Object.assign(FieldRoot, {
  Item: FieldPrimitive.Item,
  Label: FieldLabel,
  Control: FieldPrimitive.Control,
  Description: FieldDescription,
  Error: FieldError,
  Validity: FieldPrimitive.Validity,
})
