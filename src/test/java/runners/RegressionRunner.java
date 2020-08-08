package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"classpath:features"},
        glue = {"step_definitions"},
        tags = {"@Regression", "~@ignore"},
        //dryRun = false
        plugin = {"json:target/cucumber.json"}, //is responsible for creating(generating) junit reports in json format
        //which is needed for cucumber reports to create the statistics of the tests.
        format = {"pretty", "html:target/reports"} //format option is used for
        //generating cucumber html reports from cucumber.json file
        //html -is a face of the webpage. it's used for creating webpages. static webpage.
)
public class RegressionRunner {
}

