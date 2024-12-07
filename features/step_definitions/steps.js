const { Given, Then } = require('@cucumber/cucumber');
const { after } = require('node:test');
const { chromium } = require('playwright');

let browser, page;

Given('I navigate to the homepage', async function () {
  browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.google.com/');
  browser.close
});

after(async () => {
    await browser.close();
});