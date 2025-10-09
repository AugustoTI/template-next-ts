import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'

import { cn } from '~/utils/cn'

export function HoverCard({
  unmountOnExit = true,
  lazyMount = true,
  ...props
}: React.ComponentProps<typeof ArkHoverCard.Root>) {
  return (
    <ArkHoverCard.Root unmountOnExit={unmountOnExit} lazyMount={lazyMount} {...props} />
  )
}

export function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof ArkHoverCard.Trigger>) {
  return <ArkHoverCard.Trigger {...props} />
}

export function HoverCardPositioner({
  ...props
}: React.ComponentProps<typeof ArkHoverCard.Positioner>) {
  return <ArkHoverCard.Positioner {...props} />
}

export function HoverCardContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkHoverCard.Content>) {
  return (
    <ArkHoverCard.Content
      className={cn(
        'w-80 origin-(--transform-origin) rounded-md border border-base-200 bg-base-50 p-2.5 text-sm text-base-900 shadow-md outline-hidden data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 dark:border-base-800 dark:bg-base-950 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function HoverCardArrow({
  className,
  ...props
}: React.ComponentProps<typeof ArkHoverCard.Arrow>) {
  return (
    <ArkHoverCard.Arrow
      className={cn(
        '[--arrow-background:var(--color-white)] [--arrow-size:0.75rem] dark:[--arrow-background:var(--default-950)]',
        className,
      )}
      {...props}
    />
  )
}

export function HoverCardArrowTip({
  className,
  ...props
}: React.ComponentProps<typeof ArkHoverCard.ArrowTip>) {
  return (
    <ArkHoverCard.ArrowTip
      className={cn('border-s border-t border-base-200 dark:border-base-800', className)}
      {...props}
    />
  )
}
