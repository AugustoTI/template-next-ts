const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    'src/**/*.(spec|test).ts(x)?',
    '!src/**/*.stories.tsx',
    '!src/pages/**/*.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

module.exports = createJestConfig(customJestConfig)
