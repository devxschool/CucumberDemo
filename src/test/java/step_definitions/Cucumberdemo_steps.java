package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class Cucumberdemo_steps {

    @Given("^User is logged in to the page$")
    public void user_is_logged_in_to_the_page()  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Login step actions");
    }

    @When("^User enters spoon in search box$")
    public void user_enters_spoon_in_search_box()  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Search box input entering actions");
    }

    @Then("^User should see only spoons in the result$")
    public void user_should_see_only_spoons_in_the_result()  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Functionality validation actions");
        Assert.assertTrue(true);
    }

    @Given("^User goes to amazon\\.com$")
    public void a() {
      System.out.println("User in amazon.com");
    }

//    @Given("^User goes to amazon\\.com$")
//    public void user_goes_to_amazon_com1() {
//        System.out.println("User in amazon.com");
//    }


    @And("^User is moving cursor to search box$")
    public void user_is_moving_cursor_to_search_box()  {
       System.out.println("moving cursor to search box");
    }

    @Given("^Cucumber user set dry run to true$")
    public void cucumber_user_set_dry_run_to_true() throws Throwable {
        System.out.println("Hllo");

    }

    @When("^Cucumber user runs the cucumber runner class$")
    public void cucumber_user_runs_the_cucumber_runner_class() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^Cucumber user should see step implemention snippets for missing step defs in console$")
    public void cucumber_user_should_see_step_implemention_snippets_for_missing_step_defs_in_console() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

    }
}
