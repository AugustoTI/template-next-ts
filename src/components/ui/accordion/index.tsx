import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
import { cn } from 'tailwind-variants'

import { Icons } from '../icons'

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        'border-b border-base-200 first:mt-0 last:border-b-0 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          'focus-visible:ring-ring flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-64 data-panel-open:*:data-[slot=accordion-indicator]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <Icons.ChevronDown
          data-slot="accordion-indicator"
          className="size-5 shrink-0 text-base-400 transition-transform duration-150 ease-[cubic-bezier(0.87,0,0.13,1)] data-disabled:text-base-300 dark:text-base-600 dark:data-disabled:text-base-700"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel
      className={cn(
        'h-(--accordion-panel-height) overflow-hidden transition-[height] duration-200 ease-in-out data-ending-style:h-0 data-starting-style:h-0',
        className,
      )}
      {...props}
    >
      <div className="pb-4 text-sm text-base-700 dark:text-base-200">{children}</div>
    </AccordionPrimitive.Panel>
  )
}

export const Accordion = Object.assign(AccordionPrimitive.Root, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})
