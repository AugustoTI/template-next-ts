import pluginScrollbar from 'tailwind-scrollbar'
import { type Config } from 'tailwindcss'
import pluginAnimations from 'tailwindcss-animated'

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [pluginAnimations, pluginScrollbar],
} satisfies Config
