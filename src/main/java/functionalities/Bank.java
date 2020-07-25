package functionalities;

import java.util.HashMap;
import java.util.Map;

public class Bank {

    private String name;
    private Map<String, Account> accounts = new HashMap<String, Account>();


    public Bank(String name) {
        this.name = name;
    }


    public void registerAccount(Account account) {
        accounts.put(account.getEmail(), account);
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Account> getAccounts() {
        return accounts;
    }
}
