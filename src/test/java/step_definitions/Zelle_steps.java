package step_definitions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import domains.AccountDomain;
import domains.Transfer;
import functionalities.Account;
import functionalities.Bank;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class Zelle_steps {

    private Bank bao;
    private List<Account> accountList = new ArrayList<Account>();

    @Given("^Bank \"([^\"]*)\" exists$")
    public void bank_exists(String bankName) {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Creating a " + bankName);
        bao = new Bank(bankName);
    }

    @Given("^User with account number (\\d+) and email \"([^\"]*)\" and a balance of \\$(\\d+) is registered in \"([^\"]*)\"$")
    public void user_with_account_number_and_email_and_a_balance_of_$_is_registered_in(int accNum, String email, int accBalance, String bankName) {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Registering " + accNum + " eamil " + email + " to " + bankName );
        Account account1 = new Account(accNum, email, accBalance);
        bao.registerAccount(account1);
        accountList.add(account1);
    }

    @When("^User with account number (\\d+) transfers \\$(\\d+) to account with email \"([^\"]*)\" in \"([^\"]*)\"$")
    public void user_with_account_number_transfers_$_to_account_with_email_in(int accNum, int transAmount, String email, String bankName )  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println("Transfer to " + email + " amount: $ " + transAmount);

        for (Account account : accountList) {
            if (accNum == account.getAccountNum()) {
                account.transferZelle(email, transAmount, bao);
            }
        }
    }

    @Then("^User with account number (\\d+) should have \\$(\\d+) in balance$")
    public void user_with_account_number_should_have_$_in_balance(int accNum, int expectedBalance)  {
        // Write code here that turns the phrase above into concrete actions
        System.out.println(accNum + " balance: $ " + expectedBalance);

        for (Account account : accountList) {
            if (account.getAccountNum() == accNum) {
                Assert.fail();
                Assert.assertEquals("Invalid Balance Amount",expectedBalance, account.getBalance(), 0); //Hard Assertion
            }
        }
    }

    //Data Tables
    @Given("^the following user is created$")
    public void the_following_user_is_created(DataTable userDataTable) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        List<Map<String, String>> users = userDataTable.asMaps(String.class,String.class);
        System.out.println(users.get(0).get("balance"));
        System.out.println(users.get(1).get("balance"));
        System.out.println(users.get(0).get("email"));
        System.out.println(users.get(1).get("email"));
    }

    @When("^the following transfers are made$")
    public void the_following_transfers_are_made(DataTable transferDataTable) {
        List<Map<String, String>> transfers  = transferDataTable.asMaps(String.class, String.class);
        System.out.println(transfers.get(0).get("senderAccountNumber"));
    }

    @Then("^the accounts should have the following balances$")
    public void the_accounts_should_have_the_following_balances(List<Map<String, String>> balances) {

        for (Map<String, String> balance : balances) {
            System.out.println("Account: " + balance.get("accountNumber")
                    + " balance: " + balance.get("balance"));
            //click
        }
    }


    //Data Tables with POJOs
    @Given("^the following account are created$")
    public void the_following_account_are_created(List<AccountDomain> accounts) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        for (AccountDomain account : accounts) {
            System.out.println("Account number: " + account.getAccountNumber() + " Balance: " + account.getBalance());
        }
    }

    @When("^the following trasfers are executed$")
    public void the_following_trasfers_are_executed(List<Transfer> transfers) {

        for (Transfer transfer : transfers) {
            System.out.println("Account: " + transfer.getSenderAccountNumber() + " is sending $" + transfer.getAmount() +
                    " to account email: " + transfer.getReceiverEmail());
        }
    }

    @Then("^the accounts should have the following balance amounts$")
    public void the_accounts_should_have_the_following_balance_amounts(DataTable arg1) {

    }

}

//Hard assertion: is assertion when it fails it causes the whole test to fail, and do not proceed to next steps
