import { withThemeByClassName } from '@storybook/addon-themes'
import { type Preview } from '@storybook/nextjs-vite'

// @ts-expect-error: Loading global.css in Storybook for tailwind styles
import '../src/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      withThemeByClassName({
        themes: {
          light: '',
          dark: 'dark',
        },
        defaultTheme: 'light',
      }),
    ],

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview
