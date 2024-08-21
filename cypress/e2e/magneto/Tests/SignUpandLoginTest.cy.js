import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import signup from '../Pages/SignUpPage.cy.js';
import login from '../Pages/LoginPage.cy.js';

before(() => {
  cy.task('generateUserData');
});

Given("I navigate to the Website", () => {
  signup.visit('/');
});

When('I navigate to the sign-up page', () => {
  signup.visit('/signup'); // Ensure this is the correct URL for the signup page
});

When('I enter valid registration details', () => {
  cy.fixture('userData').then(userData => {
    signup.fillForm(userData);
  });
});

When('I submit the registration form', () => {
  signup.submitForm();
});

Then('I should see a registration success message', () => {
  signup.shouldShowThankYouMessage();
});

Then('I should be redirected to the account dashboard', () => {
  cy.url().should('include', '/customer/account/'); 
});

Given('I am already registered', () => {
  
  cy.fixture('userData').then(userData => {
    
  });
});

When('I visit the login page', () => {
  login.visit('/login'); 
});

When('I fill in the login form with the same dynamic data', () => {
  cy.fixture('userData').then(userData => {
    login.fillForm(userData);
  });
});

When('I submit the login form', () => {
  login.submitForm();
});

Then('I should be logged in successfully', () => {
  login. shouldRedirectToAccountDashboard();
});

When('I enter invalid registration details', () => {
  // Adjust this based on what constitutes invalid data
  signup.fillForm({
    firstName: 'a', // Invalid
    lastName: 'a',  // Invalid
    email: 'invalid-email', // Invalid
    password: 'short' // Invalid
  });
});

Then('I should see an error message indicating invalid registration', () => {
  signup.shouldShowErrorMessage(); // Adjust this to match the actual method for error checking
});

When('I fill in the login form with incorrect credentials', () => {
  login.fillform();
});

Then('I should see an error message indicating invalid login credentials', () => {
  login.shouldShowErrorMessage(); // Adjust this to match the actual method for error checking
});
