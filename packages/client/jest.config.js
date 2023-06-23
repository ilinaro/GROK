import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  watchPathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/api/(.*)$': '<rootDir>/api/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/helpers/(.*)$': '<rootDir>/helpers/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/modules/(.*)$': '<rootDir>/modules/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/routes/(.*)$': '<rootDir>/routes/$1',
    '^@/ui/(.*)$': '<rootDir>/ui/$1'
  },
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}
