import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Switch, SwitchElement, SwitchHiddenInput, SwitchLabel } from '.'

export default {
  title: 'UI/Switch',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Switch>
        <SwitchElement />
        <SwitchLabel>Label</SwitchLabel>
        <SwitchHiddenInput />
      </Switch>
    )
  },
}
