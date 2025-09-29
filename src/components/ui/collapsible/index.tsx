import { Collapsible as ArkCollapsible } from '@ark-ui/react/collapsible'

export function Collapsible({
  unmountOnExit = true,
  lazyMount = true,
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Root>) {
  return (
    <ArkCollapsible.Root unmountOnExit={unmountOnExit} lazyMount={lazyMount} {...props} />
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
  ...props
}: React.ComponentProps<typeof ArkCollapsible.Content>) {
  return <ArkCollapsible.Content {...props} />
}
