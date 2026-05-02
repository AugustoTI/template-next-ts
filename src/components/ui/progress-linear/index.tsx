import { Progress as ProgressPrimitive } from '@base-ui/react/progress'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

function ProgressLinearRoot({
  className,
  children,
  ...props
}: ProgressPrimitive.Root.Props): React.ReactElement {
  return (
    <ProgressPrimitive.Root
      className={cn('flex w-full flex-col gap-2', className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <ProgressLinearTrack>
          <ProgressLinearIndicator />
        </ProgressLinearTrack>
      )}
    </ProgressPrimitive.Root>
  )
}

function ProgressLinearLabel({
  className,
  ...props
}: ProgressPrimitive.Label.Props): React.ReactElement {
  return <ProgressPrimitive.Label className={cn(labelStyle(), className)} {...props} />
}

function ProgressLinearTrack({
  className,
  ...props
}: ProgressPrimitive.Track.Props): React.ReactElement {
  return (
    <ProgressPrimitive.Track
      className={cn(
        'block h-2 w-full overflow-hidden rounded-full bg-base-200 dark:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}
function ProgressLinearIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props): React.ReactElement {
  return (
    <ProgressPrimitive.Indicator
      className={cn('bg-primary-500 transition-all duration-200 ease-in-out', className)}
      {...props}
    />
  )
}
function ProgressLinearValue({
  className,
  ...props
}: ProgressPrimitive.Value.Props): React.ReactElement {
  return (
    <ProgressPrimitive.Value
      className={cn('text-sm tabular-nums', className)}
      {...props}
    />
  )
}

export const ProgressLinear = Object.assign(ProgressLinearRoot, {
  Label: ProgressLinearLabel,
  Track: ProgressLinearTrack,
  Indicator: ProgressLinearIndicator,
  Value: ProgressLinearValue,
})
