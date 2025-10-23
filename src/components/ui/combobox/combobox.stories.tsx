import {
  useListCollection,
  type ComboboxInputValueChangeDetails,
} from '@ark-ui/react/combobox'
import { useFilter } from '@ark-ui/react/locale'
import { Portal } from '@ark-ui/react/portal'
import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuCheck, LuChevronsUpDown, LuX } from 'react-icons/lu'

import {
  Combobox,
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxTrigger,
} from '.'
import { buttonVariants } from '../button/button.styles'

export default {
  title: 'UI/Combobox',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    const { contains } = useFilter({ sensitivity: 'base' })

    const { collection, filter } = useListCollection({
      initialItems: ['React', 'Solid', 'Vue', 'Svelte'],
      filter: contains,
    })

    const handleInputChange = (details: ComboboxInputValueChangeDetails) => {
      filter(details.inputValue)
    }

    return (
      <div className="flex">
        <Combobox collection={collection} onInputValueChange={handleInputChange}>
          <ComboboxLabel>Framework</ComboboxLabel>
          <ComboboxControl className="flex items-center gap-2">
            <div className="relative">
              <ComboboxInput className="pr-8" />
              <ComboboxTrigger
                className={buttonVariants({
                  className: 'absolute inset-y-0 right-3 my-auto border-none',
                })}
              >
                <LuChevronsUpDown />
              </ComboboxTrigger>
            </div>
            <ComboboxClearTrigger>
              <LuX className="size-4 shrink-0" />
            </ComboboxClearTrigger>
          </ComboboxControl>

          <Portal>
            <ComboboxPositioner>
              <ComboboxContent className="w-auto">
                <ComboboxItemGroup>
                  <ComboboxItemGroupLabel>Frameworks</ComboboxItemGroupLabel>
                  {collection.items.map(item => (
                    <ComboboxItem key={item} item={item}>
                      <ComboboxItemText>{item}</ComboboxItemText>
                      <ComboboxItemIndicator>
                        <LuCheck className="ml-auto size-4 shrink-0" aria-hidden />
                      </ComboboxItemIndicator>
                    </ComboboxItem>
                  ))}
                </ComboboxItemGroup>
              </ComboboxContent>
            </ComboboxPositioner>
          </Portal>
        </Combobox>
      </div>
    )
  },
}
