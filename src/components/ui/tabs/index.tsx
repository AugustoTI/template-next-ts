'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import React from 'react'

import { cn } from '~/utils/cn'
import { focusRing } from '~/utils/common-styles'

import { getVariantStyles, tabListVariants, TabsListVariantProps } from './tabs.styles'

export function Tabs({ ...props }: React.ComponentProps<typeof ArkTabs.Root>) {
  return <ArkTabs.Root {...props} />
}

const TabsListVariantContext =
  React.createContext<TabsListVariantProps['variant']>('line')

interface TabsListProps
  extends React.ComponentProps<typeof ArkTabs.List>,
    TabsListVariantProps {}

export function TabsList({
  className,
  variant = 'line',
  children,
  ...props
}: TabsListProps) {
  return (
    <ArkTabs.List className={tabListVariants({ variant, className })} {...props}>
      <TabsListVariantContext value={variant}>{children}</TabsListVariantContext>
    </ArkTabs.List>
  )
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkTabs.Trigger>) {
  const variant = React.use(TabsListVariantContext)

  return (
    <ArkTabs.Trigger
      className={cn(getVariantStyles(variant), focusRing, className)}
      {...props}
    />
  )
}

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof ArkTabs.Content>) {
  return (
    <ArkTabs.Content className={cn('outline-hidden', focusRing, className)} {...props} />
  )
}
