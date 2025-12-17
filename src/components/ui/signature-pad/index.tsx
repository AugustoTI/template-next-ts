import { SignaturePad as ArkSignaturePad } from '@ark-ui/react/signature-pad'
import { cn } from 'tailwind-variants'

import { buttonVariants } from '../button/button.styles'
import { FieldLabel } from '../field'

export function SignaturePad({
  className,
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.Root>) {
  return <ArkSignaturePad.Root className={cn('grid gap-2', className)} {...props} />
}

export function SignaturePadLabel({
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.Label>) {
  return (
    <ArkSignaturePad.Label asChild>
      <FieldLabel {...props} />
    </ArkSignaturePad.Label>
  )
}

export function SignaturePadControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.Control>) {
  return (
    <ArkSignaturePad.Control
      className={cn(
        'min-h-52 rounded-md border border-base-300 bg-white dark:border-base-800 dark:bg-base-950',
        className,
      )}
      {...props}
    />
  )
}

export function SignaturePadSegment({
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.Segment>) {
  return (
    <ArkSignaturePad.Segment className="fill-base-900 dark:fill-base-50" {...props} />
  )
}

export function SignaturePadClearTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.ClearTrigger>) {
  return (
    <ArkSignaturePad.ClearTrigger
      className={buttonVariants({
        size: 'icon',
        variant: 'ghost',
        className: ['absolute top-3 right-3', className],
      })}
      {...props}
    />
  )
}

export function SignaturePadGuide({
  className,
  ...props
}: React.ComponentProps<typeof ArkSignaturePad.Guide>) {
  return (
    <ArkSignaturePad.Guide
      className={cn(
        'absolute inset-x-6 bottom-6 border-b border-dashed border-base-300 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}
