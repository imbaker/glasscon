import { test, expect } from '@playwright/test';

test('homepage loads and shows header', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/glasscon|Glasscon/i);
  const header = page.locator('header');
  await expect(header).toBeVisible();
});
