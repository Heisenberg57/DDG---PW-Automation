import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    actionTimeout: 15*1000,
    trace: 'on-first-retry',
    headless: true,
    viewport: {width: 1280, height: 720},
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    baseURL:"https://www.google.com",
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        channel: 'chrome'
      }
    },
    {
      name: 'firefox',
      use: {
        browserName: 'firefox'
      }
    },
    {
      name: 'webkit',
      use: {
        browserName: 'webkit'
      }
    }
  ],
  outputDir: 'test-results/'
});