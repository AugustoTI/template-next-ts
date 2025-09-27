import { calloutVariants, type CalloutVariantsProps } from './callout.styles'

interface CalloutProps
  extends React.ComponentPropsWithoutRef<'div'>,
    CalloutVariantsProps {
  title: string
  icon?: React.ElementType | React.ReactElement
}

export function Callout({
  title,
  children,
  variant = 'primary',
  className,
  icon: Icon,
  ...props
}: CalloutProps) {
  return (
    <div className={calloutVariants({ variant, className })} {...props}>
      <div className="flex items-start">
        {Icon && typeof Icon === 'function' ? (
          <Icon className="mr-1.5 h-5 w-5 shrink-0" aria-hidden="true" />
        ) : (
          Icon
        )}
        <span className="font-semibold">{title}</span>
      </div>
      {children && <div className="mt-2 overflow-y-auto">{children}</div>}
    </div>
  )
}
