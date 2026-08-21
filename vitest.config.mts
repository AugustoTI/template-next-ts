import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
		passWithNoTests: true,
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
			include: ['src/**/*.ts', 'src/**/*.container.{ts,tsx}'],
			exclude: [
				'**/__tests__/**',
				'**/*.d.ts',
				'**/node_modules/**',
				'**/enums/**',
				'**/interfaces/**',
				'**/types.ts/**',
				'**/i18n/**',
				'**/services/**',
				'**/stories/**',
				'**/styles/**',
				'**/config/**',
			],
			reporter: ['html', 'json-summary', 'clover', 'json'],
		},
  },
})
