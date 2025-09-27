import { type Meta } from '@storybook/nextjs'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'
import React from 'react'

import {
  Pagination,
  PaginationContext,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from '.'
import { Button } from '../button'
import { buttonVariants } from '../button/button.styles'

export default {
  title: 'UI/Pagination',
} satisfies Meta

export function Default() {
  const [currentPage, setCurrentPage] = React.useState(1)

  return (
    <Pagination
      count={100}
      pageSize={10}
      siblingCount={1}
      page={currentPage}
      onPageChange={details => setCurrentPage(details.page)}
      className="flex items-center gap-3"
    >
      <PaginationPrevTrigger asChild>
        <Button variant="secondary" size="icon">
          <LuChevronLeft />
        </Button>
      </PaginationPrevTrigger>

      <div className="flex gap-1">
        <PaginationContext>
          {({ pages }) =>
            pages.map((page, index) =>
              page.type === 'page' ? (
                <PaginationItem asChild key={index} {...page}>
                  <Button
                    variant={currentPage === page.value ? 'primary' : 'secondary'}
                    size="icon"
                  >
                    {page.value}
                  </Button>
                </PaginationItem>
              ) : (
                <PaginationEllipsis
                  key={index}
                  index={index}
                  className={buttonVariants({
                    size: 'icon',
                    className: 'border-transparent dark:text-base-50',
                  })}
                >
                  &#8230;
                </PaginationEllipsis>
              ),
            )
          }
        </PaginationContext>
      </div>

      <PaginationNextTrigger asChild>
        <Button variant="secondary" size="icon">
          <LuChevronRight />
        </Button>
      </PaginationNextTrigger>
    </Pagination>
  )
}
