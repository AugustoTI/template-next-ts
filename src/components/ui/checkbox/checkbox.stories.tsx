import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Checkbox,
  CheckboxElement,
  CheckboxGroup,
  CheckboxHiddenInput,
  CheckboxLabel,
} from '.'

export default {
  title: 'UI/Checkbox',
} satisfies Meta

type Story = StoryObj

const items = [
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'Desktop', value: 'desktop' },
]

export const Default: Story = {
  render() {
    return (
      <Checkbox>
        <CheckboxElement />
        <CheckboxLabel>Label</CheckboxLabel>
        <CheckboxHiddenInput />
      </Checkbox>
    )
  },
}

export const Grouped: Story = {
  render() {
    return (
      <CheckboxGroup defaultValue={['web']} onValueChange={console.log}>
        {items.map(item => (
          <Checkbox value={item.value} key={item.value}>
            <CheckboxElement />
            <CheckboxLabel>{item.label}</CheckboxLabel>
            <CheckboxHiddenInput />
          </Checkbox>
        ))}
      </CheckboxGroup>
    )
  },
}
