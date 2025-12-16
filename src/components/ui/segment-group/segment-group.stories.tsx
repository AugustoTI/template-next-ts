import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  SegmentGroup,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemControl,
  SegmentGroupItemHiddenInput,
  SegmentGroupItemText,
} from '.'

export default {
  title: 'UI/SegmentGroup',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    const frameworks = ['React', 'Solid', 'Svelte', 'Vue']

    return (
      <div className="flex">
        <SegmentGroup defaultValue="React">
          <SegmentGroupIndicator />
          {frameworks.map(framework => (
            <SegmentGroupItem key={framework} value={framework}>
              <SegmentGroupItemText>{framework}</SegmentGroupItemText>
              <SegmentGroupItemControl />
              <SegmentGroupItemHiddenInput />
            </SegmentGroupItem>
          ))}
        </SegmentGroup>
      </div>
    )
  },
}
