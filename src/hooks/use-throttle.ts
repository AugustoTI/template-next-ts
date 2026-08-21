import React from 'react'

export function useThrottle<T>(value: T, interval = 500): T {
  const [throttledValue, setThrottledValue] = React.useState(value)
  const lastUpdatedRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const now = Date.now()

    if (lastUpdatedRef.current && now >= lastUpdatedRef.current + interval) {
      lastUpdatedRef.current = now
      setThrottledValue(value)
    } else {
      const id = window.setTimeout(() => {
        lastUpdatedRef.current = now
        setThrottledValue(value)
      }, interval)

      return () => window.clearTimeout(id)
    }
  }, [value, interval])

  return throttledValue
}
