/// <reference types="cypress" />
import { registerAndDeleteUser, registerNewUser, signInAndDeleteUser } from '../../utils/userFlows';

//import { fx } from "cypress/fixtures";

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 3: Login User with correst email and password', () => {
    cy.navigateSignup();
    cp.loginPage.verifyLoginHeader();
    cp.loginPage.enterLoginEmail(fx.users.entity_01.email);
    cp.loginPage.enterPassword(fx.users.entity_01.password);
    cp.loginPage.clickLogin();
    cp.homePage.verifyLoggedInAs(fx.users.entity_01.username);
    cp.homePage.deleteAccount();
    cp.accountInfoPage.verifyAccountDeleted();
  });

  it('Test Case 4: Register User with existing email', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.entity_02.fullName);
    cp.loginPage.enterSignupEmail(fx.users.entity_02.email);
    cp.loginPage.submitSignup();
    cp.loginPage.verifyEmailExistsMessage();
  });

  it('Test Case 5: Sign in with existing user and delete account', () => {
    signInAndDeleteUser(fx.users.entity_05);
    signInAndDeleteUser(fx.users.entity_02);
  });
});
