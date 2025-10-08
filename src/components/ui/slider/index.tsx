import { Slider as ArkSlider } from '@ark-ui/react/slider'
import { Label, type LabelProps } from '@radix-ui/react-label'

import { cn } from '~/utils/cn'
import { focusRing } from '~/utils/common-styles'

import { labelStyle } from '../field'

export function Slider({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.Root>) {
  return <ArkSlider.Root className={cn('grid gap-2', className)} {...props} />
}

export function SliderLabel({ className, ...props }: LabelProps) {
  return (
    <ArkSlider.Label asChild>
      <Label data-slot="label" className={labelStyle({ className })} {...props} />
    </ArkSlider.Label>
  )
}

export function SliderValueText({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.ValueText>) {
  return <ArkSlider.ValueText className={labelStyle({ className })} {...props} />
}

export function SliderControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.Control>) {
  return (
    <ArkSlider.Control
      className={cn(
        // base
        'relative flex cursor-pointer touch-none select-none',
        // orientation
        "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
        "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
        // disabled
        'data-disabled:pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}

export function SliderTrack({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.Track>) {
  return (
    <ArkSlider.Track
      className={cn(
        // base
        'relative grow overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800',
        // orientation
        "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
        "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
        className,
      )}
      {...props}
    />
  )
}

export function SliderRange({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.Range>) {
  return (
    <ArkSlider.Range
      className={cn(
        // base
        'absolute rounded-full bg-primary-500 dark:bg-primary-500',
        // orientation
        "data-[orientation='horizontal']:h-full",
        "data-[orientation='vertical']:w-full",
        // disabled
        'data-disabled:bg-base-300 dark:data-disabled:bg-base-700',
        className,
      )}
      {...props}
    />
  )
}

export function SliderThumb({
  className,
  ...props
}: React.ComponentProps<typeof ArkSlider.Thumb>) {
  return (
    <ArkSlider.Thumb
      className={cn(
        // base
        'block size-[17px] shrink-0 rounded-full border shadow-sm transition',
        // border color
        'border-base-400 dark:border-base-500',
        // background color
        'bg-white',
        // disabled
        'data-[disabled]:pointer-events-none data-[disabled]:bg-base-200 dark:data-[disabled]:border-base-800 dark:data-[disabled]:bg-base-600',
        focusRing,
        'outline-offset-0',
        className,
      )}
      {...props}
    />
  )
}

export const SliderHiddenInput = ArkSlider.HiddenInput
