import { Project, devices, expect } from '@playwright/test';
import { baseProjectConfig } from './base.config';

const vrBaseConfig = {
    expect: {
        toHaveScreenshot: { 
            maxDiffPixelRatio: 0.01,
            threshold: 0.3,
            animations: 'disabled'
        },
        toMatchSnapshot: { 
            maxDiffPixelRatio: 0.01 
        },
    },
    use: {
        screenshot: 'on',
        video: 'off',
        trace: 'off',
    }
};

export const vrProjects: Project[] = [
    {
        ...baseProjectConfig,
        ...vrBaseConfig,
        name: 'Desktop-VR',
        use: { 
            executionMode: 'large',
            viewport: { width: 1920, height: 1080 }
        },
        snapshotPathTemplate: '{testDir}/playwright-baseline-snapshots/large/{arg}{ext}',
        grep: /(?=.*@visual-regression)(?=.*@desktop)/,
    },
    {
        ...baseProjectConfig,
        ...vrBaseConfig,
        name: 'Mobile-VR',
        use: { 
            ...devices['iPhone 12 Pro'], 
            executionMode: 'small',
            isMobile: true,
            deviceScaleFactor: 2
        },
        snapshotPathTemplate: '{testDir}/playwright-baseline-snapshots/mobile/{arg}{ext}',
        grep: /(?=.*@visual-regression)(?=.*@mobile)/,
    },
    {
        ...baseProjectConfig,
        ...vrBaseConfig,
        name: 'Tablet-VR',
        use: { 
            ...devices['Galaxy Tab S4'], 
            executionMode: 'medium'
        },
        snapshotPathTemplate: '{testDir}/playwright-baseline-snapshots/tablet/{arg}{ext}',
        grep: /(?=.*@visual-regression)(?=.*@tablet)/
    }
];