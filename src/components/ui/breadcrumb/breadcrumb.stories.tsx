import { Portal } from '@ark-ui/react'
import { type Meta, type StoryObj } from '@storybook/nextjs'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '.'
import { Menu, MenuContent, MenuItem, MenuPositioner, MenuTrigger } from '../menu'

export default {
  title: 'Breadcrumb',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <Menu>
              <MenuTrigger className="flex items-center gap-1">
                <BreadcrumbEllipsis className="size-4" />
                <span className="sr-only">Toggle menu</span>
              </MenuTrigger>
              <Portal>
                <MenuPositioner>
                  <MenuContent>
                    <MenuItem value="documentation">Documentation</MenuItem>
                    <MenuItem value="themes">Themes</MenuItem>
                    <MenuItem value="gitHub">GitHub</MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </Portal>
            </Menu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs/components">Components</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  },
}
