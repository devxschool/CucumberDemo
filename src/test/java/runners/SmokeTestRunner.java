package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import step_definitions.BackgroundSteps;

//We are using RunWith annotation to annotate(let the jvm know that)
// this class will be a Junit Test Runner class, but Junit will be integrated with cucumber
@RunWith(Cucumber.class)
@CucumberOptions (
        features = {"classpath:features"},
        glue = {"step_definitions"},
        tags = {"@Smoke, @Demo", "~@ignore"},// this is or logic. tags = {"@Smoke", "@Demo"} && and logic
        //dryRun = false
        plugin = {"json:target/cucumber.json"}, //is responsible for creating(generating) junit reports in json format
        //which is needed for cucumber reports to create the statistics of the tests.
        format = {"pretty", "html:target/reports"} //format option is used for
        //generating cucumber html reports from cucumber.json file
        //html -is a face of the webpage. it's used for creating webpages. static webpage.
)
public class SmokeTestRunner {
    private static final Logger LOG = LogManager.getLogger(SmokeTestRunner.class);

    @BeforeClass
    public static void beforeClassHook() {
        LOG.warn("Go to website");
        System.out.println("Login to the app");
    }

    @AfterClass
    public static void afterClass() {
        System.out.println("Close browser");
        System.out.println("Say thank you to your skills");
    }
}
//CucumberOptions => is annotation which take configurations for the runner class.
//features -> will take a relate path to the folder where feature files are stored(located). cucumber will scan for
// all features under that folder.

//glue -> is a property for providing package to step_definitions

//property is in programming as a configuration

//classpath -> will give you the path of classes folder under target where all the folder under resource will go after
//code is compiled. Maven uses target folder to execute our program.

//Double Shift searches for files, classes -> give name of file or class

//Are curly braces mandatory? Nope, if the value is only one value you can skip curly braces. if you have multiple values
//you need to provide {} each value separated by a comma

//in tags -> if you want to run scenarios which has at least one of the tags then put both tags inside one ""(double quotes)
//(||) or

//if you want to run scenarios which must match both tags then you put each tag in a separate "", ""
//(&&) and

//sometimes you have to disable some scenarios for sometime. why do I need to disable test?
//bug fix in progress

//if(scenarioTag == "@Smoke" || scenarioTag == "@Demo" && scenarioTag != "@ignore")
 //then run scenario

//use ~@ for scenario doesnt have this tag


//create a runner class which will run all feature files and scenarios except @ignore tagged ones
//@Deprecated -> functionality is being retired.
