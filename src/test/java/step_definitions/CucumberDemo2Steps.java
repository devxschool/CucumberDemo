package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CucumberDemo2Steps {


    @Given("^User with account number (\\d+) is registered$")
    public void user_with_account_number_is_registered(int accountNumber) {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("User account number is registered: " + accountNumber);
    }

    @Given("^User with account number (\\d+) deposited \\$(\\d+)$")
    public void user_with_account_number_deposited_$(int accountNumber, int depositAmount)  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Account number: " + accountNumber + " deposited: $" + depositAmount);
        //Assert.fail();
        //Hard Assertions
    }

    @When("^User with account number (\\d+) transfers \\$(\\d+)$")
    public void user_with_account_number_transfers_$(int accountNumber, int transferAmount) {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Account number: " + accountNumber + " transferred: $" + transferAmount);
    }

//    @Then("^User with account number (\\d+) should have \\$(\\d+) in balance$")
//    public void user_with_accoun_number_should_have_$_in_balance(int accountNumber, int balanceAmount)  {
//        // Write code here that turns the phrase above into concrete actions
//        System.out.println("Account number: " + accountNumber + " balance: $" + balanceAmount);
//        System.out.println();
//    }

//    @Then("^User should see Insufficient Funds message$")
//    public void user_should_see_Insufficient_Funds_message() {
//        System.out.println("Insufficient Funds");
//    }
//
//    @Then("^User should see Daily Limit Exceeded message$")
//    public void user_should_see_Daily_Limit_Exceeded() {
//      System.out.println("Daily Limit Exceeded");
//    }

    @Then("^User should see \"([^\"]*)\" message$")
    public void user_should_see_message(String message)  {
     System.out.println(message);
    }

//    @Given("^User with the account number 987654 is registered$")
//    public void user_with_the_account_number_is_registered()  {
//        // Write code here that turns the phrase above into concrete actions
//        System.out.println("User account number is registered 2");
//
//    }
}
