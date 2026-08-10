import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Button } from '~/components/ui/button'

describe('<Button />', () => {
  it('should display the correct text', () => {
    const page = render(<Button>Click me</Button>)
    const button = page.getByRole('button')
    expect(button).toBeDefined()
  })
})
