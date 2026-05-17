import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Tabs } from '.'

export default {
  title: 'UI/Tabs',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
        <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
        <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
      </Tabs>
    )
  },
}

export const Underline: Story = {
  render() {
    return (
      <div className="max-w-fit">
        <Tabs defaultValue="tab-1">
          <div className="border-b border-base-300 dark:border-base-700">
            <Tabs.List variant="underline">
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </div>
          <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
        </Tabs>
      </div>
    )
  },
}

export const Vertical: Story = {
  render() {
    return (
      <div className="max-w-fit">
        <Tabs className="w-full" defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
        </Tabs>
      </div>
    )
  },
}

export const UnderlineVertical: Story = {
  render() {
    return (
      <div className="max-w-fit">
        <Tabs className="w-full flex-row" defaultValue="tab1" orientation="vertical">
          <div className="border-l border-base-300 dark:border-base-700">
            <Tabs.List variant="underline">
              <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
              <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
              <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
            </Tabs.List>
          </div>
          <Tabs.Content value="tab1">Content for Tab 1</Tabs.Content>
          <Tabs.Content value="tab2">Content for Tab 2</Tabs.Content>
          <Tabs.Content value="tab3">Content for Tab 3</Tabs.Content>
        </Tabs>
      </div>
    )
  },
}
