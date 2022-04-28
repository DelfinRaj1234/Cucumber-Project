$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/fb.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@module01"
    },
    {
      "name": "@module02"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate invalid username and invalidate password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@module01"
    },
    {
      "name": "@module02"
    }
  ]
});
formatter.step({
  "name": "To pass the invalid user name to username text box",
  "rows": [
    {
      "cells": [
        "Email-1",
        "del@gmail.com"
      ]
    },
    {
      "cells": [
        "Email-2",
        "lin@gmail.com"
      ]
    },
    {
      "cells": [
        "Email-3",
        "shan@gmail.com"
      ]
    },
    {
      "cells": [
        "Email-4",
        "eva@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.to_pass_the_invalid_user_name_to_username_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass the invalid password to password text box",
  "rows": [
    {
      "cells": [
        "Password 1",
        "Password 2",
        "Password 3"
      ]
    },
    {
      "cells": [
        "java",
        "python",
        "java1"
      ]
    },
    {
      "cells": [
        "raj",
        "greens",
        "selenium"
      ]
    },
    {
      "cells": [
        "xxxxx",
        "xzzxx",
        "1234"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.to_pass_the_invalid_password_to_password_text_box(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click the continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_has_to_click_the_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_has_to_close_the_browser()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.step.StepDefinition.user_has_to_close_the_browser(StepDefinition.java:48)\r\n\tat ✽.user has to close the browser(file:src/test/resources/fb.feature:19)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate Bulk Datas",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "bulk data \"\u003cID\u003e\" and \"\u003cpassword\u003e\" to user and text box",
  "keyword": "When "
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ID",
        "Password"
      ]
    },
    {
      "cells": [
        "del@gmail.com",
        "xxxxxx"
      ]
    },
    {
      "cells": [
        "raj@gmail.com",
        "zzzzzz"
      ]
    },
    {
      "cells": [
        "eva@gmail.com",
        "cccccx"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Bulk Datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@module01"
    },
    {
      "name": "@module02"
    }
  ]
});
formatter.step({
  "name": "bulk data \"del@gmail.com\" and \"\u003cpassword\u003e\" to user and text box",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.step.ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(ScenarioOutlineStep.java:18)\r\n\tat ✽.bulk data \"del@gmail.com\" and \"\u003cpassword\u003e\" to user and text box(file:src/test/resources/fb.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Bulk Datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@module01"
    },
    {
      "name": "@module02"
    }
  ]
});
formatter.step({
  "name": "bulk data \"raj@gmail.com\" and \"\u003cpassword\u003e\" to user and text box",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FJ51G12\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\DELFIN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61142}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 318628b262424cbf9634c9a425def1bd\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.fillText(BaseClass.java:34)\r\n\tat org.step.ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(ScenarioOutlineStep.java:16)\r\n\tat ✽.bulk data \"raj@gmail.com\" and \"\u003cpassword\u003e\" to user and text box(file:src/test/resources/fb.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-FJ51G12\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\DELFIN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61142}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 318628b262424cbf9634c9a425def1bd\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat org.step.Hooks.AScreenshot(Hooks.java:32)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:538)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:760)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:460)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:206)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "To launch the chrome browser and hit the facebook",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.to_launch_the_chrome_browser_and_hit_the_facebook()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate Bulk Datas",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@module01"
    },
    {
      "name": "@module02"
    }
  ]
});
formatter.step({
  "name": "bulk data \"eva@gmail.com\" and \"\u003cpassword\u003e\" to user and text box",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(String,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat org.step.ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(ScenarioOutlineStep.java:18)\r\n\tat ✽.bulk data \"eva@gmail.com\" and \"\u003cpassword\u003e\" to user and text box(file:src/test/resources/fb.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});