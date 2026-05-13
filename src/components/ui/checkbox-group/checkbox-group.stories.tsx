import { type Meta, type StoryObj } from '@storybook/nextjs'
import React from 'react'

import { CheckboxGroup } from '.'
import { Checkbox } from '../checkbox'
import { Label } from '../label'

export default {
  title: 'UI/CheckboxGroup',
} satisfies Meta

type Story = StoryObj

export const Default: Story = {
  render() {
    return (
      <CheckboxGroup defaultValue={['next']}>
        <Label>
          <Checkbox value="next" /> Next.js
        </Label>
        <Label>
          <Checkbox value="react" /> React
        </Label>
        <Label>
          <Checkbox value="astro" /> Astro
        </Label>
      </CheckboxGroup>
    )
  },
}

const frameworks = [
  { value: 'next', name: 'Next.js' },
  { value: 'vite', name: 'Vite' },
  { value: 'astro', name: 'Astro' },
]

export const ParentCheckbox: Story = {
  render() {
    return (
      <CheckboxGroup allValues={frameworks.map(framework => framework.value)}>
        <Label>
          <Checkbox parent /> Frameworks
        </Label>
        {frameworks.map(framework => (
          <Label className="ms-4" key={framework.value}>
            <Checkbox value={framework.value} />
            {framework.name}
          </Label>
        ))}
      </CheckboxGroup>
    )
  },
}

const mainPermissions = [
  { value: 'view-dashboard', name: 'View Dashboard' },
  { value: 'manage-users', name: 'Manage Users' },
  { value: 'access-reports', name: 'Access Reports' },
]

const userManagementPermissions = [
  { value: 'create-user', name: 'Create User' },
  { value: 'edit-user', name: 'Edit User' },
  { value: 'delete-user', name: 'Delete User' },
  { value: 'assign-roles', name: 'Assign Roles' },
]

export function NestedParentCheckbox() {
  const [mainValue, setMainValue] = React.useState<string[]>([])
  const [managementValue, setManagementValue] = React.useState<string[]>([])

  const managementIsPartial =
    managementValue.length > 0 &&
    managementValue.length !== userManagementPermissions.length

  return (
    <CheckboxGroup
      allValues={mainPermissions.map(p => p.value)}
      onValueChange={value => {
        if (value.includes('manage-users')) {
          setManagementValue(userManagementPermissions.map(p => p.value))
        } else if (managementValue.length === userManagementPermissions.length) {
          setManagementValue([])
        }
        setMainValue(value)
      }}
      value={mainValue}
    >
      <Label>
        <Checkbox indeterminate={managementIsPartial} parent />
        User Permissions
      </Label>
      {mainPermissions
        .filter(p => p.value !== 'manage-users')
        .map(p => (
          <Label className="ms-4" key={p.value}>
            <Checkbox value={p.value} />
            {p.name}
          </Label>
        ))}

      <CheckboxGroup
        allValues={userManagementPermissions.map(p => p.value)}
        className="ms-4"
        onValueChange={value => {
          if (value.length === userManagementPermissions.length) {
            setMainValue(prev => [...prev, 'manage-users'])
          } else {
            setMainValue(prev => prev.filter(v => v !== 'manage-users'))
          }
          setManagementValue(value)
        }}
        value={managementValue}
      >
        <Label>
          <Checkbox parent />
          Manage Users
        </Label>
        {userManagementPermissions.map(p => (
          <Label className="ms-4" key={p.value}>
            <Checkbox value={p.value} />
            {p.name}
          </Label>
        ))}
      </CheckboxGroup>
    </CheckboxGroup>
  )
}
