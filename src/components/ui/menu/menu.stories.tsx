import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Menu } from '.'
import { Button } from '../button'

export default {
  title: 'UI/Menu',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Menu>
        <Menu.Trigger render={<Button />}>Open Menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
              <Menu.Item>Item 3</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu>
    )
  },
}

export const WithGroups: Story = {
  render() {
    return (
      <Menu>
        <Menu.Trigger render={<Button />}>Open Menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Group>
                <Menu.GroupLabel>JS Frameworks</Menu.GroupLabel>
                <Menu.Item>React</Menu.Item>
                <Menu.Item>Vue</Menu.Item>
                <Menu.Item>Angular</Menu.Item>
              </Menu.Group>

              <Menu.Separator />

              <Menu.Group>
                <Menu.GroupLabel>CSS Frameworks</Menu.GroupLabel>
                <Menu.Item>Tailwind CSS</Menu.Item>
                <Menu.Item>Bootstrap</Menu.Item>
                <Menu.Item>Bulma</Menu.Item>
              </Menu.Group>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu>
    )
  },
}

export const WithSubmenu: Story = {
  render() {
    return (
      <Menu>
        <Menu.Trigger render={<Button />}>Open Menu</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item>Item 1</Menu.Item>
              <Menu.Item>Item 2</Menu.Item>
              <Menu.Submenu>
                <Menu.SubTrigger>More items</Menu.SubTrigger>
                <Menu.Portal>
                  <Menu.Positioner sideOffset={4} align="start" side="right">
                    <Menu.Content>
                      <Menu.Item>Sub Item 1</Menu.Item>
                      <Menu.Item>Sub Item 2</Menu.Item>
                      <Menu.Item>Sub Item 3</Menu.Item>
                    </Menu.Content>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Submenu>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu>
    )
  },
}
