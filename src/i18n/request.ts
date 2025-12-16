import acceptLanguage from 'accept-language'
import { getRequestConfig } from 'next-intl/server'
import { headers } from 'next/headers'

import { fallbackLocale, locales } from './locales'

acceptLanguage.languages(locales)

export default getRequestConfig(async () => {
  const headersStore = await headers()

  const localeAccepted = acceptLanguage.get(headersStore.get('Accept-Language'))

  const locale = localeAccepted ?? fallbackLocale

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
