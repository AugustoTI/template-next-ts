import eslintReact from '@eslint-react/eslint-plugin'
import eslint from '@eslint/js'
import { type Linter } from 'eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

// Feature-Sliced Design: layers from highest to lowest. A layer may only import from the
// layers below it, and slices are only reachable through their public API (`index.ts`).
const FSD_LAYERS = ['_app', '_pages', 'widgets', 'features', 'entities', 'shared']
const FSD_SLICED_LAYERS = ['_pages', 'widgets', 'features', 'entities']

function fsdRestrictedImports(layer?: string): Linter.RulesRecord {
  const index = layer ? FSD_LAYERS.indexOf(layer) : -1
  const upperLayers = FSD_LAYERS.slice(0, Math.max(index, 0))
  const lowerSlicedLayers = FSD_SLICED_LAYERS.filter(l => FSD_LAYERS.indexOf(l) > index)
  const isSliced = layer !== undefined && FSD_SLICED_LAYERS.includes(layer)

  const patterns = [
    {
      group: upperLayers.flatMap(l => [`~/${l}`, `~/${l}/**`]),
      message: 'FSD: a layer can only import from the layers below it.',
    },
    {
      group: isSliced ? [`~/${layer}/**`] : [],
      message:
        'FSD: slices of the same layer cannot import each other. Use relative imports inside a slice.',
    },
    {
      group: lowerSlicedLayers.map(l => `~/${l}/*/**`),
      message: 'FSD: import slices through their public API (`~/<layer>/<slice>`).',
    },
  ].filter(pattern => pattern.group.length > 0)

  return { 'no-restricted-imports': ['error', { patterns }] }
}

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintReact.configs['recommended-typescript'],
  reactHooks.configs.flat.recommended,
  globalIgnores(['.next', 'coverage', 'storybook-static', '.temp'], 'Build artifacts'),
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globals.vitest },
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  { files: ['app/**/*.{ts,tsx}'], rules: fsdRestrictedImports() },
  ...FSD_LAYERS.map(layer => ({
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: fsdRestrictedImports(layer),
  })),
)
