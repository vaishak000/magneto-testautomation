export class LoginPage {
    visit() {
      cy.visit('/customer/account/login/');
    }
  
    fillForm(userData) {
      cy.get('#email').type(userData.email);
      cy.get('#pass').type(userData.password);
    }

    fillform() {
      cy.get('#email').type('a');
      cy.get('#pass').type('a');
      
    }
  
    submitForm() {
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
    }
  
    shouldRedirectToAccountDashboard() {
      
      cy.contains('Welcome').should('be.visible');
    }

    shouldShowErrorMessage() {
      cy.get('#email-error').should('be.visible'); 
    }
   
  }
  const login = new LoginPage();
  export default login

 