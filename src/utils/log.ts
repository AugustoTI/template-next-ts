import { getLocalTimeZone, now } from '@internationalized/date'
import { env } from '~/config/env'

function devConsole(method: (...data: unknown[]) => void, ...args: unknown[]) {
  if (env.NODE_ENV === 'development') {
    const currentTime = now(getLocalTimeZone())

    const hour = String(currentTime.hour).padStart(2, '0')
    const minute = String(currentTime.minute).padStart(2, '0')
    const second = String(currentTime.second).padStart(2, '0')

    const formattedTime = `${hour}:${minute}:${second}`
    method(formattedTime, ...args.filter(Boolean))
  }
}

export function devLog(...args: unknown[]) {
  devConsole(console.log, ...args)
}

export function devError(...args: unknown[]) {
  devConsole(console.error, ...args)
}

export function devWarn(...args: unknown[]) {
  devConsole(console.warn, ...args)
}
