import { type Config } from 'tailwindcss'
import pluginAnimations from 'tailwindcss-animate'

export default {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [pluginAnimations],
} satisfies Config
