package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ScenarioOutlineSteps {

    @Given("^account (\\d+) is registered$")
    public void account_is_registered(int accountNumber) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("account: " + accountNumber);
    }

    @When("^account (\\d+) sends (\\d+) to (\\d+)$")
    public void account_sends_to(int accountNumber, int transferAmount, String receiverAccountNumber) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("account: " + accountNumber + " amount: $" + transferAmount + " receiverAccount "  + receiverAccountNumber);
    }

    @Then("^account (\\d+) balance (\\d+) should be$")
    public void account_balance_should_be(int accountNumber, int balance) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("account: " + accountNumber + " balance: $" + balance);
    }
}
