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