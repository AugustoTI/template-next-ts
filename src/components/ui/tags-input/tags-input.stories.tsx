import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuX } from 'react-icons/lu'

import {
  TagsInput,
  TagsInputClearTrigger,
  TagsInputContext,
  TagsInputControl,
  TagsInputElement,
  TagsInputItem,
  TagsInputItemDeleteTrigger,
  TagsInputItemElement,
  TagsInputItemPreview,
  TagsInputItemText,
  TagsInputLabel,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/TagsInput',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <div className="max-w-sm">
        <TagsInput>
          <TagsInputContext>
            {api => (
              <>
                <TagsInputLabel>Frameworks</TagsInputLabel>
                <TagsInputControl>
                  {api.value.map((framework, idx) => (
                    <TagsInputItem key={idx} index={idx} value={framework}>
                      <TagsInputItemPreview>
                        <TagsInputItemText>{framework}</TagsInputItemText>
                        <TagsInputItemDeleteTrigger>
                          <LuX />
                        </TagsInputItemDeleteTrigger>
                      </TagsInputItemPreview>
                      <TagsInputItemElement />
                    </TagsInputItem>
                  ))}
                  <TagsInputElement placeholder="Add Framework" />
                </TagsInputControl>
                <TagsInputClearTrigger asChild>
                  <Button variant="secondary">Clear</Button>
                </TagsInputClearTrigger>
              </>
            )}
          </TagsInputContext>
        </TagsInput>
      </div>
    )
  },
}
