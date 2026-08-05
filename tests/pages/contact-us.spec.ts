import { test, expect } from '@playwright/test';

test.describe('Pages / Contact Us', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/bottle-clocks');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Glass Constructions - Bottle Clocks');
  });

});
