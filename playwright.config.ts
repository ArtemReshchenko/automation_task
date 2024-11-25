import { defineConfig, devices } from '@playwright/test';
import { vrProjects } from './project-configurations/visual-regression.config';
import { functionalProjectConfig } from './project-configurations/functional.config';

let finalProject = [
  ...functionalProjectConfig,
  ...vrProjects,
]

export default defineConfig({
  timeout: 2 * 60 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: true,
    browserName: 'chromium',
    actionTimeout: 10 * 1000,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: false,
    screenshot: {mode: 'only-on-failure', fullPage: true},
    trace: 'on-first-retry',
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=egl'],
    }
  },

  projects: finalProject
});