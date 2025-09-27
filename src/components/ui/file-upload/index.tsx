import { FileUpload as ArkFileUpload } from '@ark-ui/react/file-upload'

import { cn } from '~/utils/cn'

import { labelStyle } from '../field'

export function FileUpload({
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Root>) {
  return <ArkFileUpload.Root {...props} />
}

export function FileUploadLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Label>) {
  return <ArkFileUpload.Label className={labelStyle({ className })} {...props} />
}

export function FileUploadDropzone({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Dropzone>) {
  return (
    <ArkFileUpload.Dropzone
      className={cn(
        'relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-primary-600 p-4 ring-primary-700 ring-offset-2 outline-hidden transition focus-visible:ring-2 data-[dragging]:border-primary-700 data-[dragging]:bg-base-400/40 data-[invalid]:border-danger-600 dark:data-[invalid]:border-danger-400',
        className,
      )}
      {...props}
    />
  )
}

export function FileUploadTrigger({
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Trigger>) {
  return <ArkFileUpload.Trigger {...props} />
}

export function FileUploadClearTrigger({
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Trigger>) {
  return <ArkFileUpload.ClearTrigger {...props} />
}

export function FileUploadItemGroup({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemGroup>) {
  return <ArkFileUpload.ItemGroup className={cn('space-y-2', className)} {...props} />
}

export function FileUploadItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.Item>) {
  return (
    <ArkFileUpload.Item
      className={cn(
        'flex items-center justify-between gap-2 rounded-lg border border-base-300 p-2 pe-3 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function FileUploadItemName({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemName>) {
  return (
    <ArkFileUpload.ItemName
      className={cn(
        'truncate text-[0.8125rem] font-medium text-base-900 dark:text-base-50',
        className,
      )}
      {...props}
    />
  )
}

export function FileUploadItemSizeText({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemSizeText>) {
  return (
    <ArkFileUpload.ItemSizeText
      className={cn('text-xs text-base-500 dark:text-base-300', className)}
      {...props}
    />
  )
}

export function FileUploadItemDeleteTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemDeleteTrigger>) {
  return (
    <ArkFileUpload.ItemDeleteTrigger
      className={cn(
        'inline-flex size-8 items-center justify-center text-base-500 dark:text-base-300',
        className,
      )}
      {...props}
    />
  )
}

export function FileUploadItemPreview({
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemPreview>) {
  return <ArkFileUpload.ItemPreview {...props} />
}

export function FileUploadItemPreviewImage({
  ...props
}: React.ComponentProps<typeof ArkFileUpload.ItemPreviewImage>) {
  return <ArkFileUpload.ItemPreviewImage {...props} />
}

export const FileUploadHiddenInput = ArkFileUpload.HiddenInput

export const FileUploadContext = ArkFileUpload.Context
