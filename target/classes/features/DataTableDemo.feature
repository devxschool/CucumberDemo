Feature: Data Table Demo


  Scenario: Data Table Demo 1
    Given Bank "Bank Of America" exists
    And the following user is created
      | accountNumber | email                 | balance | bankName        |
      | 123456        | testAccount@gmail.com | 900     | Bank Of America |
      | 11111         | test2@gmail.com       | 500     | Bank Of America |
    #List<Map<String, String>> users;
    #users.size() -> 2
    #users.get(0).get("balance") -> 900
    #users.get(1).get("email")   -> test2@gmail.com
    #users.get(1).get("balance") -> 500
    When the following transfers are made
      | senderAccountNumber | amount | receiverEmail   | receiverBankName |
      | 123456              | 1200   | test2@gmail.com | Bank Of America  |

    Then the accounts should have the following balances
      | accountNumber | balance |
      | 123456        | 900     |
      | 11111         | 500     |



#And User with account number 123456 and email "testAccount@gmail.com" and a balance of $900 is registered in "Bank Of America"
    #And User with account number 11111 and email "test2@gmail.com" and a balance of $500 is registered in "Bank Of America"
      #When User with account number 123456 transfers $1200 to account with email "test2@gmail.com" in "Bank Of America"
#Then User with account number 123456 should have $900 in balance
    #And User with account number 11111 should have $500 in balance



  #Data Tables in cucumber are used to transform column row table into List of maps or list objects that we need to create
  #data table is placed under step, so we can populate or validate multiple objects within the same step.
  Scenario: Data Tables with POJOs
    Given the following account are created
      | accountNumber | email                 | balance | bankName        |
      | 123456        | testAccount@gmail.com | 900     | Bank Of America |
      | 11111         | test2@gmail.com       | 500     | Bank Of America |
    When the following trasfers are executed
      | senderAccountNumber | amount | receiverEmail          | receiverBankName |
      | 123456              | 1200   | test2@gmail.com        | Bank Of America  |
      | 11111               | 500    | ttestAccount@gmail.com | Bank Of America  |
    Then the accounts should have the following balance amounts
      | accountNumber | balance |
      | 123456        | 900     |
      | 11111         | 500     |