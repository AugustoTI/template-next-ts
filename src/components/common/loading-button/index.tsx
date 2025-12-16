import { Button, type ButtonProps } from '~/components/ui/button'
import { Icons } from '~/components/ui/icons'

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
  spinner?: React.FC<React.ComponentProps<'svg'>> | React.ReactElement
}

export function LoadingButton({
  loading,
  loadingText,
  spinner: Spinner = Icons.Loader,
  disabled,
  children,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading ? (
        <>
          {typeof Spinner === 'function' ? <Spinner className="animate-spin" /> : Spinner}
          {loadingText ? <span>{loadingText}</span> : children}
        </>
      ) : (
        children
      )}
    </Button>
  )
}
