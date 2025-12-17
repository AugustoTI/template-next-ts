import { QrCode as ArkQrCode } from '@ark-ui/react/qr-code'
import { cn } from 'tailwind-variants'

export function QrCode({
  className,
  ...props
}: React.ComponentProps<typeof ArkQrCode.Root>) {
  return (
    <ArkQrCode.Root className={cn('flex w-fit flex-col gap-3', className)} {...props} />
  )
}

export function QrCodeDownloadTrigger({
  ...props
}: React.ComponentProps<typeof ArkQrCode.DownloadTrigger>) {
  return <ArkQrCode.DownloadTrigger {...props} />
}

export function QrCodeFrame({
  className,
  ...props
}: React.ComponentProps<typeof ArkQrCode.Frame>) {
  return <ArkQrCode.Frame className={cn('size-32 bg-white', className)} {...props} />
}

export function QrCodePattern({
  className,
  ...props
}: React.ComponentProps<typeof ArkQrCode.Pattern>) {
  return <ArkQrCode.Pattern className={cn('fill-black', className)} {...props} />
}

export function QrCodeOverlay({
  className,
  ...props
}: React.ComponentProps<typeof ArkQrCode.Overlay>) {
  return (
    <ArkQrCode.Overlay
      className={cn('size-9 rounded-full outline-2 outline-white', className)}
      {...props}
    />
  )
}
