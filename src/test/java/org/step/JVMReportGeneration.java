package org.step;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;



public class JVMReportGeneration {
	
	public static void JVM(String pathName) {
		File f = new File("C:\\Users\\Delfin Raj\\eclipse-workspace\\Cucumber\\Reports");
		
		Configuration c = new Configuration(f, "Facebook");
		
		c.addClassifications("OS", "Windows 10");
		c.addClassifications("Version", "10");
		c.addClassifications("Browser", "Chrome");
		c.addClassifications("Chrome Version", "98");
		
		List<String> li = new ArrayList<String>();
		li.add(pathName);
		
		ReportBuilder rb = new ReportBuilder(li, c);
		rb.generateReports();
		
	}
	
	
}
