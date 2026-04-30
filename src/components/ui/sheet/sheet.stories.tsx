import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Sheet } from '.'
import { Button } from '../button'

export default {
  title: 'UI/Sheet',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Sheet>
        <Sheet.Trigger render={Button}>Open Sheet</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Backdrop />
          <Sheet.Content>
            <Sheet.Header>
              <Sheet.Title>Sheet Title</Sheet.Title>
              <Sheet.Description>This is a description of the sheet.</Sheet.Description>
            </Sheet.Header>
            <Sheet.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus
                ratione officia dolorum quasi hic in suscipit explicabo minus dignissimos
                qui praesentium iste, eum ipsa ea culpa ut adipisci reiciendis? Adipisci
                omnis eligendi voluptatum nobis, doloremque quam, quia ipsa provident aut
                dolor modi incidunt voluptate dicta animi cupiditate aliquam ea sequi
                earum est sapiente quae quasi ad eius! Corrupti, atque iste ut rem non
                architecto facere vero laboriosam deserunt mollitia vitae illo qui
                voluptate et eligendi! Voluptatem, a vitae! Ut veritatis tempora labore a.
                Dolor facere facilis velit illum laudantium, magnam a consectetur
                laboriosam eligendi reprehenderit alias veritatis non placeat.
              </p>
            </Sheet.Body>
            <Sheet.Footer>
              <Sheet.Close render={<Button variant="secondary" />}>Cancel</Sheet.Close>
              <Sheet.Close render={<Button />}>Save</Sheet.Close>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet>
    )
  },
}
