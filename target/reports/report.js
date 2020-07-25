$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CucumberDemo2.feature");
formatter.feature({
  "line": 2,
  "name": "Demo Cucumber Scenarios Zelle",
  "description": "",
  "id": "demo-cucumber-scenarios-zelle",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 144631,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Money Transfer with enough balance",
  "description": "",
  "id": "demo-cucumber-scenarios-zelle;money-transfer-with-enough-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User with account number 123456 is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User with account number 123456 deposited $500",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User with account number 123456 transfers $300",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User with account number 123456 transfers $200",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User with account number 123456 should have $0 in balance",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_is_registered(int)"
});
formatter.result({
  "duration": 132396001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "500",
      "offset": 43
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_deposited_$(int,int)"
});
formatter.result({
  "duration": 410496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "300",
      "offset": 43
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_transfers_$(int,int)"
});
formatter.result({
  "duration": 228480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "200",
      "offset": 43
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_transfers_$(int,int)"
});
formatter.result({
  "duration": 419995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "0",
      "offset": 45
    }
  ],
  "location": "Zelle_steps.user_with_account_number_should_have_$_in_balance(int,int)"
});
formatter.result({
  "duration": 317978,
  "status": "passed"
});
formatter.after({
  "duration": 60304,
  "status": "passed"
});
formatter.before({
  "duration": 79364,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Money Transfer with not enough balance",
  "description": "",
  "id": "demo-cucumber-scenarios-zelle;money-transfer-with-not-enough-balance",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User with account number 987654 is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User with account number 987654 deposited $1000",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User with account number 987654 transfers $1100",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User with account number 987654 should have $1000 in balance",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User should see \"Insufficient Funds\" message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "987654",
      "offset": 25
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_is_registered(int)"
});
formatter.result({
  "duration": 292806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654",
      "offset": 25
    },
    {
      "val": "1000",
      "offset": 43
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_deposited_$(int,int)"
});
formatter.result({
  "duration": 178140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654",
      "offset": 25
    },
    {
      "val": "1100",
      "offset": 43
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_transfers_$(int,int)"
});
formatter.result({
  "duration": 181435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "987654",
      "offset": 25
    },
    {
      "val": "1000",
      "offset": 45
    }
  ],
  "location": "Zelle_steps.user_with_account_number_should_have_$_in_balance(int,int)"
});
formatter.result({
  "duration": 198862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Insufficient Funds",
      "offset": 17
    }
  ],
  "location": "CucumberDemo2Steps.user_should_see_message(String)"
});
formatter.result({
  "duration": 2025918,
  "status": "passed"
});
formatter.after({
  "duration": 43805,
  "status": "passed"
});
formatter.before({
  "duration": 60525,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Money Transfer with daily limit exceeded",
  "description": "",
  "id": "demo-cucumber-scenarios-zelle;money-transfer-with-daily-limit-exceeded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "User with account number 1234 is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "User with account number 1234 deposited $2000",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User with account number 1234 transfers $1003",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User with account number 1234 should have $2000 in balance",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should see \"Daily Limit Exceeded\" message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_is_registered(int)"
});
formatter.result({
  "duration": 171615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    },
    {
      "val": "2000",
      "offset": 41
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_deposited_$(int,int)"
});
formatter.result({
  "duration": 200160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    },
    {
      "val": "1003",
      "offset": 41
    }
  ],
  "location": "CucumberDemo2Steps.user_with_account_number_transfers_$(int,int)"
});
formatter.result({
  "duration": 233303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 25
    },
    {
      "val": "2000",
      "offset": 43
    }
  ],
  "location": "Zelle_steps.user_with_account_number_should_have_$_in_balance(int,int)"
});
formatter.result({
  "duration": 186647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Daily Limit Exceeded",
      "offset": 17
    }
  ],
  "location": "CucumberDemo2Steps.user_should_see_message(String)"
});
formatter.result({
  "duration": 101891,
  "status": "passed"
});
formatter.after({
  "duration": 64041,
  "status": "passed"
});
formatter.uri("features/ZelleTransfer.feature");
formatter.feature({
  "line": 1,
  "name": "Transfer money with Zelle",
  "description": "",
  "id": "transfer-money-with-zelle",
  "keyword": "Feature"
});
formatter.before({
  "duration": 53299,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Transfer money from account A to account B positive",
  "description": "",
  "id": "transfer-money-with-zelle;transfer-money-from-account-a-to-account-b-positive",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Bank \"Bank Of America\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User with account number 123456 and email \"testAccount@gmail.com\" and a balance of $1000 is registered in \"Bank Of America\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User with account number 11111 and email \"test2@gmail.com\" and a balance of $2000 is registered in \"Bank Of America\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User with account number 11111 transfers $100 to account with email \"testAccount@gmail.com\" in \"Bank Of America\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User with account number 11111 should have $1900 in balance",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User with account number 123456 should have $1100 in balance",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Of America",
      "offset": 6
    }
  ],
  "location": "Zelle_steps.bank_exists(String)"
});
formatter.result({
  "duration": 643885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "testAccount@gmail.com",
      "offset": 43
    },
    {
      "val": "1000",
      "offset": 84
    },
    {
      "val": "Bank Of America",
      "offset": 107
    }
  ],
  "location": "Zelle_steps.user_with_account_number_and_email_and_a_balance_of_$_is_registered_in(int,String,int,String)"
});
formatter.result({
  "duration": 947838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111",
      "offset": 25
    },
    {
      "val": "test2@gmail.com",
      "offset": 42
    },
    {
      "val": "2000",
      "offset": 77
    },
    {
      "val": "Bank Of America",
      "offset": 100
    }
  ],
  "location": "Zelle_steps.user_with_account_number_and_email_and_a_balance_of_$_is_registered_in(int,String,int,String)"
});
formatter.result({
  "duration": 399618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111",
      "offset": 25
    },
    {
      "val": "100",
      "offset": 42
    },
    {
      "val": "testAccount@gmail.com",
      "offset": 69
    },
    {
      "val": "Bank Of America",
      "offset": 96
    }
  ],
  "location": "Zelle_steps.user_with_account_number_transfers_$_to_account_with_email_in(int,int,String,String)"
});
formatter.result({
  "duration": 266739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11111",
      "offset": 25
    },
    {
      "val": "1900",
      "offset": 44
    }
  ],
  "location": "Zelle_steps.user_with_account_number_should_have_$_in_balance(int,int)"
});
formatter.result({
  "duration": 2887085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 25
    },
    {
      "val": "1100",
      "offset": 45
    }
  ],
  "location": "Zelle_steps.user_with_account_number_should_have_$_in_balance(int,int)"
});
formatter.result({
  "duration": 233319,
  "status": "passed"
});
formatter.after({
  "duration": 37723,
  "status": "passed"
});
formatter.uri("features/cucumberdemo.feature");
formatter.feature({
  "line": 2,
  "name": "featuree is a big functionality of an application.",
  "description": "Here we would write the feature name to be tested\nwe create one feature file per feature",
  "id": "featuree-is-a-big-functionality-of-an-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Demo"
    }
  ]
});
formatter.before({
  "duration": 54436,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "### Cucumber comments"
    }
  ],
  "line": 7,
  "name": "we give a scenario name",
  "description": "",
  "id": "featuree-is-a-big-functionality-of-an-application.;we-give-a-scenario-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User is moving cursor to search box",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters spoon in search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User should see only spoons in the result",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumberdemo_steps.user_is_moving_cursor_to_search_box()"
});
formatter.result({
  "duration": 150591,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.user_enters_spoon_in_search_box()"
});
formatter.result({
  "duration": 52783,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.user_should_see_only_spoons_in_the_result()"
});
formatter.result({
  "duration": 99875,
  "status": "passed"
});
formatter.after({
  "duration": 315987,
  "status": "passed"
});
formatter.before({
  "duration": 106695,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#@ is in cucumber is used for tagging. cucumber tags. grouping"
    },
    {
      "line": 14,
      "value": "#parse? -\u003e is executing a file and changing it to something. converting."
    }
  ],
  "line": 16,
  "name": "Dry Run Test",
  "description": "",
  "id": "featuree-is-a-big-functionality-of-an-application.;dry-run-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "Cucumber user set dry run to true",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Cucumber user runs the cucumber runner class",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Cucumber user should see step implemention snippets for missing step defs in console",
  "keyword": "Then "
});
formatter.match({
  "location": "Cucumberdemo_steps.cucumber_user_set_dry_run_to_true()"
});
formatter.result({
  "duration": 61939,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.cucumber_user_runs_the_cucumber_runner_class()"
});
formatter.result({
  "duration": 30635,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.cucumber_user_should_see_step_implemention_snippets_for_missing_step_defs_in_console()"
});
formatter.result({
  "duration": 25791,
  "status": "passed"
});
formatter.after({
  "duration": 29070,
  "status": "passed"
});
});