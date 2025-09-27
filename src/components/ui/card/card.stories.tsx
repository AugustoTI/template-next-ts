import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Card } from '.'

export default {
  title: 'UI/Card',
  component: Card,
  render() {
    return (
      <div className="max-w-80">
        <Card>
          <h3 className="font-semibold text-base-900 dark:text-base-50">
            The greatest of all time (in tennis)
          </h3>
          <p className="mt-2 text-sm leading-6 text-base-900 dark:text-base-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis dicta
            dignissimos quos beatae vel cum asperiores, cumque esse. Dolorem!
          </p>
          <p className="mt-2 text-sm leading-6 text-base-900 dark:text-base-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt odio quasi
            reprehenderit optio.
          </p>
        </Card>
      </div>
    )
  },
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {}
