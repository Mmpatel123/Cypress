Feature: Log in
  description:login with nop nopcommerce using custom commands / features
  Scenario: log in on nopcommerce
    Given I am on the nopcommerce page
    Then  I click on the log in button
    When  I enter correct Email and Password
    Then I Will be successfully logged in
    Then i will go to electronics page
    When i am on electronics then i will click on cell phones
    Then I will select a phone
    Then i will add the phone to cart
    Then I will accept terms of service
    Then I will click on checkout
    Then i will select a new address
    Then I will add my billing details
    Then i will click on continue
    Then I will select my shipping method and click on continue
    Then I Will select payment method and click on continue
    Then i will confirm my correct payment details
    Then I Will Confirm my order

