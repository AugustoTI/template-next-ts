import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuImage, LuX } from 'react-icons/lu'

import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadHiddenInput,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/FileUpload',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <FileUpload
        accept={['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif']}
        maxFileSize={1024 * 1024 * 5} // 5 MB
        maxFiles={3}
      >
        <FileUploadHiddenInput />

        <FileUploadLabel className="mb-2">File uploader (max: 3 files)</FileUploadLabel>
        <FileUploadDropzone className="mb-4">
          <div className="flex flex-col items-center justify-center px-4 py-3 text-center">
            <div
              className="mb-2 flex size-11 shrink-0 items-center justify-center rounded-full border border-dashed border-base-500 dark:border-base-600"
              aria-hidden="true"
            >
              <LuImage className="size-4 opacity-60 dark:text-white" />
            </div>
            <p className="mb-1.5 text-sm font-medium text-base-900 dark:text-base-50">
              Drop your image here or click to browse
            </p>
            <p className="text-xs text-base-500 dark:text-base-300">
              SVG, PNG, JPG or GIF (max. 5MB)
            </p>
          </div>
        </FileUploadDropzone>

        <FileUploadContext>
          {({ acceptedFiles }) => {
            return (
              <>
                <FileUploadItemGroup className="mb-4">
                  {acceptedFiles.map((file, idx) => (
                    <FileUploadItem key={idx} file={file}>
                      <div className="flex items-center gap-3 overflow-hidden">
                        <FileUploadItemPreview
                          type="image/*"
                          className="aspect-square shrink-0 rounded"
                        >
                          <FileUploadItemPreviewImage className="size-10 rounded-[inherit] object-cover" />
                        </FileUploadItemPreview>

                        <div className="flex min-w-0 flex-col gap-0.5">
                          <FileUploadItemName />
                          <FileUploadItemSizeText />
                        </div>
                      </div>

                      <FileUploadItemDeleteTrigger aria-label="Remove file">
                        <LuX aria-hidden="true" />
                      </FileUploadItemDeleteTrigger>
                    </FileUploadItem>
                  ))}
                </FileUploadItemGroup>

                {acceptedFiles.length > 1 && (
                  <FileUploadClearTrigger asChild>
                    <Button variant="secondary">Remove all files</Button>
                  </FileUploadClearTrigger>
                )}
              </>
            )
          }}
        </FileUploadContext>
      </FileUpload>
    )
  },
}
