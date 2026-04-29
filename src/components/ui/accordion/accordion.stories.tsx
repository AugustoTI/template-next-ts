import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Accordion } from '.'

export default {
  title: 'UI/Accordion',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Accordion className="max-w-96">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero
              quibusdam minus sit fuga maxime!
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Item 2</Accordion.Trigger>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero
              quibusdam minus sit fuga maxime!
            </p>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>Item 3</Accordion.Trigger>
          <Accordion.Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, vero
              quibusdam minus sit fuga maxime!
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    )
  },
}
