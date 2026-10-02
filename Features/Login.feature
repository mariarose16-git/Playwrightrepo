Feature:Login

@validlogin
Scenario:Sucessful login with valid credentials
Given the user is on the login page
When user enters valid username and password
Then the inventory page should be displayed

Scenario: Unsuccessful login with invalid credentials
Given the user is on the login page
When user enters invalid credentials
Then error message should be visible