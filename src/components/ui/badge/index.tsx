import { ark, type HTMLProps } from '@ark-ui/react/factory'

import { badgeVariants, type BadgeVariantsProps } from './badge.styles'

interface BadgeProps extends HTMLProps<'span'>, BadgeVariantsProps {}

export function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
  return <ark.span className={badgeVariants({ className, variant })} {...props} />
}
