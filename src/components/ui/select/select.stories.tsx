import { createListCollection } from '@ark-ui/react/collection'
import { Portal } from '@ark-ui/react/portal'
import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuChevronDown } from 'react-icons/lu'
import { RiCheckLine } from 'react-icons/ri'

import {
  Select,
  SelectContent,
  SelectControl,
  SelectHidden,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValueText,
} from '.'

export default {
  title: 'UI/Select',
  component: Select,
  decorators: [
    Story => (
      <div className="max-w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>

type Story = StoryObj<typeof Select>

function SelectDemo() {
  const collection = createListCollection({
    items: [
      'React',
      'Solid',
      'Vue',
      'Svelte',
      'Astro',
      'Nuxt',
      'Jquery',
      'HTMLX',
      'Django',
      'Flask',
      'Laravel',
      'Nest',
      'Next',
    ],
  })

  return (
    <Select collection={collection} multiple>
      <SelectHidden />
      <SelectLabel>Framework</SelectLabel>
      <SelectControl>
        <SelectTrigger>
          <SelectValueText placeholder="Select a Framework" />
          <SelectIndicator>
            <LuChevronDown />
          </SelectIndicator>
        </SelectTrigger>
      </SelectControl>
      <Portal>
        <SelectPositioner>
          <SelectContent>
            <SelectItemGroup>
              <SelectItemGroupLabel>Frameworks</SelectItemGroupLabel>
              {collection.items.map(item => (
                <SelectItem key={item} item={item}>
                  <SelectItemText>{item}</SelectItemText>
                  <SelectItemIndicator>
                    <RiCheckLine
                      className="size-5 shrink-0 text-base-800 dark:text-base-200"
                      aria-hidden="true"
                    />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectItemGroup>
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  )
}

export const Default: Story = {
  render() {
    return <SelectDemo />
  },
}
