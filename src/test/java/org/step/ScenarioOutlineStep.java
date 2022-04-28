package org.step;

import org.base.BaseClass;
import org.junit.Assert;
import org.pom.LoginPage;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class ScenarioOutlineStep extends BaseClass{
	
	LoginPage l;
	@When("bulk data {string} and {string} to user and text box")
	public void bulk_data_and_to_user_and_text_box(String ID, String password) {
	   l = new LoginPage();
		fillText(l.getUser(), ID);
		
		Assert.assertTrue(false);
	    fillText(l.getPassword(), password);
	}


	@When("Click button")
	public void click_button() {
	    System.out.println("Click");
	}

	@Then("Close window")
	public void close_window() {
	    System.out.println("Close...!!!!");
	}
}
