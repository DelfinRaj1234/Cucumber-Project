package org.step;

import org.base.BaseClass;
import org.openqa.selenium.By;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Camel extends BaseClass {

	
	@Given("Launch browser and hit the facebook")
	public void launchBrowserAndHitTheFacebook() {
	   //chromeBrowser();
	   launchUrl("https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2F%3F%26ext_vrnc%3Dhi%26tag%3Dgooghydrabk1-21%26ref%3Dnav_ya_signin%26adgrpid%3D58075519359%26hvpone%3D%26hvptwo%3D%26hvadid%3D486462756371%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D1998064040844584843%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9061892%26hvtargid%3Dkwd-64107830%26hydadcr%3D14452_2154371%26gclid%3DCj0KCQjw3IqSBhCoARIsAMBkTb1VtuiAwHC69JXTBSUq9oTvIzpSkV8psBt9vfUZwVuphYmTUfWqQSUaAtmNEALw_wcB&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
	}

	@When("Pass invalid user name to username text box")
	public void passInvalidUserNameToUsernameTextBox() {
		fillText(driver.findElement(By.name("email")), "Amazon@gmail");
	    
	}

	@When("Pass invalid password to password text box")
	public void passInvalidPasswordToPasswordTextBox() {
	   System.out.println("Password");
	}

	@When("Click the continue button")
	public void clickTheContinueButton() {
	   
		System.out.println("click");
	}

	@Then("Close")
	public void close() {
	    System.out.println("close");
	}


}
