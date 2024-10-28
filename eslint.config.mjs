import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
  },
  {
    ignores: [
      '**/*.d.ts',
      'node_modules',
      'public/**',
      'out/**',
      'build/**',
      'coverage/**',
      '.vscode/**',
      '.public/**',
      '.next/**',
      '*.tsbuildinfo',
      'pnpm-lock.yaml',
      '!.storybook',
    ],
  },

  eslintPrettier,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReact.configs.flat['jsx-runtime'].rules,
      ...eslintReactHooks.configs.recommended.rules,
      'react/prop-types': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
  jsxA11y.flatConfigs.recommended,
)
