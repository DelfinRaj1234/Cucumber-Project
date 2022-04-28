package org.pom;

import org.base.BaseClass;

public class Helper extends BaseClass {

	public static void main(String[] args) {
		
		chromeBrowser();
		launchUrl("https://en-gb.facebook.com/");
		maxWindow();
		LoginPage l = new LoginPage();
		fillText(l.getUser(), "del@mail");
		fillText(l.getPassword(), "xxxx");
		btnClick(l.getLogin());
		
		
	}
	
	
	
}
