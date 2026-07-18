import React from 'react'

const subscribe = () => () => {}

export function useIsClientSide() {
  return React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )
}
