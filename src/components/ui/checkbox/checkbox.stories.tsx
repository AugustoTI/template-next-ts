import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Checkbox } from '.'
import { Field } from '../field'

export default {
  title: 'UI/Checkbox',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Field>
        <Field.Label className="flex gap-2">
          Checkbox
          <Checkbox />
        </Field.Label>
      </Field>
    )
  },
}
