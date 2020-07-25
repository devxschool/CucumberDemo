package functionalities;

public class Demo {

    public static void main(String[] args) {
        Bank boa = new Bank("Bank Of America");

        Account testAccount = new Account(123456,"testAccount@gmail.com", 1000);
        boa.registerAccount(testAccount);

        Account test1 = new Account(11111, "test2@gmail.com", 2000);
        boa.registerAccount(test1);
        test1.transferZelle("testAccount@gmail.com", 100, boa);
        System.out.println(testAccount.getBalance());
    }
}
