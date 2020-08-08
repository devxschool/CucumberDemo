package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BackgroundSteps {
    private static final Logger LOG = LogManager.getLogger(BackgroundSteps.class);

    @Given("^user is on \"([^\"]*)\"$")
    public void user_is_on(String website) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LOG.info("user goes to {}", website);
    }

    @Given("^user is logged in as \"([^\"]*)\" \"([^\"]*)\"$")
    public void user_is_logged_in_as(String username, String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        LOG.debug("{} is logged in with  {} password", username, password);
    }

    @When("^user click on transaction$")
    public void user_click_on_transaction() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Clicking transactions");
    }

    @Then("^user should see all transaction$")
    public void user_should_see_all_transaction() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("seeing all transactions");
    }

    @Given("^user balance is (\\d+)$")
    public void user_balance_is(int balance) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Balance " + balance);
    }

    @When("^user deposits (\\d+)$")
    public void user_deposits(int amount) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("depositing " + amount);
    }

    @Then("^user balance should be (\\d+)$")
    public void user_balance_should_be(int balance) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Balance " + balance);
    }

    @When("^user withdraws (\\d+)$")
    public void user_withdraws(int amount) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("withdrawing " + amount);
    }
}
