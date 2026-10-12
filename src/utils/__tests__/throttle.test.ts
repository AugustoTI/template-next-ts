import { throttle } from '~/utils/throttle'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-01T00:00:01.000Z'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('runs immediately on the first call', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled()

    expect(callback).toHaveBeenCalledTimes(1)
  })

  it('ignores calls made before the interval and allows a call at its boundary', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled()
    vi.advanceTimersByTime(99)
    throttled()
    expect(callback).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(1)
    throttled()
    expect(callback).toHaveBeenCalledTimes(2)
  })

  it('starts the next interval from the most recent successful call', () => {
    const callback = vi.fn()
    const throttled = throttle(callback, 100)

    throttled()
    vi.advanceTimersByTime(50)
    throttled()
    vi.advanceTimersByTime(50)
    throttled()

    expect(callback).toHaveBeenCalledTimes(2)
  })
})
