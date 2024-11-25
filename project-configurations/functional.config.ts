import { Project, devices } from '@playwright/test';
import { baseProjectConfig } from './base.config';

export const functionalProjectConfig: Project[] = [
    {
        ...baseProjectConfig,
        name: 'Desktop Chrome',
        use: { 
            ...devices['Desktop Chrome'],
            viewport: { width: 1920, height: 1080 },
            executionMode: 'large'
        },
        grep: /(?=.*@functional)(?=.*@desktop)/,
    },
    {
        ...baseProjectConfig,
        name: 'Mobile Chrome',
        use: { 
            ...devices['iPhone 12 Pro'],
            executionMode: 'small',
            isMobile: true,
            deviceScaleFactor: 2
        },
        grep: /(?=.*@functional)(?=.*@mobile)/,
    }
];