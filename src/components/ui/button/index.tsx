import { ark, type HTMLArkProps } from '@ark-ui/react/factory'

import { buttonVariants, ButtonVariantsProps } from './button.styles'

export interface ButtonProps extends HTMLArkProps<'button'>, ButtonVariantsProps {}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <ark.button className={buttonVariants({ className, variant, size })} {...props} />
  )
}
