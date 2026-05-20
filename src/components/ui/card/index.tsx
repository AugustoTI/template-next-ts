'use client'

import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn } from 'tailwind-variants'

export function Card({
  className,
  render,
  ...props
}: useRender.ComponentProps<'div'>): React.ReactElement {
  const component = useRender({
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        className: cn(
          'relative w-full rounded-lg border p-6 text-left shadow-xs',
          'bg-white dark:bg-base-900',
          'border-base-200 dark:border-base-800',
          className,
        ),
      },
      props,
    ),
    render,
  })

  return component
}
