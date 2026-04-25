import React from 'react'

import { errorHandlerAsync } from '~/utils/error-handler'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean>

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
  const [copiedText, setCopiedText] = React.useState<CopiedValue>(null)

  const copy: CopyFn = React.useCallback(async text => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    const [, error] = await errorHandlerAsync(navigator.clipboard.writeText(text))

    if (error) {
      console.warn('Copy failed', error)
      setCopiedText(null)
      return false
    }

    setCopiedText(text)
    return true
  }, [])

  return [copiedText, copy]
}
