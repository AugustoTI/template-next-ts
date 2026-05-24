import { type Meta, type StoryObj } from '@storybook/nextjs'

import { Select } from '.'
import { Field } from '../field'

export default {
  title: 'UI/Select',
} satisfies Meta

type Story = StoryObj

const northAmerica = [
  { label: 'Eastern Standard Time', value: 'est' },
  { label: 'Central Standard Time', value: 'cst' },
  { label: 'Mountain Standard Time', value: 'mst' },
  { label: 'Pacific Standard Time', value: 'pst' },
  { label: 'Alaska Standard Time', value: 'akst' },
  { label: 'Hawaii Standard Time', value: 'hst' },
]
const europeAfrica = [
  { label: 'Greenwich Mean Time', value: 'gmt' },
  { label: 'Central European Time', value: 'cet' },
  { label: 'Eastern European Time', value: 'eet' },
  { label: 'Western European Summer Time', value: 'west' },
  { label: 'Central Africa Time', value: 'cat' },
  { label: 'East Africa Time', value: 'eat' },
]
const asia = [
  { label: 'Moscow Time', value: 'msk' },
  { label: 'India Standard Time', value: 'ist' },
  { label: 'China Standard Time', value: 'cst_china' },
  { label: 'Japan Standard Time', value: 'jst' },
  { label: 'Korea Standard Time', value: 'kst' },
  { label: 'Indonesia Central Standard Time', value: 'ist_indonesia' },
]
const australiaPacific = [
  { label: 'Australian Western Standard Time', value: 'awst' },
  { label: 'Australian Central Standard Time', value: 'acst' },
  { label: 'Australian Eastern Standard Time', value: 'aest' },
  { label: 'New Zealand Standard Time', value: 'nzst' },
  { label: 'Fiji Time', value: 'fjt' },
]

const southAmerica = [
  { label: 'Argentina Time', value: 'art' },
  { label: 'Bolivia Time', value: 'bot' },
  { label: 'Brasilia Time', value: 'brt' },
  { label: 'Chile Standard Time', value: 'clt' },
]

const others = [
  {
    label: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, suscipit?',
    value: 'abc',
  },
]

const items = [
  ...northAmerica,
  ...europeAfrica,
  ...asia,
  ...australiaPacific,
  ...southAmerica,
  ...others,
]

export const Default: Story = {
  render() {
    return (
      <Field className="max-w-80">
        <Field.Label>Label</Field.Label>
        <Select items={items}>
          <Select.Trigger>
            <Select.Value placeholder="Select a timezone" />
          </Select.Trigger>
          <Select.Content>
            <Select.List>
              <Select.Group>
                <Select.Label>North America</Select.Label>
                {northAmerica.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Group>
                <Select.Label>Europe & Africa</Select.Label>
                {europeAfrica.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Group>
                <Select.Label>Asia</Select.Label>
                {asia.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Group>
                <Select.Label>Australia & Pacific</Select.Label>
                {australiaPacific.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Group>
                <Select.Label>South America</Select.Label>
                {southAmerica.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
              <Select.Group>
                <Select.Label>Others</Select.Label>
                {others.map(item => (
                  <Select.Item key={item.value} value={item.value}>
                    {item.label}
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.List>
          </Select.Content>
        </Select>
      </Field>
    )
  },
}
