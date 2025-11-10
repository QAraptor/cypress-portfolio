/// <reference types="cypress" />

//import { fx } from "cypress/fixtures";


describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  });
  it('Test Case 1: Register User', () => {

    cp.homePage.verifyHomeTitle()
    cp.homePage.goToSignup()
    cp.loginPage.verifySignup()
    cp.loginPage.enterSignupName(fx.users.entity_02.fullName)
    cp.loginPage.enterSignupEmail(fx.users.entity_02.email)
    cp.loginPage.submitSignup()
    cp.accountInfoPage.verifyAccountInfoHeader()
    cp.accountInfoPage.enterFullName(fx.users.entity_02.fullName)
    cp.accountInfoPage.enterTitle()
    cp.accountInfoPage.createPassword(fx.users.entity_02.password)
    cp.accountInfoPage.enterDateOfBirth()
    cp.accountInfoPage.receiveSpecialOffer()
    cp.accountInfoPage.signUpNewsletter()
    cp.accountInfoPage.enterFirstName(fx.users.entity_02.firstName)
    cp.accountInfoPage.enterLastName(fx.users.entity_02.lastName)
    cp.accountInfoPage.enterCompany(fx.users.entity_02.company)
    cp.accountInfoPage.enterAddress(fx.users.entity_02.address)
    cp.accountInfoPage.enterAddress2(fx.users.entity_02.address2)
    cp.accountInfoPage.enterCountry(fx.users.entity_02.country)
    cp.accountInfoPage.enterState(fx.users.entity_02.state)
    cp.accountInfoPage.enterCity(fx.users.entity_02.city)
    cp.accountInfoPage.enterZipcode(fx.users.entity_02.zipcode)
    cp.accountInfoPage.enterMobile(fx.users.entity_02.mobile)
    cp.accountInfoPage.createAccount()
    cp.accountInfoPage.verifyAccount()
    cp.accountInfoPage.clickContinueBtn()
    cp.homePage.deleteAccount()
    cp.accountInfoPage.verifyAccountDeleted()
    cp.accountInfoPage.clickContinueBtn()

    
   
    
  });
});
