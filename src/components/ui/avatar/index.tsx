import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'
import { cn } from 'tailwind-variants'

function AvatarRoot({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'inline-flex size-12 items-center justify-center overflow-hidden rounded-full bg-base-300 align-middle text-base leading-none font-medium text-base-900 select-none dark:bg-base-700 dark:text-base-200',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn('size-full object-cover', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn('flex size-full items-center justify-center text-base', className)}
      {...props}
    />
  )
}

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImage,
  Fallback: AvatarFallback,
})
