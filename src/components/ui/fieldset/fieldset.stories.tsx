import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Fieldset } from '.'
import { Field } from '../field'
import { Input } from '../input'

export default {
  title: 'UI/Fieldset',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-96">
        <Fieldset className="flex flex-col gap-6">
          <Fieldset.Legend>Billing Details</Fieldset.Legend>

          <Field>
            <Field.Label>Company</Field.Label>
            <Input placeholder="Enter company name" type="text" />
            <Field.Description>The name that will appear on invoices.</Field.Description>
          </Field>

          <Field>
            <Field.Label>Tax ID</Field.Label>
            <Input placeholder="Enter tax identification number" type="text" />
            <Field.Description>
              Your business tax identification number.
            </Field.Description>
          </Field>
        </Fieldset>
      </div>
    )
  },
}
