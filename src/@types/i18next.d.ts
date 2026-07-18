import 'i18next'

import { Resources } from '~/i18n/resource-type'

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: Resources
  }
}
