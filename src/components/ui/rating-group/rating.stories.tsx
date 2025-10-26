import { type Meta, type StoryObj } from '@storybook/nextjs'
import { LuStar } from 'react-icons/lu'

import {
  RatingGroup,
  RatingGroupContext,
  RatingGroupControl,
  RatingGroupItem,
  RatingGroupLabel,
} from '.'

export default {
  title: 'UI/RatingGroup',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <RatingGroup count={5}>
        <RatingGroupLabel>Leave your rating</RatingGroupLabel>
        <RatingGroupControl>
          <RatingGroupContext>
            {({ items }) =>
              items.map(item => (
                <RatingGroupItem key={item} index={item} className="cursor-default">
                  <LuStar fill="current" stroke="current" size={24} />
                </RatingGroupItem>
              ))
            }
          </RatingGroupContext>
        </RatingGroupControl>
      </RatingGroup>
    )
  },
}
