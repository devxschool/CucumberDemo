Feature: Scenario Outline feature

  #cucumber advantage is reusability
  #implment the step once dynamically and reuse it in many other
  #test scenarios
  #in order to run the same scenario against different test data
  #and avoid repetition we can use scenario outline and example table
  Scenario Outline: Demo
    Given account <account> is registered
    When account <account> sends <amount> to <receiverAccount>
    Then account <account> balance <balance> should be

    Examples:
    |account|amount|receiverAccount|balance|
    |1234   |500   |0001           |100    |
    |1111   |1000  |0005           |2000   |
    |8888   |200   |1234           |5000   |


    #difference between example table and data table?
  #example table is used with scenario outline to execute same scenario against different set
  #of data so it scenario runs once per each row in the examples table


  #Data table is placed under a step and can store multiple data in column and row
  #table and each row could be converted to List of POJO objects or List of Maps
  #I prefer List of POJO for the maintainability purposes

