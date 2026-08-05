import { test, expect } from '@playwright/test';

test.describe('Pages / Contact Us', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/bottle-clocks');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Glass Constructions - Bottle Clocks');
  });

  test('header is visible', async ({ page }) => {
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
  });

  test("footer is visible", async ({ page }) => {
    const footer = page.locator("footer").first();
    await expect(footer).toBeVisible();
  });

  test("footer contains current year", async ({ page }) => {
    const footer = page.locator("footer").first();
    const currentYear = new Date().getFullYear().toString();
    await expect(footer).toContainText(currentYear);
  });
});
