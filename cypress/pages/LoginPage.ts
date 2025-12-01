/// <reference types="cypress" />
export class LoginPage {
  elements = {
   loginEmail: () => cy.get("input[data-qa='login-email']"),
    password: () => cy.get("input[placeholder='Password']"),
    loginBtn: () => cy.get("button[data-qa='login-button']"),
    signupName: () => cy.get("input[placeholder='Name']"),
    signupEmail: () => cy.get("input[data-qa='signup-email']"),
    signupBtn: () => cy.get("button[data-qa='signup-button']"),
    signupHeader: () => cy.get('div.signup-form h2'),
    loginHeader: () => cy.get("div[class='login-form'] h2"),
    emailExistsMsg: () =>  cy.contains('p', 'Email Address already exist!')
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
   
  verifyLoginHeader() {
    this.elements.loginHeader().should('be.visible');
  }

   enterLoginEmail(email: string) {
    this.elements.loginEmail().clear().type(email);
  }
  enterPassword(password: string) {
    this.elements.password().clear().type(password);
  }
  clickLogin(){
    this.elements.loginBtn().click();
  }
  verifyEmailExistsMessage() {
  this.elements.emailExistsMsg().should('be.visible');
}



}
export const loginPage = new LoginPage();
