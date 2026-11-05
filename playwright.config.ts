import { defineConfig, devices } from '@playwright/test';
import reportingLabs from './reporting-labs.config';

import dotenv from 'dotenv';
import path from 'path';

//npm install dotenv
//ENV=qa npx playwright test
const ENV = process.env.ENV || "dev";
console.log('Running tests on Environment: ', ENV);
dotenv.config({ path: `config/.env.${ENV}` });

dotenv.config({
    path: path.resolve(process.cwd(), 'config', '.env.dev'),
});

console.log(process.env.USERNAME);

console.log(process.env.PASSWORD);

console.log('API base URL',process.env.API_BASE_URL);
console.log('API Token loaded:',
    Boolean(process.env.API_TOKEN));
// /to checkconfig isue-Issue in pipeline
const result = dotenv.config({
    path: `config/.env.${ENV}`
});

console.log('File parsed:', result.parsed);
console.log('Parsing error:', result.error);

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 
  [
    ['html',{outputFolder:"reports/html-report",open:'always'}],
    // ["allure-playwright",{
    //   outputFolder:"allure-results",
    //   suitTitle:true,
    // }],
    ['reporting-labs',reportingLabs]
  ],
 
  use: {
    baseURL: process.env.BASE_URL,
    headless: false,
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],


});
