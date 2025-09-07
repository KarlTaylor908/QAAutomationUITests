Feature: Add Product to Basket

Scenario: Add laptop to Basket
    Given I am on the search results page
    And I add the "Lenovo IdeaPad Slim 3 15.6in N100 4GB 128GB Laptop" to the basket
    Then I should see the "Lenovo IdeaPad Slim 3 15.6in N100 4GB 128GB Laptop" in the basket