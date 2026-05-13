'use client'

import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

export function Label({
  className,
  render,
  ...props
}: useRender.ComponentProps<'label'>): React.ReactElement {
  const defaultProps = {
    className: labelStyle({ className: cn('gap-2', className) }),
  }

  return useRender({
    defaultTagName: 'label',
    props: mergeProps<'label'>(defaultProps, props),
    render,
  })
}
