import { RatingGroup as ArkRattingGroup } from '@ark-ui/react/rating-group'
import { Label } from '@radix-ui/react-label'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

export function RatingGroup({
  ...props
}: React.ComponentProps<typeof ArkRattingGroup.Root>) {
  return <ArkRattingGroup.Root className="grid gap-2" {...props} />
}

export function RatingGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkRattingGroup.Label>) {
  return (
    <ArkRattingGroup.Label asChild>
      <Label className={cn(labelStyle(), className)} {...props} />
    </ArkRattingGroup.Label>
  )
}

export function RatingGroupControl({
  children,
  className,
  ...props
}: React.ComponentProps<typeof ArkRattingGroup.Control>) {
  return (
    <ArkRattingGroup.Control className={cn('flex gap-0.5', className)} {...props}>
      {children}
      <ArkRattingGroup.HiddenInput />
    </ArkRattingGroup.Control>
  )
}

export function RatingGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkRattingGroup.Item>) {
  return (
    <ArkRattingGroup.Item
      className={cn(
        'cursor-pointer rounded-md fill-base-600 stroke-base-600 outline-hidden focus-visible:ring-2 focus-visible:ring-primary-500 data-highlighted:fill-primary-500 data-highlighted:stroke-primary-500',
        className,
      )}
      {...props}
    />
  )
}

export const RatingGroupItemContext = ArkRattingGroup.ItemContext
export const RatingGroupContext = ArkRattingGroup.Context
