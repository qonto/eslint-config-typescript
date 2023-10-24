import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  testMatch: ["**/tests/**/*.spec.ts"],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { useESM: true }]
  },
};

export default config;
