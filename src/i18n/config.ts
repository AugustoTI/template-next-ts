import { env } from '~/config/env'
import type { I18nConfig } from 'next-i18next/proxy'

const resourceLoader: I18nConfig['resourceLoader'] =
  env.NODE_ENV === 'development'
    ? async (language, namespace) => {
        const fs = await import('fs/promises')
        const path = await import('path')
        const content = await fs.readFile(
          path.resolve(process.cwd(), `src/i18n/locales/${language}/${namespace}.json`),
          'utf-8',
        )
        return JSON.parse(content)
      }
    : (language, namespace) => import(`./locales/${language}/${namespace}.json`)

const i18nConfig: I18nConfig = {
  supportedLngs: ['pt-BR'],
  fallbackLng: 'pt-BR',
  localeInPath: false,
  resourceLoader: resourceLoader,
  reloadOnPrerender: env.NODE_ENV === 'development',
}

export { i18nConfig }
