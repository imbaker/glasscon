import { test, expect } from '@playwright/test';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Bottle Clocks', path: '/bottle-clocks' },
  { name: 'Contact Us', path: '/contact-us' },
];
const currentYear = new Date().getFullYear().toString();

for (const pageInfo of pages) {
  test.describe(`Shared page checks / ${pageInfo.name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(pageInfo.path);
    });

    test('header is visible', async ({ page }) => {
      const header = page.locator('header').first();
      await expect(header).toBeVisible();
    });

    test('footer is visible and contains the current year', async ({ page }, testInfo) => {
      const footer = page.locator('footer').first();

      testInfo.annotations.push({ type: 'currentYear', description: currentYear });

      await expect(footer).toBeVisible();
      await expect(footer).toContainText(currentYear);
    });
  });
}
