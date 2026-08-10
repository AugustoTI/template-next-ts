import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '~/components/ui/button'

describe('<Button />', () => {
  it('should display the correct text', () => {
    const screen = render(<Button>Click me</Button>)

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })

  it('should be clickable', async () => {
    const fnMock = vi.fn()
    const user = userEvent.setup()

    const screen = render(<Button onClick={fnMock}>Click me</Button>)
    const button = screen.getByRole('button')

    await user.click(button)

    expect(fnMock).toHaveBeenCalled()
  })
})
