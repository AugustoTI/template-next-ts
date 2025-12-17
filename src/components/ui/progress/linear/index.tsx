import { Progress as ArkProgress } from '@ark-ui/react/progress'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../../field'

export function ProgressLinear({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Root>) {
  return (
    <ArkProgress.Root
      className={cn('flex w-full flex-col gap-2', className)}
      {...props}
    />
  )
}

export function ProgressLinearLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Label>) {
  return <ArkProgress.Label className={cn(labelStyle(), className)} {...props} />
}

export function ProgressLinearValueText({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.ValueText>) {
  return <ArkProgress.ValueText className={cn('text-sm', className)} {...props} />
}

export function ProgressLinearTrack({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Track>) {
  return (
    <ArkProgress.Track
      className={cn(
        'h-2 w-full overflow-hidden rounded-full bg-base-200 dark:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function ProgressLinearRange({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Range>) {
  return (
    <ArkProgress.Range
      className={cn(
        'h-full bg-primary-500 transition-[width] duration-200 ease-in-out',
        className,
      )}
      {...props}
    />
  )
}
