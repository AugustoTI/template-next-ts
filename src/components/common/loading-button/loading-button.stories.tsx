import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuLoaderCircle } from 'react-icons/lu'

import { LoadingButton } from '.'

export default {
  title: 'Common/LoadingButton',
  component: LoadingButton,
  args: {
    children: 'Click me',
    loading: false,
  },
  argTypes: {
    spinner: { control: { disable: true } },
    loadingText: { control: { disable: true } },
  },
} satisfies Meta<typeof LoadingButton>

type Story = StoryObj<typeof LoadingButton>

export const Default: Story = {}

export const CustomSpinnerAndText: Story = {
  args: {
    spinner: LuLoaderCircle,
    loading: true,
    loadingText: 'Loading...',
  },
  argTypes: {
    loadingText: { control: { disable: false } },
  },
}
