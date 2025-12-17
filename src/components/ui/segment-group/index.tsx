import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react/segment-group'
import { cn } from 'tailwind-variants'

export function SegmentGroup({
  orientation = 'horizontal',
  className,
  ...props
}: React.ComponentProps<typeof ArkSegmentGroup.Root>) {
  return (
    <ArkSegmentGroup.Root
      orientation={orientation}
      className={cn(
        'flex items-start gap-4 border-base-300 dark:border-base-800',
        'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b',
        'data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-l',
        className,
      )}
      {...props}
    />
  )
}

export function SegmentGroupIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkSegmentGroup.Indicator>) {
  return (
    <ArkSegmentGroup.Indicator
      className={cn(
        'border-primary-500 dark:border-primary-600',
        'data-[orientation=horizontal]:bottom-0 data-[orientation=horizontal]:w-(--width) data-[orientation=horizontal]:translate-y-0.25 data-[orientation=horizontal]:border-b-2',
        'data-[orientation=vertical]:left-0 data-[orientation=vertical]:h-(--height) data-[orientation=vertical]:border-l-2',
        className,
      )}
      {...props}
    />
  )
}

export function SegmentGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkSegmentGroup.Item>) {
  return (
    <ArkSegmentGroup.Item
      className={cn(
        'cursor-pointer text-base font-medium text-base-600 transition duration-200 ease-linear dark:text-base-400',
        'data-[state=checked]:font-semibold data-[state=checked]:text-base-950 dark:data-[state=checked]:text-base-50',
        'data-disabled:cursor-not-allowed data-disabled:text-base-300',
        'data-[orientation=horizontal]:px-1 data-[orientation=horizontal]:pb-3',
        'data-[orientation=vertical]:py-1 data-[orientation=vertical]:pl-3',
        'outline-primary-500 data-focus-visible:outline-2',
        className,
      )}
      {...props}
    />
  )
}

export function SegmentGroupItemText({
  ...props
}: React.ComponentProps<typeof ArkSegmentGroup.ItemText>) {
  return <ArkSegmentGroup.ItemText {...props} />
}

export function SegmentGroupItemControl({
  ...props
}: React.ComponentProps<typeof ArkSegmentGroup.ItemControl>) {
  return <ArkSegmentGroup.ItemControl {...props} />
}

export const SegmentGroupItemHiddenInput = ArkSegmentGroup.ItemHiddenInput
