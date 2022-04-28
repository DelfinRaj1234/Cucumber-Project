Feature: To validate the login functionality of facebook
   

  Scenario: Validate invalid username and password
   Given Launch browser and hit the facebook
    When Pass invalid user name to username text box

    And Pass invalid password to password text box
    
    And Click the continue button
    Then Close 
