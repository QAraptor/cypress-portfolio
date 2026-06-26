/// <reference types="cypress" />

import { registerAndDeleteUser, registerNewUser, signInAndDeleteUser } from '../../utils/userFlows';
import { testUtils } from '../../utils/testUtils';
describe('Register', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 1: Register and Delete User', () => {
    registerAndDeleteUser(fx.users.entity_04);
  });

  it('demo email generator', () => {
    const email = testUtils.generateRandomEmail();
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.entity_03.fullName);
    cp.loginPage.enterSignupEmail(email);
  });

  it('should show an error when email is missing during registration', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.entity_01.fullName);
    cp.loginPage.submitSignup();

    cp.loginPage.verifySignupError();
  });

  it('should show an error when password is missing during registration', () => {
    const email = testUtils.generateRandomEmail();
    cy.navigateSignup();
    cp.loginPage.enterSignupName(fx.users.entity_03.fullName);
    cp.loginPage.enterSignupEmail(email);
    cp.loginPage.submitSignup();
    cp.accountInfoPage.verifyAccountInfoHeader();
    cp.accountInfoPage.enterFullName(fx.users.entity_03.fullName);
    cp.accountInfoPage.enterTitle();
    //omit password
    cp.accountInfoPage.enterDay(fx.users.entity_03.day);
    cp.accountInfoPage.enterMonth(fx.users.entity_03.month);
    cp.accountInfoPage.enterYear(fx.users.entity_03.year);
    cp.accountInfoPage.receiveSpecialOffer();
    cp.accountInfoPage.signUpNewsletter();
    cp.accountInfoPage.enterFirstName(fx.users.entity_03.firstName);
    cp.accountInfoPage.enterLastName(fx.users.entity_03.lastName);
    cp.accountInfoPage.enterCompany(fx.users.entity_03.company);
    cp.accountInfoPage.enterAddress(fx.users.entity_03.address);
    cp.accountInfoPage.enterAddress2(fx.users.entity_03.address2);
    cp.accountInfoPage.enterCountry(fx.users.entity_03.country);
    cp.accountInfoPage.enterState(fx.users.entity_03.state);
    cp.accountInfoPage.enterCity(fx.users.entity_03.city);
    cp.accountInfoPage.enterZipcode(fx.users.entity_03.zipcode);
    cp.accountInfoPage.enterMobile(fx.users.entity_03.mobile);
    cp.accountInfoPage.createAccount();
    cp.accountInfoPage.verifyAccountDoesNotExist();
  });
});
