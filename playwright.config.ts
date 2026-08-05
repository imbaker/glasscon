import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [["list"], ["html", { open: "never" }]],
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
  ],
  webServer: {
    url: "http://localhost:4321",
    reuseExistingServer: true,
    timeout: 120000,
  },
});
