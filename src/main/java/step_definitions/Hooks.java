package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

    @Before
    public void beforeEachScenarioHook() {
        //can be used to refresh page bring it back to the starting point
        System.out.println("Run before every scenario");
    }

    @After
    public void afterEachScenarioHook() {
        //Can be used to gather some report from the scenario
        System.out.println("Run after each scenario");
    }
    //homework remove beforeClass and AfterClass annotations and implement them in Hooks class.
    //Make sure before hooks runs only once
}
