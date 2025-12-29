/// <reference types="cypress" />
import { registerAndDeleteUser, registerNewUser } from '../../utils/userFlows';
//import { fx } from "cypress/fixtures";
import { generateRandomEmail } from '../../utils/testUtils';
const email = generateRandomEmail();
describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  });

  it('Test Case 1: Register and Delete User', () => {
    registerAndDeleteUser(fx.users.entity_04);
  });

  it('Test Case 2: Register User', () => {
    cy.navigateSignup();
    cp.loginPage.enterSignupName(fx.users.entity_01.fullName);
    cp.loginPage.enterSignupEmail(fx.users.entity_01.email);
    cp.loginPage.submitSignup();
    cp.accountInfoPage.verifyAccountInfoHeader();
    cp.accountInfoPage.enterFullName(fx.users.entity_01.fullName);
    cp.accountInfoPage.enterTitle();
    cp.accountInfoPage.createPassword(fx.users.entity_01.password);
    cp.accountInfoPage.enterDay(fx.users.entity_01.day);
    cp.accountInfoPage.enterMonth(fx.users.entity_01.month);
    cp.accountInfoPage.enterYear(fx.users.entity_01.year);
    cp.accountInfoPage.receiveSpecialOffer();
    cp.accountInfoPage.signUpNewsletter();
    cp.accountInfoPage.enterFirstName(fx.users.entity_01.firstName);
    cp.accountInfoPage.enterLastName(fx.users.entity_01.lastName);
    cp.accountInfoPage.enterCompany(fx.users.entity_01.company);
    cp.accountInfoPage.enterAddress(fx.users.entity_01.address);
    cp.accountInfoPage.enterAddress2(fx.users.entity_01.address2);
    cp.accountInfoPage.enterCountry(fx.users.entity_01.country);
    cp.accountInfoPage.enterState(fx.users.entity_01.state);
    cp.accountInfoPage.enterCity(fx.users.entity_01.city);
    cp.accountInfoPage.enterZipcode(fx.users.entity_01.zipcode);
    cp.accountInfoPage.enterMobile(fx.users.entity_01.mobile);
    cp.accountInfoPage.createAccount();
    cp.accountInfoPage.verifyAccount();
    cp.accountInfoPage.clickContinueBtn();
  });
  it('Test Case 2.5: Register Different User', () => {
    /*
    cy.navigateSignup();
    cp.loginPage.enterSignupName(fx.users.entity_02.fullName);
    cp.loginPage.enterSignupEmail(fx.users.entity_02.email);
    cp.loginPage.submitSignup();
    cp.accountInfoPage.verifyAccountInfoHeader();
    cp.accountInfoPage.enterFullName(fx.users.entity_02.fullName);
    cp.accountInfoPage.enterTitle();
    cp.accountInfoPage.createPassword(fx.users.entity_02.password);
    cp.accountInfoPage.enterDay(fx.users.entity_02.day);
    cp.accountInfoPage.enterMonth(fx.users.entity_01.month);
    cp.accountInfoPage.enterYear(fx.users.entity_02.year);
    cp.accountInfoPage.receiveSpecialOffer();
    cp.accountInfoPage.signUpNewsletter();
    cp.accountInfoPage.enterFirstName(fx.users.entity_02.firstName);
    cp.accountInfoPage.enterLastName(fx.users.entity_02.lastName);
    cp.accountInfoPage.enterCompany(fx.users.entity_02.company);
    cp.accountInfoPage.enterAddress(fx.users.entity_02.address);
    cp.accountInfoPage.enterAddress2(fx.users.entity_02.address2);
    cp.accountInfoPage.enterCountry(fx.users.entity_02.country);
    cp.accountInfoPage.enterState(fx.users.entity_02.state);
    cp.accountInfoPage.enterCity(fx.users.entity_02.city);
    cp.accountInfoPage.enterZipcode(fx.users.entity_02.zipcode);
    cp.accountInfoPage.enterMobile(fx.users.entity_02.mobile);
    cp.accountInfoPage.createAccount();
    cp.accountInfoPage.verifyAccount();
    cp.accountInfoPage.clickContinueBtn();
    */
    registerNewUser(fx.users.entity_05);
  });

  it('demo email generator', () => {
    //  const email = generateRandomEmail();
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.entity_03.fullName);
    cp.loginPage.enterSignupEmail(email);
    //  cp.loginPage.submitSignup();
  });

  it('should show an error when email is missing during registration', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToSignup();
    cp.loginPage.verifySignup();
    cp.loginPage.enterSignupName(fx.users.entity_01.fullName);
    cp.loginPage.submitSignup();

    cp.loginPage.verifySignupError(cp.loginPage.emailInput);
  });

  it('should show an error when password is missing during registration', () => {
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

  it('should intentionally fail to verify screenshots and video', () => {
    cy.visit('/');
    cy.get('this-does-not-exist');
  });
});
