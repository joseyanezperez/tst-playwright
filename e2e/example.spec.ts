import { test, expect } from '@playwright/test';



test.describe('group', {
  tag: '@tag1'
}, () => {
test('Given the title', async ({ page }) => {
  await page.goto('https://www.zara.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ZARA Official/);
})


test('get started link',{tag: ['@tag2', '@tag3']},async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
});