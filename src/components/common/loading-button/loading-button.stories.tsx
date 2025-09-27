import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuLoaderCircle } from 'react-icons/lu'

import { LoadingButton } from '.'

export default {
  title: 'Common/LoadingButton',
  component: LoadingButton,
  args: {
    children: 'Click me',
    loading: false,
    loadingText: 'Loading...',
  },
  argTypes: {
    spinner: { control: { disable: true } },
  },
} satisfies Meta<typeof LoadingButton>

type Story = StoryObj<typeof LoadingButton>

export const Default: Story = {}

export const CustomSpinner: Story = {
  args: {
    spinner: LuLoaderCircle,
    loading: true,
  },
}
