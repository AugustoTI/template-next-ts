import { type Meta, type StoryObj } from '@storybook/nextjs'
import Image from 'next/image'

import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselItemGroup,
  CarouselNextTrigger,
  CarouselPrevTrigger,
} from '.'
import { Button } from '../button'
import { Icons } from '../icons'

export default {
  title: 'UI/Carousel',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    const images = Array.from(
      { length: 5 },
      (_, i) => `https://picsum.photos/seed/${i + 1}/584/400`,
    )

    return (
      <Carousel
        defaultPage={0}
        slideCount={images.length}
        allowMouseDrag
        snapType="proximity"
        className="relative mx-auto max-w-2xl"
      >
        <CarouselControl>
          <CarouselNextTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute inset-y-0 right-0 my-auto"
            >
              <Icons.ChevronRight />
            </Button>
          </CarouselNextTrigger>
          <CarouselPrevTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute inset-y-0 left-0 my-auto"
            >
              <Icons.ChevronLeft />
            </Button>
          </CarouselPrevTrigger>
        </CarouselControl>
        <CarouselItemGroup className="mx-11">
          {images.map((image, index) => (
            <CarouselItem key={index} index={index} className="relative h-100">
              <Image src={image} alt={`Slide ${index}`} fill className="object-cover" />
            </CarouselItem>
          ))}
        </CarouselItemGroup>
        <CarouselIndicatorGroup className="flex items-center justify-center gap-3 py-3">
          {images.map((_, index) => (
            <CarouselIndicator
              className="size-2.5 cursor-pointer rounded-full bg-base-500 transition-colors data-current:bg-primary-600"
              key={index}
              index={index}
            />
          ))}
        </CarouselIndicatorGroup>
      </Carousel>
    )
  },
}
