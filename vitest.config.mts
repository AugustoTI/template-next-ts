import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    passWithNoTests: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
