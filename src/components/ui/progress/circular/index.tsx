import { Progress as ArkProgress } from '@ark-ui/react/progress'

import { cn } from '~/utils/cn'

import { labelStyle } from '../../field'

export function ProgressCircular({
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

export function ProgressCircularLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Label>) {
  return <ArkProgress.Label className={cn(labelStyle(), className)} {...props} />
}

export function ProgressCircularValueText({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.ValueText>) {
  return <ArkProgress.ValueText className={cn('text-sm', className)} {...props} />
}

export function ProgressCircularContainer({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.Circle>) {
  return (
    <ArkProgress.Circle
      className={cn('[--size:64px] [--thickness:4px]', className)}
      {...props}
    />
  )
}

export function ProgressCircularTrack({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.CircleTrack>) {
  return (
    <ArkProgress.CircleTrack
      strokeWidth="4"
      fill="none"
      className={cn('stroke-base-200 dark:stroke-base-800', className)}
      {...props}
    />
  )
}

export function ProgressCircularRange({
  className,
  ...props
}: React.ComponentProps<typeof ArkProgress.CircleRange>) {
  return (
    <ArkProgress.CircleRange
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
      className={cn('stroke-primary-500 transition duration-200 ease-in-out', className)}
      {...props}
    />
  )
}
