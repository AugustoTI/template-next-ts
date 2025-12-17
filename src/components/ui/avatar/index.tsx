import { Avatar as ArkAvatar } from '@ark-ui/react/avatar'
import { cn } from 'tailwind-variants'

export function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof ArkAvatar.Root>) {
  return (
    <ArkAvatar.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof ArkAvatar.Image>) {
  return (
    <ArkAvatar.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

export function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof ArkAvatar.Fallback>) {
  return (
    <ArkAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-base-300 font-medium tracking-wide text-base-900 dark:bg-base-700 dark:text-base-200',
        className,
      )}
      {...props}
    />
  )
}
