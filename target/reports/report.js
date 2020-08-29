$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BackgroundDemo.feature");
formatter.feature({
  "line": 2,
  "name": "background demo",
  "description": "",
  "id": "background-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 106330,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"qa-chase.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is logged in as \"test@gmail.com\" \"test1Pass\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "qa-chase.com",
      "offset": 12
    }
  ],
  "location": "BackgroundSteps.user_is_on(String)"
});
formatter.result({
  "duration": 396595808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 22
    },
    {
      "val": "test1Pass",
      "offset": 39
    }
  ],
  "location": "BackgroundSteps.user_is_logged_in_as(String,String)"
});
formatter.result({
  "duration": 193423,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Demo1",
  "description": "",
  "id": "background-demo;demo1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user click on transaction",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should see all transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundSteps.user_click_on_transaction()"
});
formatter.result({
  "duration": 52475,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundSteps.user_should_see_all_transaction()"
});
formatter.result({
  "duration": 40068,
  "status": "passed"
});
formatter.after({
  "duration": 46730,
  "status": "passed"
});
formatter.before({
  "duration": 40163,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"qa-chase.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is logged in as \"test@gmail.com\" \"test1Pass\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "qa-chase.com",
      "offset": 12
    }
  ],
  "location": "BackgroundSteps.user_is_on(String)"
});
formatter.result({
  "duration": 275062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 22
    },
    {
      "val": "test1Pass",
      "offset": 39
    }
  ],
  "location": "BackgroundSteps.user_is_logged_in_as(String,String)"
});
formatter.result({
  "duration": 210583,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Demo2",
  "description": "",
  "id": "background-demo;demo2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user balance is 1000",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user deposits 200",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user balance should be 1200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 16
    }
  ],
  "location": "BackgroundSteps.user_balance_is(int)"
});
formatter.result({
  "duration": 508107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "BackgroundSteps.user_deposits(int)"
});
formatter.result({
  "duration": 103683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1200",
      "offset": 23
    }
  ],
  "location": "BackgroundSteps.user_balance_should_be(int)"
});
formatter.result({
  "duration": 94439,
  "status": "passed"
});
formatter.after({
  "duration": 31796,
  "status": "passed"
});
formatter.before({
  "duration": 72358,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on \"qa-chase.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is logged in as \"test@gmail.com\" \"test1Pass\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "qa-chase.com",
      "offset": 12
    }
  ],
  "location": "BackgroundSteps.user_is_on(String)"
});
formatter.result({
  "duration": 250482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 22
    },
    {
      "val": "test1Pass",
      "offset": 39
    }
  ],
  "location": "BackgroundSteps.user_is_logged_in_as(String,String)"
});
formatter.result({
  "duration": 243462,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Demo3",
  "description": "",
  "id": "background-demo;demo3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user balance is 1000",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user withdraws 200",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user balance should be 800",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 16
    }
  ],
  "location": "BackgroundSteps.user_balance_is(int)"
});
formatter.result({
  "duration": 108174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 15
    }
  ],
  "location": "BackgroundSteps.user_withdraws(int)"
});
formatter.result({
  "duration": 78229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 23
    }
  ],
  "location": "BackgroundSteps.user_balance_should_be(int)"
});
formatter.result({
  "duration": 126156,
  "status": "passed"
});
formatter.after({
  "duration": 24136,
  "status": "passed"
});
formatter.uri("features/CucumberDemo2.feature");
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
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 34584,
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
  "duration": 153979,
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
  "duration": 173961,
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
  "duration": 89598,
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
  "duration": 88961,
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
  "duration": 147043,
  "status": "passed"
});
formatter.after({
  "duration": 36265,
  "status": "passed"
});
formatter.before({
  "duration": 42493,
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
  "duration": 85669,
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
  "duration": 156820,
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
  "duration": 136360,
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
  "duration": 111928,
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
  "duration": 54597,
  "status": "passed"
});
formatter.after({
  "duration": 24596,
  "status": "passed"
});
formatter.before({
  "duration": 38369,
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
  "duration": 102032,
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
  "duration": 96118,
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
  "duration": 131834,
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
  "duration": 88975,
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
  "duration": 47584,
  "status": "passed"
});
formatter.after({
  "duration": 31636,
  "status": "passed"
});
formatter.uri("features/DataTableDemo.feature");
formatter.feature({
  "line": 2,
  "name": "Data Table Demo",
  "description": "",
  "id": "data-table-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 25597,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Data Table Demo 1",
  "description": "",
  "id": "data-table-demo;data-table-demo-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Bank \"Bank Of America\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the following user is created",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "email",
        "balance",
        "bankName"
      ],
      "line": 8
    },
    {
      "cells": [
        "123456",
        "testAccount@gmail.com",
        "900",
        "Bank Of America"
      ],
      "line": 9
    },
    {
      "cells": [
        "11111",
        "test2@gmail.com",
        "500",
        "Bank Of America"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#List\u003cMap\u003cString, String\u003e\u003e users;"
    },
    {
      "line": 12,
      "value": "#users.size() -\u003e 2"
    },
    {
      "line": 13,
      "value": "#users.get(0).get(\"balance\") -\u003e 900"
    },
    {
      "line": 14,
      "value": "#users.get(1).get(\"email\")   -\u003e test2@gmail.com"
    },
    {
      "line": 15,
      "value": "#users.get(1).get(\"balance\") -\u003e 500"
    }
  ],
  "line": 16,
  "name": "the following transfers are made",
  "rows": [
    {
      "cells": [
        "senderAccountNumber",
        "amount",
        "receiverEmail",
        "receiverBankName"
      ],
      "line": 17
    },
    {
      "cells": [
        "123456",
        "1200",
        "test2@gmail.com",
        "Bank Of America"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "the accounts should have the following balances",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "balance"
      ],
      "line": 21
    },
    {
      "cells": [
        "123456",
        "900"
      ],
      "line": 22
    },
    {
      "cells": [
        "11111",
        "500"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
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
  "duration": 584587,
  "status": "passed"
});
formatter.match({
  "location": "Zelle_steps.the_following_user_is_created(DataTable)"
});
formatter.result({
  "duration": 2226951,
  "status": "passed"
});
formatter.match({
  "location": "Zelle_steps.the_following_transfers_are_made(DataTable)"
});
formatter.result({
  "duration": 119233,
  "status": "passed"
});
formatter.match({
  "location": "Zelle_steps.the_accounts_should_have_the_following_balances(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 226315,
  "status": "passed"
});
formatter.after({
  "duration": 29646,
  "status": "passed"
});
formatter.before({
  "duration": 49084,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#And User with account number 123456 and email \"testAccount@gmail.com\" and a balance of $900 is registered in \"Bank Of America\""
    },
    {
      "line": 28,
      "value": "#And User with account number 11111 and email \"test2@gmail.com\" and a balance of $500 is registered in \"Bank Of America\""
    },
    {
      "line": 29,
      "value": "#When User with account number 123456 transfers $1200 to account with email \"test2@gmail.com\" in \"Bank Of America\""
    },
    {
      "line": 30,
      "value": "#Then User with account number 123456 should have $900 in balance"
    },
    {
      "line": 31,
      "value": "#And User with account number 11111 should have $500 in balance"
    },
    {
      "line": 35,
      "value": "#Data Tables in cucumber are used to transform column row table into List of maps or list objects that we need to create"
    },
    {
      "line": 36,
      "value": "#data table is placed under step, so we can populate or validate multiple objects within the same step."
    }
  ],
  "line": 37,
  "name": "Data Tables with POJOs",
  "description": "",
  "id": "data-table-demo;data-tables-with-pojos",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "the following account are created",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "email",
        "balance",
        "bankName"
      ],
      "line": 39
    },
    {
      "cells": [
        "123456",
        "testAccount@gmail.com",
        "900",
        "Bank Of America"
      ],
      "line": 40
    },
    {
      "cells": [
        "11111",
        "test2@gmail.com",
        "500",
        "Bank Of America"
      ],
      "line": 41
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "the following trasfers are executed",
  "rows": [
    {
      "cells": [
        "senderAccountNumber",
        "amount",
        "receiverEmail",
        "receiverBankName"
      ],
      "line": 43
    },
    {
      "cells": [
        "123456",
        "1200",
        "test2@gmail.com",
        "Bank Of America"
      ],
      "line": 44
    },
    {
      "cells": [
        "11111",
        "500",
        "ttestAccount@gmail.com",
        "Bank Of America"
      ],
      "line": 45
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "the accounts should have the following balance amounts",
  "rows": [
    {
      "cells": [
        "accountNumber",
        "balance"
      ],
      "line": 47
    },
    {
      "cells": [
        "123456",
        "900"
      ],
      "line": 48
    },
    {
      "cells": [
        "11111",
        "500"
      ],
      "line": 49
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Zelle_steps.the_following_account_are_created(AccountDomain\u003e)"
});
formatter.result({
  "duration": 8327933,
  "status": "passed"
});
formatter.match({
  "location": "Zelle_steps.the_following_trasfers_are_executed(Transfer\u003e)"
});
formatter.result({
  "duration": 1032340,
  "status": "passed"
});
formatter.match({
  "location": "Zelle_steps.the_accounts_should_have_the_following_balance_amounts(DataTable)"
});
formatter.result({
  "duration": 37027,
  "status": "passed"
});
formatter.after({
  "duration": 25017,
  "status": "passed"
});
formatter.uri("features/ScenaioOutline.feature");
formatter.feature({
  "line": 2,
  "name": "Scenario Outline feature",
  "description": "",
  "id": "scenario-outline-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 4,
      "value": "#cucumber advantage is reusability"
    },
    {
      "line": 5,
      "value": "#implment the step once dynamically and reuse it in many other"
    },
    {
      "line": 6,
      "value": "#test scenarios"
    },
    {
      "line": 7,
      "value": "#in order to run the same scenario against different test data"
    },
    {
      "line": 8,
      "value": "#and avoid repetition we can use scenario outline and example table"
    }
  ],
  "line": 9,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-feature;demo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "account \u003caccount\u003e is registered",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "account \u003caccount\u003e sends \u003camount\u003e to \u003creceiverAccount\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "account \u003caccount\u003e balance \u003cbalance\u003e should be",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "scenario-outline-feature;demo;",
  "rows": [
    {
      "cells": [
        "account",
        "amount",
        "receiverAccount",
        "balance"
      ],
      "line": 15,
      "id": "scenario-outline-feature;demo;;1"
    },
    {
      "cells": [
        "1234",
        "500",
        "0001",
        "100"
      ],
      "line": 16,
      "id": "scenario-outline-feature;demo;;2"
    },
    {
      "cells": [
        "1111",
        "1000",
        "0005",
        "2000"
      ],
      "line": 17,
      "id": "scenario-outline-feature;demo;;3"
    },
    {
      "cells": [
        "8888",
        "200",
        "1234",
        "5000"
      ],
      "line": 18,
      "id": "scenario-outline-feature;demo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 58930,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-feature;demo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "account 1234 is registered",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "account 1234 sends 500 to 0001",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "account 1234 balance 100 should be",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 8
    }
  ],
  "location": "ScenarioOutlineSteps.account_is_registered(int)"
});
formatter.result({
  "duration": 144837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 8
    },
    {
      "val": "500",
      "offset": 19
    },
    {
      "val": "0001",
      "offset": 26
    }
  ],
  "location": "ScenarioOutlineSteps.account_sends_to(int,int,String)"
});
formatter.result({
  "duration": 116552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 8
    },
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "ScenarioOutlineSteps.account_balance_should_be(int,int)"
});
formatter.result({
  "duration": 131233,
  "status": "passed"
});
formatter.after({
  "duration": 24458,
  "status": "passed"
});
formatter.before({
  "duration": 30137,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-feature;demo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "account 1111 is registered",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "account 1111 sends 1000 to 0005",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "account 1111 balance 2000 should be",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 8
    }
  ],
  "location": "ScenarioOutlineSteps.account_is_registered(int)"
});
formatter.result({
  "duration": 127648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 8
    },
    {
      "val": "1000",
      "offset": 19
    },
    {
      "val": "0005",
      "offset": 27
    }
  ],
  "location": "ScenarioOutlineSteps.account_sends_to(int,int,String)"
});
formatter.result({
  "duration": 201326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 8
    },
    {
      "val": "2000",
      "offset": 21
    }
  ],
  "location": "ScenarioOutlineSteps.account_balance_should_be(int,int)"
});
formatter.result({
  "duration": 120166,
  "status": "passed"
});
formatter.after({
  "duration": 26531,
  "status": "passed"
});
formatter.before({
  "duration": 35750,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Demo",
  "description": "",
  "id": "scenario-outline-feature;demo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "account 8888 is registered",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "account 8888 sends 200 to 1234",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "account 8888 balance 5000 should be",
  "matchedColumns": [
    0,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8888",
      "offset": 8
    }
  ],
  "location": "ScenarioOutlineSteps.account_is_registered(int)"
});
formatter.result({
  "duration": 107047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8888",
      "offset": 8
    },
    {
      "val": "200",
      "offset": 19
    },
    {
      "val": "1234",
      "offset": 26
    }
  ],
  "location": "ScenarioOutlineSteps.account_sends_to(int,int,String)"
});
formatter.result({
  "duration": 118769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8888",
      "offset": 8
    },
    {
      "val": "5000",
      "offset": 21
    }
  ],
  "location": "ScenarioOutlineSteps.account_balance_should_be(int,int)"
});
formatter.result({
  "duration": 89644,
  "status": "passed"
});
formatter.after({
  "duration": 14669,
  "status": "passed"
});
formatter.uri("features/ZelleTransfer.feature");
formatter.feature({
  "line": 2,
  "name": "Transfer money with Zelle",
  "description": "",
  "id": "transfer-money-with-zelle",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 23601,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Transfer money from account A to account B positive",
  "description": "",
  "id": "transfer-money-with-zelle;transfer-money-from-account-a-to-account-b-positive",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Demo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Bank \"Bank Of America\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User with account number 123456 and email \"testAccount@gmail.com\" and a balance of $1000 is registered in \"Bank Of America\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User with account number 11111 and email \"test2@gmail.com\" and a balance of $2000 is registered in \"Bank Of America\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User with account number 11111 transfers $100 to account with email \"testAccount@gmail.com\" in \"Bank Of America\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User with account number 11111 should have $1900 in balance",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
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
  "duration": 61473,
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
  "duration": 821684,
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
  "duration": 234631,
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
  "duration": 271671,
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
  "duration": 1906379,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.fail(Assert.java:95)\n\tat step_definitions.Zelle_steps.user_with_account_number_should_have_$_in_balance(Zelle_steps.java:57)\n\tat ✽.Then User with account number 11111 should have $1900 in balance(features/ZelleTransfer.feature:10)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 48878,
  "status": "passed"
});
formatter.before({
  "duration": 65340,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 28,
      "value": "##Fix application code so that this scenario passes without any changes in the test code."
    }
  ],
  "line": 29,
  "name": "Transfer money to unregistered account",
  "description": "",
  "id": "transfer-money-with-zelle;transfer-money-to-unregistered-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "Bank \"Bank Of America\" exists",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User with account number 123456 and email \"testAccount@gmail.com\" and a balance of $1000 is registered in \"Bank Of America\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User with account number 123456 transfers $500 to account with email \"invalid@gmail.com\" in \"Bank Of America\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User with account number 123456 should have $1000 in balance",
  "keyword": "Then "
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
  "duration": 99525,
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
  "duration": 196041,
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
    },
    {
      "val": "invalid@gmail.com",
      "offset": 70
    },
    {
      "val": "Bank Of America",
      "offset": 93
    }
  ],
  "location": "Zelle_steps.user_with_account_number_transfers_$_to_account_with_email_in(int,int,String,String)"
});
formatter.result({
  "duration": 493392,
  "error_message": "java.lang.NullPointerException\n\tat functionalities.Account.transferZelle(Account.java:34)\n\tat step_definitions.Zelle_steps.user_with_account_number_transfers_$_to_account_with_email_in(Zelle_steps.java:45)\n\tat ✽.When User with account number 123456 transfers $500 to account with email \"invalid@gmail.com\" in \"Bank Of America\"(features/ZelleTransfer.feature:32)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
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
  "status": "skipped"
});
formatter.after({
  "duration": 30570,
  "status": "passed"
});
formatter.uri("features/cucumberdemo.feature");
formatter.feature({
  "line": 2,
  "name": "is a big functionality of an application.",
  "description": "Here we would write the feature name to be tested\nwe create one feature file per feature",
  "id": "is-a-big-functionality-of-an-application.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Demo"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 78062,
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
  "id": "is-a-big-functionality-of-an-application.;we-give-a-scenario-name",
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
  "duration": 96506,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.user_enters_spoon_in_search_box()"
});
formatter.result({
  "duration": 40810,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.user_should_see_only_spoons_in_the_result()"
});
formatter.result({
  "duration": 50666,
  "status": "passed"
});
formatter.after({
  "duration": 28931,
  "status": "passed"
});
formatter.before({
  "duration": 43991,
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
  "id": "is-a-big-functionality-of-an-application.;dry-run-test",
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
  "duration": 46493,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.cucumber_user_runs_the_cucumber_runner_class()"
});
formatter.result({
  "duration": 18796,
  "status": "passed"
});
formatter.match({
  "location": "Cucumberdemo_steps.cucumber_user_should_see_step_implemention_snippets_for_missing_step_defs_in_console()"
});
formatter.result({
  "duration": 22277,
  "status": "passed"
});
formatter.after({
  "duration": 21791,
  "status": "passed"
});
});