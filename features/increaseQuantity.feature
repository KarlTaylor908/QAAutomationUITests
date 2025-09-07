Feature: Increase Product Quantity in Basket
@focus
Scenario: Increase Quantity by 2
    Given I am on the basket page
    And I update the product quantity to '3'
    Then I should see '3' in the product quantity field