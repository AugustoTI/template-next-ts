import { Collapsible as CollapsiblePrimitive } from '@base-ui/react/collapsible'
import { cn } from 'tailwind-variants'
import type React from 'react'

function CollapsibleRoot({
  ...props
}: CollapsiblePrimitive.Root.Props): React.ReactElement {
  return <CollapsiblePrimitive.Root {...props} />
}

function CollapsibleTrigger({
  className,
  ...props
}: CollapsiblePrimitive.Trigger.Props): React.ReactElement {
  return <CollapsiblePrimitive.Trigger className={className} {...props} />
}

function CollapsiblePanel({
  className,
  ...props
}: CollapsiblePrimitive.Panel.Props): React.ReactElement {
  return (
    <CollapsiblePrimitive.Panel
      className={cn(
        'h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0',
        className,
      )}
      {...props}
    />
  )
}

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger: CollapsibleTrigger,
  Panel: CollapsiblePanel,
})
