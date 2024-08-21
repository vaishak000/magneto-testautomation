export class SignupPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    fillForm(userData) {
      cy.get('#firstname').type(userData.firstName);
      cy.get('#lastname').type(userData.lastName);
      cy.get('#email_address').type(userData.email);
      cy.get('#password').type(userData.password);
      cy.get('#password-confirmation').type(userData.password);
    }
  
    submitForm() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    shouldShowThankYouMessage() {
      cy.contains('Thank you for registering').should('be.visible');
    }

    shouldShowErrorMessage() {
      cy.get('#email_address-error').should('be.visible'); 
    }
  }

const signup = new SignupPage();
 export default signup;
  