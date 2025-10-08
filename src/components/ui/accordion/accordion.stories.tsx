import { type Meta, type StoryObj } from '@storybook/nextjs'
import { RiAddLine } from 'react-icons/ri'

import {
  Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
} from '.'

export default {
  title: 'UI/Accordion',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Accordion>
        <AccordionItem value="react" className="max-w-80">
          <AccordionItemTrigger>
            What is React ?
            <AccordionItemIndicator asChild>
              <RiAddLine />
            </AccordionItemIndicator>
          </AccordionItemTrigger>

          <AccordionItemContent>
            React is a JavaScript library for building user interfaces.
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="Vue" className="max-w-80">
          <AccordionItemTrigger>
            What is Vue ?
            <AccordionItemIndicator asChild>
              <RiAddLine />
            </AccordionItemIndicator>
          </AccordionItemTrigger>

          <AccordionItemContent>
            Vue is a JavaScript library for building user interfaces.
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="Solid" className="max-w-80">
          <AccordionItemTrigger>
            What is Solid ?
            <AccordionItemIndicator asChild>
              <RiAddLine />
            </AccordionItemIndicator>
          </AccordionItemTrigger>

          <AccordionItemContent>
            Solid is a JavaScript library for building user interfaces.
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    )
  },
}
