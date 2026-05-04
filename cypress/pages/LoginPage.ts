/// <reference types="cypress" />

import { testUtils, TestUtils } from 'cypress/utils/testUtils';

export class LoginPage {
  elements = {
    loginEmail: "input[data-qa='login-email']",
    password: "input[placeholder='Password']",
    loginBtn: "button[data-qa='login-button']",
    signupName: "input[placeholder='Name']",
    signupEmail: "input[data-qa='signup-email']",
    signupBtn: "button[data-qa='signup-button']",
    signupHeader: 'div.signup-form h2',
    loginHeader: "div[class='login-form'] h2",
    signupErrorInput: 'input[name="email"]',
  };

  openHome() {
    cy.visit('http://automationexercise.com');
  }

  verifySignup(): void {
    testUtils.verifyText(this.elements.signupHeader, 'New User Signup!');
  }
  enterSignupName(name: string): void {
    testUtils.enterText(this.elements.signupName, name);
  }
  enterSignupEmail(email: string): void {
    testUtils.enterText(this.elements.signupEmail, email);
  }
  submitSignup(): void {
    testUtils.clickElement(this.elements.signupBtn);
  }

  verifyLoginHeader(): void {
    testUtils.verifyElementVisible(this.elements.loginHeader);
  }

  enterLoginEmail(email: string): void {
    testUtils.enterText(this.elements.loginEmail, email);
  }
  enterPassword(password: string): void {
    testUtils.enterText(this.elements.password, password);
  }
  /*
  clickLogin() {
    this.elements.loginBtn().click();
  }
    */
  clickLogin(): void {
    testUtils.clickElement(this.elements.loginBtn);
  }
  verifyEmailExistsMessage(): void {
    testUtils.verifyContainsText('Email Address already exist!');
  }

  verifySignupError(): void {
    testUtils.verifyInputInvalid(this.elements.signupErrorInput);
  }
}
export const loginPage = new LoginPage();
