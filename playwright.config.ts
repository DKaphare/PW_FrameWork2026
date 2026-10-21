import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */

import dotenv from 'dotenv';
import path from 'path';

//npm install dotenv
//ENV=qa npx playwright test

 //here what if ENV value is not assigned at that time QA value will work
const ENV = process.env.ENV || "dev";
console.log('Running tests on Environment: ', ENV);


// dotenv.config({ path: `config/.env.${ENV}` });

dotenv.config({
    path: path.resolve(process.cwd(), 'config', '.env.dev'),
});

console.log(process.env.U);

console.log(process.env.P);

console.log('API base URL',process.env.API_BASE_URL);
console.log('API Token loaded:',
    Boolean(process.env.API_TOKEN));
///to checkconfig isue
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
  reporter: [
    ['list'],
    ['html',{outputFolder:"reports/html-report",open:'never'}],
    ["allure-playwright",{
      outputFolder:"allure-results",
      suitTitle:true,
    }],
    // ['reporting-labs',reportingLabs]

  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL:process.env.BU,
   
    headless:false,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot:'on',
    video:'on'
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

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
