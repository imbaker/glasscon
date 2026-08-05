import { readFileSync } from 'node:fs';
import { test, expect } from '@playwright/test';

const prices = JSON.parse(
  readFileSync(new URL('../../src/data/prices.json', import.meta.url), 'utf8')
);

test.describe('Pages / Bottle Clocks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/bottle-clocks');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Glass Constructions - Bottle Clocks');
  });

  test('order form link is visible and points to a file', async ({ page }) => {
    const orderFormLink = page.getByRole('link', { name: 'Bottle Clocks Order Form' });

    await expect(orderFormLink).toBeVisible();
    await expect(orderFormLink).toHaveAttribute('href', /\.pdf$/i);
  });

  test('order form link resolves successfully', async ({ page }) => {
    const orderFormLink = page.getByRole('link', { name: 'Bottle Clocks Order Form' });
    const href = await orderFormLink.getAttribute('href');

    expect(href).toBeTruthy();

    const response = await page.request.get(href!);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/pdf');
  });

  test('pricing table reflects prices.json values', async ({ page }) => {
    const rows = page.locator('table tbody tr');

    await expect(rows).toHaveCount(prices.length);

    for (const item of prices) {
      const row = rows.filter({ hasText: item.size });

      await expect(row).toHaveCount(1);
      await expect(row).toContainText(item.size);
      await expect(row).toContainText(`£${item.price}`);
    }
  });

});
