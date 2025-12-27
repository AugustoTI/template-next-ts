import { getRequestConfig } from 'next-intl/server'

// import acceptLanguage from 'accept-language'
// import { headers } from 'next/headers'
// import { fallbackLocale, locales } from './locales'
// acceptLanguage.languages(locales)

export default getRequestConfig(async () => {
  // const headersStore = await headers()
  // const localeAccepted = acceptLanguage.get(headersStore.get('Accept-Language'))
  // const locale = localeAccepted ?? fallbackLocale

  // NOTE: Manually defined for static generation. If you need dynamic code, uncomment the code above.
  const locale = 'pt-BR'

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
