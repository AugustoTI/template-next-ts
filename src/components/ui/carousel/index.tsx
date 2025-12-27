import { Carousel as ArkCarousel } from '@ark-ui/react/carousel'

export function Carousel({ className, ...props }: ArkCarousel.RootProps) {
  return <ArkCarousel.Root className={className} {...props} />
}

export function CarouselControl({ className, ...props }: ArkCarousel.ControlProps) {
  return <ArkCarousel.Control className={className} {...props} />
}

export function CarouselPrevTrigger({
  className,
  ...props
}: ArkCarousel.PrevTriggerProps) {
  return <ArkCarousel.PrevTrigger className={className} {...props} />
}

export function CarouselNextTrigger({
  className,
  ...props
}: ArkCarousel.NextTriggerProps) {
  return <ArkCarousel.NextTrigger className={className} {...props} />
}

export function CarouselItemGroup({ className, ...props }: ArkCarousel.ItemGroupProps) {
  return <ArkCarousel.ItemGroup className={className} {...props} />
}

export function CarouselItem({ className, ...props }: ArkCarousel.ItemProps) {
  return <ArkCarousel.Item className={className} {...props} />
}

export function CarouselIndicatorGroup({
  className,
  ...props
}: ArkCarousel.IndicatorGroupProps) {
  return <ArkCarousel.IndicatorGroup className={className} {...props} />
}

export function CarouselIndicator({ className, ...props }: ArkCarousel.IndicatorProps) {
  return <ArkCarousel.Indicator className={className} {...props} />
}
