@Smoke @Demo
Feature: featuree is a big functionality of an application.
  Here we would write the feature name to be tested
  we create one feature file per feature

### Cucumber comments
  Scenario: we give a scenario name
    And User is moving cursor to search box
    When User enters spoon in search box
    Then User should see only spoons in the result

#@ is in cucumber is used for tagging. cucumber tags. grouping

  #parse? -> is executing a file and changing it to something. converting.

  Scenario: Dry Run Test
    Given Cucumber user set dry run to true
    When Cucumber user runs the cucumber runner class
    Then Cucumber user should see step implemention snippets for missing step defs in console






