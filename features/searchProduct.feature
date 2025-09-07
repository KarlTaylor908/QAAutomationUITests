Feature: Search for Product and to Basket

Scenario: Search for Laptop
    Given I am on the homepage
    When I accept cookies
    And I search for "laptop"
    Then I should see a "laptop" heading
