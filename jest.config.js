const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverageFrom: [
    'src/**/*.test.ts(x)',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

module.exports = createJestConfig(customJestConfig)
