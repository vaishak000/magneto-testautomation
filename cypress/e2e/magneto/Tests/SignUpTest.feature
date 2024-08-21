Feature: User Registration and Login

Background: 
  Given I navigate to the Website

Scenario: Register a new user with dynamic data
  When I navigate to the sign-up page
  And I enter valid registration details
  And I submit the registration form
  Then I should see a registration success message
  And I should be redirected to the account dashboard

Scenario: Log in with the same dynamic data
  Given I am already registered
  When I visit the login page
  And I fill in the login form with the same dynamic data
  And I submit the login form
  Then I should be logged in successfully

Scenario: Fail to register with invalid data
  When I navigate to the sign-up page
  And I enter invalid registration details
  And I submit the registration form
  Then I should see an error message indicating invalid registration

Scenario: Fail to log in with incorrect credentials
  Given I am already registered
  When I visit the login page
  And I fill in the login form with incorrect credentials
  And I submit the login form
  Then I should see an error message indicating invalid login credentials