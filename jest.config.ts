import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig({
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: '@happy-dom/jest-environment',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
})
