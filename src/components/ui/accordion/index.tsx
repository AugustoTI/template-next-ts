import { Accordion as ArkAccordion } from '@ark-ui/react/accordion'

import { cn } from '~/utils/cn'

export function Accordion({
  collapsible = true,
  unmountOnExit = true,
  lazyMount = true,
  ...props
}: React.ComponentProps<typeof ArkAccordion.Root>) {
  return (
    <ArkAccordion.Root
      collapsible={collapsible}
      unmountOnExit={unmountOnExit}
      lazyMount={lazyMount}
      {...props}
    />
  )
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof ArkAccordion.Item>) {
  return (
    <ArkAccordion.Item
      className={cn(
        // base
        'overflow-hidden border-b first:mt-0',
        // border color
        'border-base-200 dark:border-base-800',
        className,
      )}
      {...props}
    />
  )
}

export function AccordionItemTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ArkAccordion.ItemTrigger>) {
  return (
    <ArkAccordion.ItemTrigger
      className={cn(
        // base
        'group flex w-full flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm leading-none font-medium',
        // text color
        'text-base-900 dark:text-base-50',
        // disabled
        'data-[disabled]:cursor-default data-[disabled]:text-base-400 dark:data-[disabled]:text-base-600',
        //focus
        'focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:outline-hidden focus-visible:ring-inset',
        className,
      )}
      {...props}
    />
  )
}

export function AccordionItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ArkAccordion.ItemIndicator>) {
  return (
    <ArkAccordion.ItemIndicator
      className={cn(
        // base
        'size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] data-[state=open]:-rotate-45',
        // text color
        'text-base-400 dark:text-base-600',
        // disabled
        'data-[disabled]:text-base-300 dark:data-[disabled]:text-base-700',
        className,
      )}
      {...props}
    />
  )
}

export function AccordionItemContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ArkAccordion.ItemContent>) {
  return (
    <ArkAccordion.ItemContent
      className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn(
          // base
          'overflow-hidden pb-4 text-sm',
          // text color
          'text-base-700 dark:text-base-200',
          className,
        )}
      >
        {children}
      </div>
    </ArkAccordion.ItemContent>
  )
}
