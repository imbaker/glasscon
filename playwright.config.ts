import { defineConfig, devices } from '@playwright/test';

const Pixel8 = {
  name: "Pixel 8",
  viewport: { width: 1080, height: 2400 },
  deviceScaleFactor: 2.625,
  isMobile: true,
  hasTouch: true,
  userAgent:
    "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Mobile Safari/537.36",
};

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report" }],
    [
      "junit",
      {
        outputFile: "test-results/results.xml",
        includeProjectInTestName: true,
      },
    ],
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "pixel-8", use: { ...Pixel8 } },
  ],
  webServer: {
    command: "pnpm exec http-server dist -p 4321 --gzip -c-1",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
