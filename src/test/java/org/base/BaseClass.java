package org.base;

import java.io.File;
import java.io.IOException;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.apache.velocity.texen.util.FileUtil;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class BaseClass {

	
	public static WebDriver driver;
	public static void chromeBrowser() {
		WebDriverManager.chromedriver().setup();
		
		driver = new ChromeDriver();
	}
	 
	public static void launchUrl(String url) {
		driver.get(url);
		
	}
	public static void maxWindow() {
		driver.manage().window().maximize();
	}
	public static void fillText(WebElement web,String value ) {
		web.sendKeys(value);
	}
	
	public static void btnClick(WebElement element) {
		element.click();

	}
	public static String gettitle() {
		
		String title = driver.getTitle();
		return title;

	}
	public static String getCurrentUrl() {
		String currentUrl = driver.getCurrentUrl();
		
		return currentUrl;

	}
	
	public static void closeBrowser() {
		driver.close();

	}
	
	public static void getDateAndTime() {
		Date d = new Date();
		System.out.println(d);
	}	
	
	public static void TakeScreenshot(String name) throws IOException {
		
		TakesScreenshot t =(TakesScreenshot)driver;
		
		File sc = t.getScreenshotAs(OutputType.FILE);
		File destination =new File("C:\\Users\\Delfin Raj\\eclipse-workspace\\Cucumber\\Screenshot\\"+name+".png");
		FileUtils.copyFile(sc, destination);
		

	}
}
