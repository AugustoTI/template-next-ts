import { NumberField } from '@base-ui/react/number-field'
import { cn } from 'tailwind-variants'

import { Button } from '../button'
import { Icons } from '../icons'
import { Input } from '../input'

function NumberInputRoot({ className, ...props }: NumberField.Root.Props) {
  return <NumberField.Root className={cn('flex flex-col gap-2', className)} {...props} />
}

function NumberInputGroup({ className, ...props }: NumberField.Group.Props) {
  return <NumberField.Group className={cn('flex', className)} {...props} />
}

function NumberInputDecrement({ ...props }: NumberField.Decrement.Props) {
  return (
    <NumberField.Decrement
      render={
        <Button
          size="icon-lg"
          variant="secondary"
          className="h-auto grow rounded-r-none border-r-0"
        />
      }
      {...props}
    >
      <Icons.Minus />
    </NumberField.Decrement>
  )
}

function NumberInputIncrement({ ...props }: NumberField.Increment.Props) {
  return (
    <NumberField.Increment
      render={
        <Button
          size="icon-lg"
          variant="secondary"
          className="h-auto grow rounded-l-none border-l-0"
        />
      }
      {...props}
    >
      <Icons.Plus />
    </NumberField.Increment>
  )
}

function NumberInputElement({ className, ...props }: NumberField.Input.Props) {
  return (
    <NumberField.Input
      render={<Input />}
      className={cn('rounded-l-none rounded-r-none text-center', className)}
      {...props}
    />
  )
}

export const NumberInput = Object.assign(NumberInputRoot, {
  Group: NumberInputGroup,
  Decrement: NumberInputDecrement,
  Increment: NumberInputIncrement,
  Input: NumberInputElement,
})
