import { cn } from '.'

describe('utils/cn', () => {
  it('should overwrite the previous className', () => {
    const className = cn('px-2', 'px-4')

    expect(className).toBe('px-4')
  })
})
