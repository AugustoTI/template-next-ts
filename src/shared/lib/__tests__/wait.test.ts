import { wait } from '~/shared/lib/wait'

describe('wait', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('resolves after the specified delay', async () => {
    const promise = wait(250)
    const onResolved = vi.fn()

    promise.then(onResolved)
    await vi.advanceTimersByTimeAsync(249)
    expect(onResolved).not.toHaveBeenCalled()

    await vi.advanceTimersByTimeAsync(1)
    await expect(promise).resolves.toBeUndefined()
    expect(onResolved).toHaveBeenCalledOnce()
  })
})
