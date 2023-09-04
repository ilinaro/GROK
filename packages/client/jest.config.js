import dotenv from 'dotenv'
dotenv.config()

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  watchPathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '\\.module\\.scss$': 'identity-obj-proxy',
    "\\.(png|jpg|ico|jpeg|gif)$":
      "<rootDir>/src/__mocks__/image-mock.js",
  },
}
