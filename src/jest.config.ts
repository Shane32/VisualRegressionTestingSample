// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    setupFilesAfterEnv: ['./setupTests.ts'],
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
        '^.+\\.s?css$': 'jest-transform-scss',
        '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
    },
    maxWorkers: 1,
    rootDir: '.'
};
export default config;

// Or async function
/*
export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
    };
};
*/
