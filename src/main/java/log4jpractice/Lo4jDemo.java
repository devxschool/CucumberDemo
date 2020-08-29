package log4jpractice;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class Lo4jDemo {

    private static final Logger LOGGER = LogManager.getLogger(Lo4jDemo.class);

    public static void main(String[] args) {

        //log levels in the following hierarchy
        LOGGER.debug("In debug we put super detailed message as developers like db connection username url or details about the " +
                "that will help the devs to investigate issues. But this details are not needed in prod bc they may contain" +
                "sensitive info or could be something that doesnt give much info about the business process");
        LOGGER.info("In info level we put generic info about the application process which is not sensitive. Ex: Application conencting to db" +
                " App is queirying all employees. App is starting up, app is shuting down.");

        LOGGER.warn("In warn level you put messages that give a warning about a possible issue. IN password is not super secure");
        LOGGER.error("All Error should go to Error level. Ex: User tried to login with invalid password. User doesnt have enough funds. " +
                " Student creds expired. Firm is not active. Business or application error. DB connection error.");
    }
}
