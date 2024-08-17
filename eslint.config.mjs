import eslint from '@eslint/js'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPrettier from 'eslint-plugin-prettier/recommended'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.jest },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    ignores: [
      '**/*.d.ts',
      'node_modules',
      'public/**',
      'coverage/**',
      '.vscode/**',
      '.public/**',
      '.next/**',
      '*.tsbuildinfo',
      'pnpm-lock.yaml',
      '.storybook/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPrettier,
  {
    files: ['**/*.{mjs,ts,tsx}'],
    plugins: {
      react: eslintReact,
      'react-hooks': eslintReactHooks,
    },
    rules: {
      ...eslintReact.configs.flat.recommended.rules,
      ...eslintReact.configs.flat['jsx-runtime'].rules,
      ...eslintReactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  jsxA11y.flatConfigs.recommended,
]
