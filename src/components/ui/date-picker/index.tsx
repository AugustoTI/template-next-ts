import { DatePicker as ArkDatePicker } from '@ark-ui/react/date-picker'
import { Label } from '@radix-ui/react-label'
import { cn } from 'tailwind-variants'

import { labelStyle } from '../field'

export function DatePicker({
  className,
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Root>) {
  return <ArkDatePicker.Root className={cn('grid gap-2', className)} {...props} />
}

export function DatePickerLabel({
  className,
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Label>) {
  return (
    <ArkDatePicker.Label asChild>
      <Label className={cn(labelStyle(), className)} {...props} />
    </ArkDatePicker.Label>
  )
}

export function DatePickerControl({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Control>) {
  return <ArkDatePicker.Control {...props} />
}

export function DatePickerInput({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Input>) {
  return <ArkDatePicker.Input {...props} />
}

export function DatePickerTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Trigger>) {
  return <ArkDatePicker.Trigger {...props} />
}

export function DatePickerClearTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.ClearTrigger>) {
  return <ArkDatePicker.ClearTrigger {...props} />
}

export function DatePickerPositioner({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Positioner>) {
  return <ArkDatePicker.Positioner {...props} />
}

export function DatePickerContent({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Content>) {
  return <ArkDatePicker.Content {...props} />
}

export function DatePickerYearSelect({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.YearSelect>) {
  return <ArkDatePicker.YearSelect {...props} />
}

export function DatePickerMonthSelect({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.MonthSelect>) {
  return <ArkDatePicker.MonthSelect {...props} />
}

export function DatePickerView({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.View>) {
  return <ArkDatePicker.View {...props} />
}

export function DatePickerContext({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Context>) {
  return <ArkDatePicker.Context {...props} />
}

export function DatePickerViewControl({
  className,
  ...props
}: React.ComponentProps<typeof ArkDatePicker.ViewControl>) {
  return (
    <ArkDatePicker.ViewControl
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

export function DatePickerPrevTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.PrevTrigger>) {
  return <ArkDatePicker.PrevTrigger {...props} />
}

export function DatePickerNextTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.NextTrigger>) {
  return <ArkDatePicker.NextTrigger {...props} />
}

export function DatePickerViewTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.ViewTrigger>) {
  return <ArkDatePicker.ViewTrigger {...props} />
}

export function DatePickerRangeText({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.RangeText>) {
  return <ArkDatePicker.RangeText {...props} />
}

export function DatePickerTable({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.Table>) {
  return <ArkDatePicker.Table {...props} />
}

export function DatePickerTableHead({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableHead>) {
  return <ArkDatePicker.TableHead {...props} />
}

export function DatePickerTableRow({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableRow>) {
  return <ArkDatePicker.TableRow {...props} />
}

export function DatePickerTableHeader({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableHeader>) {
  return <ArkDatePicker.TableHeader {...props} />
}

export function DatePickerTableBody({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableBody>) {
  return <ArkDatePicker.TableBody {...props} />
}

export function DatePickerTableCell({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableCell>) {
  return <ArkDatePicker.TableCell {...props} />
}

export function DatePickerTableCellTrigger({
  ...props
}: React.ComponentProps<typeof ArkDatePicker.TableCellTrigger>) {
  return <ArkDatePicker.TableCellTrigger {...props} />
}
