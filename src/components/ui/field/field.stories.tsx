import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Field } from '.'
import { Input } from '../input'
import { Textarea } from '../textarea'

export default {
  title: 'UI/Field',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="flex gap-5">
        <div className="space-y-5">
          <Field>
            <Field.Label>Default</Field.Label>
            <Input />
          </Field>
          <Field>
            <Field.Label requiredIndicator>Indicator</Field.Label>
            <Input />
          </Field>
          <Field>
            <Field.Label>With description</Field.Label>
            <Input />
            <Field.Description>Lorem ipsum dolor sit amet.</Field.Description>
          </Field>
          <Field invalid>
            <Field.Label>Invalid</Field.Label>
            <Input />
            <Field.Error match>Error message</Field.Error>
          </Field>
          <Field disabled>
            <Field.Label>Disabled</Field.Label>
            <Input />
          </Field>
          <Field>
            <Field.Label>Read only</Field.Label>
            <Input readOnly value="Some content here..." />
          </Field>
          <Field>
            <Field.Label>Textarea</Field.Label>
            <Field.Control render={Textarea} />
          </Field>
        </div>
        <div>
          <Field>
            <Field.Label>File input</Field.Label>
            <Input type="file" />
          </Field>
        </div>
      </div>
    )
  },
}
