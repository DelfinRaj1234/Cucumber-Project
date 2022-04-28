package org.run;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.step.JVMReportGeneration;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue="org.step",monochrome=true,dryRun=false, tags= {"@module01 or @module"},plugin= {"html:Reports","junit:Reports\\junit.xml","json:Reports\\json.json","rerun:src\\test\\resources\\failed.txt"})


//@CucumberOptions(features="src\\test\\resources\\new.feature",glue="org.step",snippets=SnippetType.CAMELCASE)
public class RunAll {
	
	@AfterClass
	public static void JVMreport() {
		
		JVMReportGeneration.JVM("C:\\Users\\Delfin Raj\\eclipse-workspace\\Cucumber\\Reports\\json.json");
	}

}
