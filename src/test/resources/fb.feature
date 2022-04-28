@module01 @module02
Feature: To validate the login functionality of facebook

  Background: 
    Given To launch the chrome browser and hit the facebook

  Scenario: To validate invalid username and invalidate password
    When To pass the invalid user name to username text box
      | Email-1 | del@gmail.com  |
      | Email-2 | lin@gmail.com  |
      | Email-3 | shan@gmail.com |
      | Email-4 | eva@gmail.com  |
    And To pass the invalid password to password text box
      | Password 1 | Password 2 | Password 3 |
      | java       | python     | java1      |
      | raj        | greens     | selenium   |
      | xxxxx      | xzzxx      |       1234 |
    And User has to click the continue button
    Then user has to close the browser

  Scenario Outline: To validate Bulk Datas
    When bulk data "<ID>" and "<password>" to user and text box
    And Click button
    Then Close window

    Examples: 
      | ID            | Password |
      | del@gmail.com | xxxxxx   |
      | raj@gmail.com | zzzzzz   |
      | eva@gmail.com | cccccx   |
