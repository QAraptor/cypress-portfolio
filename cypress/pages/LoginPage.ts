export class LoginPage {
  elements = {
    username: () => cy.get("input[data-qa='login-email']"),
    password: () => cy.get("input[placeholder='Password']"),
    loginBtn: () => cy.get("button[data-qa='login-button']"),
    signupName: () => cy.get("input[placeholder='Name']"),
    signupEmail: () => cy.get("input[data-qa='signup-email']"),
    signupBtn: () => cy.get("button[data-qa='signup-button']"),
    signupHeader: () => cy.get('div.signup-form h2'),

  };
  
  openHome() {
    cy.visit('http://automationexercise.com');
  }
  
  verifySignup() {
    this.elements.signupHeader().should('have.text', 'New User Signup!');
  }
  enterSignupName(name: string) {
    this.elements.signupName().clear().type(name);
  }
  enterSignupEmail(email: string) {
    this.elements.signupEmail().clear().type(email);
  }
  submitSignup() {
    this.elements.signupBtn().click();
  }

}
export const loginPage = new LoginPage();
