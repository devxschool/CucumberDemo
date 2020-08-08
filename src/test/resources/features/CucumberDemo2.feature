@Smoke @Regression
Feature: Demo Cucumber Scenarios Zelle

  Scenario: Money Transfer with enough balance
    Given User with account number 123456 is registered
    And User with account number 123456 deposited $500
    When User with account number 123456 transfers $300
    And User with account number 123456 transfers $200
    Then User with account number 123456 should have $0 in balance



  Scenario: Money Transfer with not enough balance
    Given User with account number 987654 is registered
    And User with account number 987654 deposited $1000
    When User with account number 987654 transfers $1100
    Then User with account number 987654 should have $1000 in balance
    And User should see "Insufficient Funds" message


   Scenario: Money Transfer with daily limit exceeded
     Given User with account number 1234 is registered
     And User with account number 1234 deposited $2000
     When User with account number 1234 transfers $1003
     Then User with account number 1234 should have $2000 in balance
     And User should see "Daily Limit Exceeded" message




