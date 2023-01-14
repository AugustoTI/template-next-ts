const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/pages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/services/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/src/templates/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/**/*.stories.{js,jsx,ts,tsx}',
    '!<rootDir>/node_modules/',
  ],
  modulePaths: ['<rootDir>/', '<rootDir>/.jest'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

module.exports = createJestConfig(customJestConfig)
