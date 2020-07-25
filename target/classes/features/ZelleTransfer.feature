Feature: Transfer money with Zelle

  @Demo
  Scenario: Transfer money from account A to account B positive
    Given Bank "Bank Of America" exists
    And User with account number 123456 and email "testAccount@gmail.com" and a balance of $1000 is registered in "Bank Of America"
    And User with account number 11111 and email "test2@gmail.com" and a balance of $2000 is registered in "Bank Of America"
    When User with account number 11111 transfers $100 to account with email "testAccount@gmail.com" in "Bank Of America"
    Then User with account number 11111 should have $1900 in balance
    And User with account number 123456 should have $1100 in balance


  ###Create a defect ticket in Jira one per developer.
  ##and assign it to the dev
  ##fix the Bank and Account application code so that this scenario passes without any changes here
  @Smoke @ignore
  Scenario: Transfer money from account A to account B with insufficient fund
      Given Bank "Bank Of America" exists
      And User with account number 123456 and email "testAccount@gmail.com" and a balance of $900 is registered in "Bank Of America"
      And User with account number 11111 and email "test2@gmail.com" and a balance of $500 is registered in "Bank Of America"
      When User with account number 123456 transfers $1200 to account with email "test2@gmail.com" in "Bank Of America"
      Then User with account number 123456 should have $900 in balance
      And User with account number 11111 should have $500 in balance



    ##Fix application code so that this scenario passes without any changes in the test code.
    Scenario: Transfer money to unregistered account
      Given Bank "Bank Of America" exists
      And User with account number 123456 and email "testAccount@gmail.com" and a balance of $1000 is registered in "Bank Of America"
      When User with account number 123456 transfers $500 to account with email "invalid@gmail.com" in "Bank Of America"
      Then User with account number 123456 should have $1000 in balance



      ##Add a scenario for daily amount exceeded. Daily transfer amount for an account is 2000\

      ##Add a scenario for money transfer between accounts from different banks
