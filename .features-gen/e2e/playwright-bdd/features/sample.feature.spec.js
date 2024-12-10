/** Generated from: e2e/playwright-bdd/features/sample.feature */
import { test } from "../../../../e2e/playwright-bdd/steps/fixtures.ts";

test.describe("Playwright Home Page", () => {

  test("Check title 1", { tag: ["@Tag1"] }, async ({ Given, page, When, Then }) => {
    await Given("I am on Playwright home page", null, { page });
    await When("I click link \"Get started\"", null, { page });
    await Then("I see in title \"Installation\"", null, { page });
  });

  test("Check title 2", { tag: ["@Tag2"] }, async ({ Given, page, When, Then }) => {
    await Given("I am on Playwright home page", null, { page });
    await When("I click link \"Get started\"", null, { page });
    await Then("I see in title \"Installation\"", null, { page });
  });

  test("Check title 3", { tag: ["@Tag1,", "@Tag2"] }, async ({ Given, page, When, Then }) => {
    await Given("I am on Playwright home page", null, { page });
    await When("I click link \"Get started\"", null, { page });
    await Then("I see in title \"Installation\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("e2e/playwright-bdd/features/sample.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Check title 1": {"pickleLocation":"4:5","tags":["@Tag1"],"ownTags":["@Tag1"]},
  "Check title 2": {"pickleLocation":"10:5","tags":["@Tag2"],"ownTags":["@Tag2"]},
  "Check title 3": {"pickleLocation":"16:5","tags":["@Tag1,","@Tag2"],"ownTags":["@Tag2","@Tag1,"]},
};