import { useCallback, useSyncExternalStore } from 'react'

const BREAKPOINTS = {
  '2xl': 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280,
} as const

type Breakpoint = keyof typeof BREAKPOINTS

type BreakpointQuery =
  | Breakpoint
  | `max-${Breakpoint}`
  | `${Breakpoint}:max-${Breakpoint}`

function resolveMin(value: Breakpoint | number): string {
  const px = typeof value === 'number' ? value : BREAKPOINTS[value]
  return `(min-width: ${px}px)`
}

function resolveMax(value: Breakpoint | number): string {
  const px = typeof value === 'number' ? value : BREAKPOINTS[value]
  return `(max-width: ${px - 1}px)`
}

function parseQuery(query: BreakpointQuery | MediaQueryInput | (string & {})): string {
  if (typeof query !== 'string') {
    const parts: string[] = []
    if (query.min != null) parts.push(resolveMin(query.min))
    if (query.max != null) parts.push(resolveMax(query.max))
    if (query.pointer === 'coarse') parts.push('(pointer: coarse)')
    if (query.pointer === 'fine') parts.push('(pointer: fine)')
    if (parts.length === 0) return '(min-width: 0px)'
    return parts.join(' and ')
  }

  if (query.startsWith('(')) return query

  const parts: string[] = []
  for (const segment of query.split(':')) {
    if (segment.startsWith('max-')) {
      const bp = segment.slice(4)
      if (bp in BREAKPOINTS) parts.push(resolveMax(bp as Breakpoint))
    } else if (segment in BREAKPOINTS) {
      parts.push(resolveMin(segment as Breakpoint))
    }
  }

  return parts.length > 0 ? parts.join(' and ') : query
}

function getServerSnapshot(): boolean {
  return false
}

export type MediaQueryInput = {
  min?: Breakpoint | number
  max?: Breakpoint | number
  /** Touch-like input (finger). Use "fine" for mouse/trackpad. */
  pointer?: 'coarse' | 'fine'
}

/**
 * Hook to observe media query matches and trigger re-renders when they change.
 *
 * @param query - The media query to match. Can be:
 *   - A breakpoint name: 'sm', 'md', 'lg', 'xl', '2xl'
 *   - A max breakpoint: 'max-sm', 'max-md', 'max-lg', 'max-xl', 'max-2xl'
 *   - A range: 'md:max-lg'
 *   - A raw CSS media query string: '(min-width: 640px)'
 *   - A MediaQueryInput object with min, max, and/or pointer properties
 * @returns `true` if the media query matches, `false` otherwise
 *
 * @example
 * // Check if viewport is mobile (max-md)
 * const isMobile = useMediaQuery('max-md')
 *
 * @example
 * // Check if viewport is between md and lg
 * const isMediumScreen = useMediaQuery('md:max-lg')
 *
 * @example
 * // Check with object syntax
 * const isLargeScreen = useMediaQuery({ min: 'lg' })
 *
 * @example
 * // Check for touch device
 * const isTouchDevice = useMediaQuery({ pointer: 'coarse' })
 */
export function useMediaQuery(
  query: BreakpointQuery | MediaQueryInput | (string & {}),
): boolean {
  const mediaQuery = parseQuery(query)

  const subscribe = useCallback(
    (callback: () => void) => {
      if (typeof window === 'undefined') return () => {}
      const mql = window.matchMedia(mediaQuery)
      mql.addEventListener('change', callback)
      return () => mql.removeEventListener('change', callback)
    },
    [mediaQuery],
  )

  const getSnapshot = useCallback(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(mediaQuery).matches
  }, [mediaQuery])

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function useIsMobile(): boolean {
  return useMediaQuery('max-md')
}
