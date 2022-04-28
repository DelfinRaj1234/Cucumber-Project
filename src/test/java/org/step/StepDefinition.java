package org.step;

import java.util.List;
import java.util.Map;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.pom.LoginPage;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends BaseClass {
	LoginPage l;
	@Given("To launch the chrome browser and hit the facebook")
	public void to_launch_the_chrome_browser_and_hit_the_facebook() {
		//chromeBrowser();
		launchUrl("https://www.facebook.com/");
	}

	@When("To pass the invalid user name to username text box")
	public void to_pass_the_invalid_user_name_to_username_text_box(DataTable d) {
		 l = new LoginPage();
		Map<String, String> mp = d.asMap(String.class, String.class);
		String data = mp.get("Email-2");
		fillText(l.getUser(), data);
	}

	@When("To pass the invalid password to password text box")
	public void to_pass_the_invalid_password_to_password_text_box(DataTable d) {
		 l = new LoginPage();
	List<Map<String, String>> mp = d.asMaps();
	String data = mp.get(1).get("Password 2");
		 fillText(l.getPassword(), data);
		 
	}

	@When("User has to click the continue button")
	public void user_has_to_click_the_continue_button() {
	  btnClick(driver.findElement(By.name("login")));
	}

	@Then("user has to close the browser")
	public void user_has_to_close_the_browser() {
		Assert.assertTrue(false);
	 System.out.println("Close");   
	}

}
