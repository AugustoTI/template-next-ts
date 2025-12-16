import { Steps as ArkSteps } from '@ark-ui/react/steps'

import { cn } from '~/utils/cn'

export function Steps({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.Root>) {
  return (
    <ArkSteps.Root className={cn('flex w-full flex-col gap-4', className)} {...props} />
  )
}

export function StepsList({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.List>) {
  return (
    <ArkSteps.List
      className={cn('flex w-full shrink grow gap-2', className)}
      {...props}
    />
  )
}

export function StepsItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.Item>) {
  return (
    <ArkSteps.Item
      className={cn('group flex shrink grow items-center gap-2 last:flex-0', className)}
      {...props}
    />
  )
}

export function StepsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.Trigger>) {
  return (
    <ArkSteps.Trigger className={cn('flex items-center gap-2', className)} {...props} />
  )
}

export function StepsIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.Indicator>) {
  return (
    <ArkSteps.Indicator
      className={cn(
        'flex size-8 shrink-0 grow-0 items-center justify-center rounded-full bg-base-300/70 text-sm font-medium data-complete:bg-primary-500 data-complete:text-base-50 data-current:bg-primary-500 data-current:text-base-50 dark:bg-base-800 dark:data-complete:bg-primary-600 dark:data-complete:text-base-50 dark:data-current:bg-primary-600 dark:data-current:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function StepsSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ArkSteps.Separator>) {
  return (
    <ArkSteps.Separator
      className={cn(
        'h-px shrink grow bg-base-300 group-last:hidden dark:bg-base-600',
        className,
      )}
      {...props}
    />
  )
}

export function StepsContent({
  ...props
}: React.ComponentProps<typeof ArkSteps.Content>) {
  return <ArkSteps.Content {...props} />
}

export function StepsCompletedContent({
  ...props
}: React.ComponentProps<typeof ArkSteps.CompletedContent>) {
  return <ArkSteps.CompletedContent {...props} />
}

export function StepsPrevTrigger({
  ...props
}: React.ComponentProps<typeof ArkSteps.PrevTrigger>) {
  return <ArkSteps.PrevTrigger {...props} />
}

export function StepsNextTrigger({
  ...props
}: React.ComponentProps<typeof ArkSteps.NextTrigger>) {
  return <ArkSteps.NextTrigger {...props} />
}
