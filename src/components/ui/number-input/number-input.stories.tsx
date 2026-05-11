import { type Meta, type StoryObj } from '@storybook/nextjs'

import { NumberInput } from '.'
import { Field } from '../field'

export default {
  title: 'UI/Number Input',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-96">
        <NumberInput defaultValue={10}>
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
      </div>
    )
  },
}

export const WithStep: Story = {
  render() {
    return (
      <div className="max-w-96">
        <NumberInput defaultValue={10} step={5}>
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
      </div>
    )
  },
}

export const WithRange: Story = {
  render() {
    return (
      <div className="max-w-96">
        <NumberInput defaultValue={10} min={0} max={20}>
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
      </div>
    )
  },
}

export const WithFormattedValue: Story = {
  render() {
    return (
      <div className="max-w-96">
        <NumberInput
          min={0}
          defaultValue={10}
          locale="en-US"
          format={{
            currency: 'USD',
            style: 'currency',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }}
        >
          <NumberInput.Group>
            <NumberInput.Decrement />
            <NumberInput.Input />
            <NumberInput.Increment />
          </NumberInput.Group>
        </NumberInput>
      </div>
    )
  },
}

export const WithLabel: Story = {
  render() {
    return (
      <div className="max-w-96">
        <Field>
          <Field.Label>Amount</Field.Label>
          <NumberInput min={1} defaultValue={10}>
            <NumberInput.Group>
              <NumberInput.Decrement />
              <NumberInput.Input />
              <NumberInput.Increment />
            </NumberInput.Group>
          </NumberInput>
        </Field>
      </div>
    )
  },
}
