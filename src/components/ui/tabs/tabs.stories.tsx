import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '.'

export default {
  title: 'UI/Tabs',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tabs defaultValue="item-1">
        <TabsList variant="solid">
          <TabsTrigger value="item-1">Item 1</TabsTrigger>
          <TabsTrigger value="item-2">Item 2</TabsTrigger>
          <TabsTrigger value="item-3">Item 3</TabsTrigger>
        </TabsList>
        <TabsContent value="item-1">
          <p className="text-sm dark:text-base-300">Tab 1 content</p>
        </TabsContent>
        <TabsContent value="item-2">
          <p className="text-sm dark:text-base-300">Tab 2 content</p>
        </TabsContent>
        <TabsContent value="item-3">
          <p className="text-sm dark:text-base-300">Tab 3 content</p>
        </TabsContent>
      </Tabs>
    )
  },
}
