import { NumberInput as ArkNumberInput } from '@ark-ui/react/number-input'
import { cn } from 'tailwind-variants'

import { FieldLabel, Input } from '../field'

export function NumberInput({
  className,
  ...props
}: React.ComponentProps<typeof ArkNumberInput.Root>) {
  return <ArkNumberInput.Root className={cn('grid gap-2', className)} {...props} />
}

export function NumberInputLabel({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.Label>) {
  return (
    <ArkNumberInput.Label asChild>
      <FieldLabel {...props} />
    </ArkNumberInput.Label>
  )
}

export function NumberInputElement({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.Input>) {
  return (
    <ArkNumberInput.Input asChild>
      <Input {...props} />
    </ArkNumberInput.Input>
  )
}

export function NumberInputControl({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.Control>) {
  return <ArkNumberInput.Control {...props} />
}

export function NumberInputDecrementTrigger({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.DecrementTrigger>) {
  return <ArkNumberInput.DecrementTrigger {...props} />
}

export function NumberInputIncrementTrigger({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.IncrementTrigger>) {
  return <ArkNumberInput.IncrementTrigger {...props} />
}

export function NumberInputValueText({
  ...props
}: React.ComponentProps<typeof ArkNumberInput.ValueText>) {
  return <ArkNumberInput.ValueText {...props} />
}
