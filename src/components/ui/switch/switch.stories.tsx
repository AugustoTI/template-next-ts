import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Switch } from '.'
import { Field } from '../field'

export default {
  title: 'UI/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>

type Story = StoryObj<typeof Switch>

export const Default: Story = {
  render() {
    return (
      <Field className="flex items-center gap-2">
        <Field.Label>Label teste</Field.Label>
        <Switch />
      </Field>
    )
  },
}
