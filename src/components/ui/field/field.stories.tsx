import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Field,
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldRequiredIndicator,
  Input,
  Textarea,
} from '.'

export default {
  title: 'UI/Field',
  component: Field,
} satisfies Meta<typeof Field>

type Story = StoryObj<typeof Field>

export const Default: Story = {
  render() {
    return (
      <div className="flex gap-5">
        <div className="space-y-5">
          <Field>
            <FieldLabel>Default</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>
              Indicator
              <FieldRequiredIndicator />
            </FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>Helper text</FieldLabel>
            <Input />
            <FieldHelperText>Lorem ipsum dolor sit amet.</FieldHelperText>
          </Field>
          <Field invalid>
            <FieldLabel>Invalid</FieldLabel>
            <Input />
            <FieldErrorText>Error message</FieldErrorText>
          </Field>
          <Field disabled>
            <FieldLabel>Disabled</FieldLabel>
            <Input />
          </Field>
          <Field readOnly>
            <FieldLabel>Read only</FieldLabel>
            <Input value="Some content here..." />
          </Field>
          <Field>
            <FieldLabel>Textarea</FieldLabel>
            <Textarea />
          </Field>
        </div>
        <div>
          <Field>
            <FieldLabel>File input</FieldLabel>
            <Input type="file" />
          </Field>
        </div>
      </div>
    )
  },
}
