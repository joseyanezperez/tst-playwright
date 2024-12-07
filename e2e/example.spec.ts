import { test, expect } from '@playwright/test';
import BasePage from './class BasePage ';

let basePage: BasePage;

test.describe('group', {
  tag: '@tag1'
}, () => {



  test('Given the title', async ({ page }) => {
    let url ='https://www.zara.com/es'
    let title='ZARA';
    basePage = new BasePage(page,url)
    
  await basePage.goToUrl()
  await basePage.checkTitle(title);
})


test('get started link',{tag: ['@tag2', '@tag3']},async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
});