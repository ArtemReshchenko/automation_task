import { Project } from '@playwright/test';

export const baseProjectConfig: Project = {
    testDir: './specs',
    fullyParallel: true,
    timeout: 30000,
    use: {
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    retries: process.env.CI ? 2 : 0,
};