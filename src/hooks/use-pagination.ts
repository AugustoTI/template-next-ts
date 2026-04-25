import { useMemo } from 'react'

export const DOTS = '...'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, index) => index + start)
}

interface UsePaginationRangeProps {
  totalPageCount: number
  buttonConst: number
  siblingCount: number
  currentPage: number
}

/**
 * Computes the range of page numbers to display in a pagination component,
 * inserting `DOTS` ("...") where there are gaps between page numbers.
 *
 * @param props - Hook parameters.
 * @param props.totalPageCount - Total number of available pages.
 * @param props.currentPage - Currently active page (1-based).
 * @param props.siblingCount - Number of adjacent pages shown on each side of the current page.
 * @param props.buttonConst - Number of fixed buttons considered in the calculation (first, current, and last page).
 *
 * @returns An array containing page numbers and `DOTS` ("...") where needed,
 * or `undefined` if no condition is matched.
 *
 * @example
 * // Page in the middle: dots on both sides
 * usePaginationRange({ totalPageCount: 20, currentPage: 10, siblingCount: 1, buttonConst: 3 })
 * // → [1, '...', 9, 10, 11, '...', 20]
 *
 * @example
 * // Page near the start: dots only on the right
 * usePaginationRange({ totalPageCount: 20, currentPage: 2, siblingCount: 1, buttonConst: 3 })
 * // → [1, 2, 3, 4, 5, '...', 20]
 *
 * @example
 * // Page near the end: dots only on the left
 * usePaginationRange({ totalPageCount: 20, currentPage: 19, siblingCount: 1, buttonConst: 3 })
 * // → [1, '...', 16, 17, 18, 19, 20]
 */
export const usePaginationRange = ({
  totalPageCount,
  buttonConst,
  siblingCount,
  currentPage,
}: UsePaginationRangeProps) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = buttonConst + 2 + siblingCount

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalPageCount, siblingCount, currentPage, buttonConst])

  return paginationRange
}
