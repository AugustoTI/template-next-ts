import { type Meta, type StoryObj } from '@storybook/nextjs'

import { RadioGroup } from '.'
import { Label } from '../label'

export default {
  title: 'UI/Radio Group',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <RadioGroup defaultValue="next">
        <Label>
          <RadioGroup.Radio value="next" /> Next.js
        </Label>
        <Label>
          <RadioGroup.Radio value="vite" /> Vite
        </Label>
        <Label>
          <RadioGroup.Radio value="astro" /> Astro
        </Label>
      </RadioGroup>
    )
  },
}
