
const { chromium } = require('@playwright/test')
const { Given, When, Then, After } = require('@cucumber/cucumber');

 

Given('I navigate to the homepage', async function () {

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://www.google.com/');
  // Ensure browser is closed properly
});


