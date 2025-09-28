import { Portal, useCheckboxGroup } from '@ark-ui/react'
import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuCheck, LuChevronRight } from 'react-icons/lu'
import React from 'react'

import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuItemIndicator,
  MenuItemText,
  MenuPositioner,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
  MenuTriggerItem,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Menu',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Menu>
        <MenuTrigger asChild>
          <Button>Open menu</Button>
        </MenuTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu>
    )
  },
}

export const WithGroups: Story = {
  render() {
    return (
      <Menu>
        <MenuTrigger asChild>
          <Button>Open menu</Button>
        </MenuTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              <MenuItemGroup>
                <MenuItemGroupLabel>JS Frameworks</MenuItemGroupLabel>
                <MenuItem value="react">React</MenuItem>
                <MenuItem value="solid">Solid</MenuItem>
                <MenuItem value="vue">Vue</MenuItem>
              </MenuItemGroup>
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu>
    )
  },
}

export const Nested: Story = {
  render() {
    return (
      <Menu>
        <MenuTrigger asChild>
          <Button>Open menu</Button>
        </MenuTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              {/* Sub menu 1 */}
              <Menu>
                <MenuTriggerItem>
                  JS Frameworks
                  <LuChevronRight className="ml-auto size-4 shrink-0" aria-hidden />
                </MenuTriggerItem>
                <Portal>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="react">React</MenuItem>
                      <MenuItem value="solid">Solid</MenuItem>
                      <MenuItem value="vue">Vue</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </Portal>
              </Menu>
              {/* Sub menu 2 */}
              <Menu>
                <MenuTriggerItem>
                  CSS Frameworks
                  <LuChevronRight className="ml-auto size-4 shrink-0" aria-hidden />
                </MenuTriggerItem>
                <Portal>
                  <MenuPositioner>
                    <MenuContent>
                      <MenuItem value="panda">Panda</MenuItem>
                      <MenuItem value="tailwind">Tailwind</MenuItem>
                    </MenuContent>
                  </MenuPositioner>
                </Portal>
              </Menu>
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu>
    )
  },
}

function WithCheckboxDemo() {
  const group = useCheckboxGroup({ defaultValue: ['React'] })

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button>Open menu</Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            {['React', 'Solid', 'Vue', 'Svelte'].map(framework => (
              <MenuCheckboxItem
                key={framework}
                checked={group.isChecked(framework)}
                onCheckedChange={() => group.toggleValue(framework)}
                value={framework}
                closeOnSelect={false}
              >
                <MenuItemIndicator>
                  <LuCheck className="ml-auto size-4 shrink-0" aria-hidden />
                </MenuItemIndicator>
                <MenuItemText>{framework}</MenuItemText>
              </MenuCheckboxItem>
            ))}
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}

export const WithCheckbox: Story = {
  render: WithCheckboxDemo,
}

function WithRadioGroupDemo() {
  const [value, setValue] = React.useState('react')

  return (
    <Menu>
      <MenuTrigger asChild>
        <Button>Open menu</Button>
      </MenuTrigger>
      <Portal>
        <MenuPositioner>
          <MenuContent>
            <MenuRadioGroup value={value} onValueChange={e => setValue(e.value)}>
              <MenuItemGroupLabel>JS Frameworks</MenuItemGroupLabel>
              {['React', 'Solid', 'Vue', 'Svelte'].map(framework => (
                <MenuRadioItem key={framework} value={framework} closeOnSelect={false}>
                  <MenuItemIndicator>
                    <LuCheck className="ml-auto size-4 shrink-0" aria-hidden />
                  </MenuItemIndicator>
                  <MenuItemText>{framework}</MenuItemText>
                </MenuRadioItem>
              ))}
            </MenuRadioGroup>
          </MenuContent>
        </MenuPositioner>
      </Portal>
    </Menu>
  )
}

export const WithRadioGroup: Story = {
  render: WithRadioGroupDemo,
}

export const ContextMenu: Story = {
  render() {
    return (
      <Menu>
        <MenuContextTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click me
        </MenuContextTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              <MenuItem value="react">React</MenuItem>
              <MenuItem value="solid">Solid</MenuItem>
              <MenuItem value="vue">Vue</MenuItem>
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </Menu>
    )
  },
}
