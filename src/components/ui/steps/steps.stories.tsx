import { type Meta, type StoryObj } from '@storybook/nextjs'

import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsSeparator,
  StepsTrigger,
} from '.'
import { Button } from '../button'

export default {
  title: 'UI/Steps',
} satisfies Meta

type Story = StoryObj

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

export const Default: Story = {
  render() {
    return (
      <div className="max-w-2xl">
        <Steps count={items.length}>
          <StepsList>
            {items.map((item, idx) => (
              <StepsItem key={idx} index={idx}>
                <StepsTrigger>
                  <StepsIndicator>{idx + 1}</StepsIndicator>
                  <span>{item.title}</span>
                </StepsTrigger>
                <StepsSeparator />
              </StepsItem>
            ))}
          </StepsList>

          {items.map((item, index) => (
            <StepsContent key={index} index={index}>
              {item.title} - {item.description}
            </StepsContent>
          ))}

          <StepsCompletedContent>
            Steps Complete - Thank you for filling out the form!
          </StepsCompletedContent>

          <div className="flex items-center gap-2">
            <StepsPrevTrigger asChild>
              <Button variant="secondary">Back</Button>
            </StepsPrevTrigger>
            <StepsNextTrigger asChild>
              <Button variant="secondary">Next</Button>
            </StepsNextTrigger>
          </div>
        </Steps>
      </div>
    )
  },
}
