import { type StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  staticDirs: ['../public'],
  framework: '@storybook/nextjs',
}
export default config
