package org.step;



import org.base.BaseClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends BaseClass {

	@Before(order=1)
	public void Browser() {
		chromeBrowser();
	}
	@Before(order=12)
	public void Screenshot() {
	System.out.println("sc");
		
	}
	@Before(order=8)
	public void max() {
		System.out.println("Maxwindow");
	}
	@After(order=10)
	public void AScreenshot(Scenario s) {
		if (s.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] screenshotAs = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(screenshotAs, "image/png");
			
			}

	}
	@After(order=11)
	public void Close() {
		System.out.println("Close");

	}
	
}
