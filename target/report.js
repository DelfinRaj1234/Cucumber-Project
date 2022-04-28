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
  "status": "passed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
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
  "status": "passed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
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
  "name": "bulk data \"eva@gmail.com\" and \"\u003cpassword\u003e\" to user and text box",
  "keyword": "When "
});
formatter.match({
  "location": "ScenarioOutlineStep.bulk_data_and_to_user_and_text_box(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click button",
  "keyword": "And "
});
formatter.match({
  "location": "ScenarioOutlineStep.click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close window",
  "keyword": "Then "
});
formatter.match({
  "location": "ScenarioOutlineStep.close_window()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});