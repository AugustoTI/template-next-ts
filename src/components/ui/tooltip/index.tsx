import {
  Tooltip as ArkTooltip,
  type TooltipContentProps,
  type TooltipRootProps,
} from '@ark-ui/react/tooltip'
import React from 'react'

import { cn } from '~/utils/cn'

export function Tooltip({
  openDelay = 150,
  closeDelay = 250,
  unmountOnExit = true,
  lazyMount = true,
  ...props
}: TooltipRootProps) {
  return (
    <ArkTooltip.Root
      openDelay={openDelay}
      closeDelay={closeDelay}
      unmountOnExit={unmountOnExit}
      lazyMount={lazyMount}
      {...props}
    />
  )
}

export const TooltipTrigger = ArkTooltip.Trigger

export const TooltipPositioner = ArkTooltip.Positioner

export function TooltipContent({ className, children, ...props }: TooltipContentProps) {
  return (
    <ArkTooltip.Content
      className={cn(
        // base
        'max-w-60 rounded-md px-2.5 py-1.5 text-sm leading-5 shadow-md select-none',
        // text color
        'text-base-50 dark:text-base-900',
        // background color
        'bg-base-900 dark:bg-base-50',
        // transition
        'will-change-[transform,opacity]',
        // animation
        [
          'animate-in fade-in-0 zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2',
        ],
        className,
      )}
      {...props}
    >
      {children}
    </ArkTooltip.Content>
  )
}

export function TooltipArrow() {
  return (
    <ArkTooltip.Arrow className="[--arrow-background:var(--default-900)] [--arrow-size:0.75rem] dark:[--arrow-background:var(--default-50)]">
      <ArkTooltip.ArrowTip />
    </ArkTooltip.Arrow>
  )
}
