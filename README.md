Testing repository for playwright and cucubmer integration together

-Run with playwright: 
    ->Full test: npx playwright test
    ->Only label: npx playwright test --grep @tag2
-Run with Cucumber: 
    ->Full: npx ts-node ./node_modules/.bin/cucumber-js
    ->Only label: npx ts-node ./node_modules/.bin/cucumber-js --tags @SimpleTest1


Pending points:

Playwright without Cucumber:
 Understand how it works
 Test Given, When, Then model

 Cucumber
 Multi-Scenario sellection not working
 Test not ends. After close browser?


Configure playwright-bdd
npm i -D playwright-bdd
npm i -D @playwright/test @cucumber/cucumber

Create folder e2e/playwright-bdd
Create folder e2e/playwright-bdd/features
Create folder e2e/playwright-bdd/steps

Create file sample.feature under e2e/playwright-bdd/features
Create fixtures.ts and index.ts under e2e/playwright-bdd/steps

Modify file playwright.config.ts to point to e2e/playwright-bdd as test folder

Run test: npx bddgen && npx playwright test: run 3 tests

Annotations:
npx bddgen && npx playwright test --grep "@Tag1|@Tag2": OR -> 3 tests
npx bddgen && npx playwright test --grep "(?=.*@Tag1)(?=.*@Tag2)" -> AND: 1 test


