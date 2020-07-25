package functionalities;

public class Account {

    private int accountNum;
    private String email;
    private double balance;
    private double amountSentToday;

    public Account(int accountNum, String email, double balance) {
        this.accountNum = accountNum;
        this.email = email;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance+=amount;
    }

    public void withDraw(double amount) {
        if (balance < amount) {
            System.err.println("Insuffient Funds");
            return;
        }
        balance-=amount;
    }

    public void transferZelle(String emailOfReceiver, double amount, Bank bank) {
        if (amountSentToday+amount > 2000) {
            System.err.println("Daily Amount Exceeded");
            return;
        }
        withDraw(amount);
        bank.getAccounts().get(emailOfReceiver).deposit(amount);
        amountSentToday+=amount;
    }

    public void performEndOfDayUpdate(){
        amountSentToday = 0;
    }
    public int getAccountNum() {
        return accountNum;
    }

    public void setAccountNum(int accountNum) {
        this.accountNum = accountNum;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
