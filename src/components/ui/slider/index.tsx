import { Slider as SliderPrimitive } from '@base-ui/react/slider'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

function SliderRoot({ className, ...props }: SliderPrimitive.Root.Props) {
  return <SliderPrimitive.Root className={cn('grid gap-2', className)} {...props} />
}

function SliderValue({ className, ...props }: SliderPrimitive.Value.Props) {
  return <SliderPrimitive.Value className={cn(labelStyle(), className)} {...props} />
}

function SliderLabel({ className, ...props }: SliderPrimitive.Label.Props) {
  return <SliderPrimitive.Label className={cn(labelStyle(), className)} {...props} />
}

function SliderControl({ className, ...props }: SliderPrimitive.Control.Props) {
  return (
    <SliderPrimitive.Control
      className={cn(
        'relative flex cursor-pointer touch-none select-none',
        "data-[orientation='horizontal']:w-full data-[orientation='horizontal']:items-center",
        "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-fit data-[orientation='vertical']:justify-center",
        'data-disabled:pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}

function SliderTrack({ className, children, ...props }: SliderPrimitive.Track.Props) {
  return (
    <SliderPrimitive.Track
      className={cn(
        'grow rounded-full bg-gray-200 dark:bg-gray-800',
        "data-[orientation='horizontal']:h-1.5 data-[orientation='horizontal']:w-full",
        "data-[orientation='vertical']:h-full data-[orientation='vertical']:w-1.5",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Indicator className="rounded-full bg-primary-500 data-disabled:bg-base-300 dark:bg-primary-500 dark:data-disabled:bg-base-700" />
      {children}
    </SliderPrimitive.Track>
  )
}

function SliderThumb({ className, ...props }: SliderPrimitive.Thumb.Props) {
  return (
    <SliderPrimitive.Thumb
      className={cn(
        'block size-4.25 shrink-0 rounded-full border border-base-400 bg-white shadow-sm transition dark:border-base-500',
        'data-disabled:pointer-events-none data-disabled:bg-base-200 dark:data-disabled:border-base-800 dark:data-disabled:bg-base-600',
        className,
      )}
      {...props}
    />
  )
}

export const Slider = Object.assign(SliderRoot, {
  Value: SliderValue,
  Control: SliderControl,
  Track: SliderTrack,
  Thumb: SliderThumb,
  Label: SliderLabel,
})
