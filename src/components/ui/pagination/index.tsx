import { Pagination as ArkPagination } from '@ark-ui/react/pagination'
import { cn } from 'tailwind-variants'

export function Pagination({
  className,
  ...props
}: React.ComponentProps<typeof ArkPagination.Root>) {
  return (
    <ArkPagination.Root className={cn('flex items-center gap-3', className)} {...props} />
  )
}

export function PaginationPrevTrigger({
  ...props
}: React.ComponentProps<typeof ArkPagination.PrevTrigger>) {
  return <ArkPagination.PrevTrigger {...props} />
}

export function PaginationNextTrigger({
  ...props
}: React.ComponentProps<typeof ArkPagination.NextTrigger>) {
  return <ArkPagination.NextTrigger {...props} />
}

export function PaginationContext({
  ...props
}: React.ComponentProps<typeof ArkPagination.Context>) {
  return <ArkPagination.Context {...props} />
}

export function PaginationItem({
  ...props
}: React.ComponentProps<typeof ArkPagination.Item>) {
  return <ArkPagination.Item {...props} />
}

export function PaginationEllipsis({
  ...props
}: React.ComponentProps<typeof ArkPagination.Ellipsis>) {
  return <ArkPagination.Ellipsis {...props} />
}
