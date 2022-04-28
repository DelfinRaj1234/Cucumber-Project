package org.run;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\Delfin Raj\\eclipse-workspace\\Cucumber\\src\\test\\resources\\failed.txt", glue = "org.step", monochrome = true)
public class ReRun {

}
