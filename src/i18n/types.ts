import {
  createTranslator,
  type Messages,
  type NamespaceKeys,
  type NestedKeyOf,
} from 'next-intl'

import messages from '../../messages/pt-BR.json'
import { formats } from './formats'
import { locales } from './locales'

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof locales)[number]
    Messages: typeof messages
    Formats: typeof formats
  }
}

type TranslateKey = NamespaceKeys<Messages, NestedKeyOf<Messages>>
export type TranslateFunction<T extends TranslateKey> = ReturnType<
  typeof createTranslator<Messages, T>
>
