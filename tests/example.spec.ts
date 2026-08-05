import { test, expect } from '@playwright/test';

test('homepage loads and shows header', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Glass Constructions - Home');
  // page.locator('header') resolves to multiple elements; target the first one
  const header = page.locator('header').first();
  await expect(header).toBeVisible();
});
