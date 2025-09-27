import { Meta, StoryObj } from '@storybook/nextjs'
import { RiErrorWarningFill } from 'react-icons/ri'

import { Callout } from '.'

export default {
  title: 'UI/Callout',
  component: Callout,
  args: {
    variant: 'primary',
    title: 'AWS Credit Alert',
    icon: RiErrorWarningFill,
    children: (
      <p>
        Warning: Your AWS credits are nearly depleted. Please review your usage and
        consider adding more credits to avoid service interruptions. Visit your account
        dashboard for details.
      </p>
    ),
  },
  argTypes: {
    variant: {
      options: ['primary', 'neutral', 'warning', 'error', 'success'],
      control: 'select',
    },
    icon: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  decorators: [
    Story => {
      return (
        <div className="max-w-96">
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta<typeof Callout>

type Story = StoryObj<typeof Callout>

export const Default: Story = {}
