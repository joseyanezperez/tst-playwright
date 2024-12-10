Feature: Playwright Home Page

   @Tag1
    Scenario: Check title 1
        Given I am on Playwright home page
        When I click link "Get started"
        Then I see in title "Installation"

    @Tag2
    Scenario: Check title 2
        Given I am on Playwright home page
        When I click link "Get started"
        Then I see in title "Installation"

   @Tag1,@Tag2
    Scenario: Check title 3
        Given I am on Playwright home page
        When I click link "Get started"
        Then I see in title "Installation"