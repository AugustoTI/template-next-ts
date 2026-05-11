'use client'

import { ThemeProvider as NextThemesProvider } from '@teispace/next-themes'
import * as React from 'react'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
