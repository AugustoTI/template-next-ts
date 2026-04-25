import { env } from '~/config/env'
import dayjs from 'dayjs'

function devConsole(method: (...data: unknown[]) => void, ...args: unknown[]) {
  if (env.NODE_ENV === 'development') {
    const formattedTime = dayjs().format('HH:mm:ss')
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
