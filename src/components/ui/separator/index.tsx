'use client'

import * as SeparatorPrimitive from '@radix-ui/react-separator'
import React from 'react'

import { cn } from '~/utils/cn'

export function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-base-300 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px dark:bg-base-800',
        className,
      )}
      {...props}
    />
  )
}
