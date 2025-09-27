import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  RadioGroup,
  RadioItem,
  RadioItemControl,
  RadioItemHiddenInput,
  RadioItemText,
  RadioLabel,
} from '.'

export default {
  title: 'UI/RadioGroup',
} satisfies Meta

type Story = StoryObj

const frameworks = ['React', 'Solid', 'Vue', 'Svelte']

export const Default: Story = {
  render() {
    return (
      <RadioGroup className="w-fit" defaultValue="React">
        <RadioLabel>Select a option</RadioLabel>
        {frameworks.map(framework => (
          <RadioItem key={framework} value={framework}>
            <RadioItemControl />
            <RadioItemText>{framework}</RadioItemText>
            <RadioItemHiddenInput />
          </RadioItem>
        ))}
      </RadioGroup>
    )
  },
}
