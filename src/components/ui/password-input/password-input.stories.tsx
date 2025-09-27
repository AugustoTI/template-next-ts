import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  PasswordInput,
  PasswordInputControl,
  PasswordInputElement,
  PasswordInputIndicator,
  PasswordInputLabel,
  PasswordInputVisibilityTrigger,
} from '.'

export default {
  title: 'UI/PasswordInput',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="flex">
        <PasswordInput>
          <PasswordInputLabel>Password</PasswordInputLabel>
          <PasswordInputControl>
            <PasswordInputElement />
            <PasswordInputVisibilityTrigger>
              <PasswordInputIndicator />
            </PasswordInputVisibilityTrigger>
          </PasswordInputControl>
        </PasswordInput>
      </div>
    )
  },
}
