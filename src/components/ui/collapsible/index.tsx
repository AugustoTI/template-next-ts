import { Collapsible as ArkCollapsible } from '@ark-ui/react/collapsible'

import { cn } from '~/utils/cn'

export function Collapsible({
  unmountOnExit = true,
  lazyMount = true,
  className,
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Root>) {
  return (
    <ArkCollapsible.Root
      className={cn('group', className)}
      unmountOnExit={unmountOnExit}
      lazyMount={lazyMount}
      {...props}
    />
  )
}

export function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Trigger>) {
  return <ArkCollapsible.Trigger {...props} />
}

export function CollapsibleIndicator({
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Indicator>) {
  return <ArkCollapsible.Indicator {...props} />
}

export function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Content>) {
  return (
    <ArkCollapsible.Content
      className={cn(
        'overflow-hidden group-data-[state=closed]:animate-collapsible-up group-data-[state=open]:animate-collapsible-down',
        className,
      )}
      {...props}
    />
  )
}
