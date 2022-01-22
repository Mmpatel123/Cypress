Feature: User Shall Be Successfully Created A Account in NopCommerce

  @focus
  Scenario: Created A Account
    Given User is on NopCommerce page
    Then User clicks on register
    Then User selects his gender
    Then User Enters
    |Firstname|LastName|email|Companyname|Password|ConfirmPassword|
    |Dev       |Patel    |sweetmeats2604@gmail.com|Nothing|Avadh@20009|Avadh@20009|
    #Then User Clicks on Register button
