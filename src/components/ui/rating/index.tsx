'use client'

import { cn, tv, VariantProps } from 'tailwind-variants'
import React from 'react'

import { Icons } from '../icons'

type RatingContextValue = {
  value: number
  max: number
  editable: boolean
  hoveredValue: number | null
  onChange: (value: number) => void
  onHover: (value: number | null) => void
}

const RatingContext = React.createContext<RatingContextValue | null>(null)

function useRatingContext() {
  const ctx = React.useContext(RatingContext)
  if (!ctx) throw new Error('Rating sub-components must be used within <Rating.Root>')
  return ctx
}

export interface RatingRootProps extends Omit<
  React.ComponentProps<'div'>,
  'defaultValue'
> {
  value?: number
  defaultValue?: number
  max?: number
  editable?: boolean
  onValueChange?: (value: number) => void
}

function RatingRoot({
  value,
  defaultValue = 0,
  max = 5,
  editable = false,
  onValueChange,
  className,
  children,
  ...props
}: RatingRootProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [hoveredValue, setHoveredValue] = React.useState<number | null>(null)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value! : internalValue

  const handleChange = (newValue: number) => {
    if (!isControlled) setInternalValue(newValue)
    onValueChange?.(newValue)
  }

  return (
    <RatingContext.Provider
      value={{
        value: currentValue,
        max,
        editable,
        hoveredValue,
        onChange: handleChange,
        onHover: setHoveredValue,
      }}
    >
      <div className={cn('inline-flex items-center gap-1.5', className)} {...props}>
        {children}
      </div>
    </RatingContext.Provider>
  )
}

const starSize = tv({
  variants: {
    size: {
      sm: 'size-3.5',
      md: 'size-5',
      lg: 'size-6',
    },
  },
})

type StarSize = VariantProps<typeof starSize>

export interface RatingStarsProps extends React.ComponentProps<'div'>, StarSize {}

function RatingStars({ className, size = 'md', ...props }: RatingStarsProps) {
  const { value, max, editable, hoveredValue, onChange, onHover } = useRatingContext()
  const id = React.useId()

  const displayValue = hoveredValue ?? value

  return (
    <div
      className={cn('flex items-center', className)}
      role={editable ? 'radiogroup' : 'img'}
      aria-label={!editable ? `Avaliação: ${value} de ${max}` : undefined}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1
        const halfIndex = i + 0.5
        const isFull = displayValue >= starIndex
        const isHalf = !isFull && displayValue >= halfIndex

        return (
          <RatingStar
            key={starIndex}
            starIndex={starIndex}
            halfIndex={halfIndex}
            isFull={isFull}
            isHalf={isHalf}
            editable={editable}
            size={size}
            id={`${id}-${starIndex}`}
            onChange={onChange}
            onHover={onHover}
          />
        )
      })}
    </div>
  )
}

interface StarIconProps {
  isFull: boolean
  isHalf: boolean
  size: StarSize['size']
}

function StarIcon({ isFull, isHalf, size }: StarIconProps) {
  const sizeClass = starSize({ size })
  const Star = Icons.Star

  if (isFull) {
    return (
      <Star className={cn(sizeClass, 'fill-yellow-400 text-yellow-400')} aria-hidden />
    )
  }

  if (isHalf) {
    return (
      <span className={cn('relative inline-flex', sizeClass)}>
        <Star
          className={cn(
            'absolute inset-0',
            sizeClass,
            'fill-base-200 text-base-300 dark:fill-base-700 dark:text-base-600',
          )}
          aria-hidden
        />
        <span className="absolute inset-0 w-1/2 overflow-hidden">
          <Star
            className={cn(sizeClass, 'fill-yellow-400 text-yellow-400')}
            aria-hidden
          />
        </span>
      </span>
    )
  }

  return (
    <Star
      className={cn(
        sizeClass,
        'fill-base-200 text-base-300 dark:fill-base-700 dark:text-base-600',
      )}
      aria-hidden
    />
  )
}

interface RatingStarProps {
  starIndex: number
  halfIndex: number
  isFull: boolean
  isHalf: boolean
  editable: boolean
  size: StarSize['size']
  id: string
  onChange: (value: number) => void
  onHover: (value: number | null) => void
}

function RatingStar({
  starIndex,
  halfIndex,
  isFull,
  isHalf,
  editable,
  size,
  id,
  onChange,
  onHover,
}: RatingStarProps) {
  const sizeClass = starSize({ size })

  const resolveValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    return e.clientX - rect.left < rect.width / 2 ? halfIndex : starIndex
  }

  if (!editable) {
    return <StarIcon isFull={isFull} isHalf={isHalf} size={size} />
  }

  return (
    <button
      type="button"
      id={id}
      aria-label={`Avaliar ${starIndex}`}
      className={cn(
        'relative inline-flex cursor-pointer rounded-sm outline-0 outline-offset-1 outline-primary-500 focus-visible:outline-2',
        sizeClass,
      )}
      onMouseMove={e => onHover(resolveValue(e))}
      onMouseLeave={() => onHover(null)}
      onClick={e => onChange(resolveValue(e))}
    >
      <StarIcon isFull={isFull} isHalf={isHalf} size={size} />
    </button>
  )
}

export type RatingValueProps = React.ComponentProps<'span'>

function RatingValue({ className, ...props }: RatingValueProps) {
  const { value } = useRatingContext()

  return (
    <span
      className={cn(
        'text-sm font-medium text-base-600 tabular-nums dark:text-base-400',
        className,
      )}
      {...props}
    >
      {value % 1 === 0 ? value.toFixed(1) : value}
    </span>
  )
}

export interface RatingProps extends React.ComponentProps<'div'> {
  rating?: number
  defaultRating?: number
  max?: number
  showValue?: boolean
  editable?: boolean
  onRatingChange?: (value: number) => void
  size?: StarSize['size']
}

function RatingConvenience({
  rating,
  defaultRating = 0,
  max = 5,
  showValue = false,
  editable = false,
  onRatingChange,
  size,
  className,
  defaultValue: _defaultValue,
  ...props
}: RatingProps) {
  return (
    <RatingRoot
      value={rating}
      defaultValue={defaultRating as number}
      max={max}
      editable={editable}
      onValueChange={onRatingChange}
      className={className}
      {...props}
    >
      <RatingStars size={size} />
      {showValue && <RatingValue />}
    </RatingRoot>
  )
}

export const Rating = Object.assign(RatingConvenience, {
  Root: RatingRoot,
  Stars: RatingStars,
  Value: RatingValue,
})
