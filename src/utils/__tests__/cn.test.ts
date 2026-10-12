import { cn } from '~/utils/cn'

describe('cn', () => {
  it('combines class names', () => {
    expect(cn('flex', 'items-center')).toBe('flex items-center')
  })

  it('merges conflicting Tailwind classes in favor of the last value', () => {
    expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4')
  })

  it('ignores falsey conditional classes', () => {
    const isHidden = false

    expect(cn('flex', isHidden && 'hidden', undefined, null, 'items-center')).toBe(
      'flex items-center',
    )
  })
})
