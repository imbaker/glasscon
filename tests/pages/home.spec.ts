import { test, expect } from '@playwright/test';

test.describe('Pages / Home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Glass Constructions - Home');
  });

});
