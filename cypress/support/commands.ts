/// <reference types="cypress" />
import { loginPage } from '../pages/LoginPage';

 
export {};



Cypress.Commands.add('navigateSignup', () => {
    cp.homePage.verifyHomeTitle()
    cp.homePage.goToSignup()
    cp.loginPage.verifySignup()

})
Cypress.Commands.add('registerUser', (entityKey: string) => {
  cy.fixture('users').then((fx) => {
    const user = fx.users[entityKey];

    cp.homePage.goToSignup();
    cp.loginPage.enterSignupName(user.fullName);
    cp.loginPage.enterSignupEmail(user.email);
    cp.loginPage.submitSignup();

    cp.accountInfoPage.verifyAccountInfoHeader();
    cp.accountInfoPage.enterFullName(user.fullName);
    cp.accountInfoPage.enterTitle();
    cp.accountInfoPage.createPassword(user.password);
    cp.accountInfoPage.enterDateOfBirth(user.day,user.month,user.year);
    cp.accountInfoPage.receiveSpecialOffer();
    cp.accountInfoPage.signUpNewsletter();
    cp.accountInfoPage.enterFirstName(user.firstName);
    cp.accountInfoPage.enterLastName(user.lastName);
    cp.accountInfoPage.enterCompany(user.company);
    cp.accountInfoPage.enterAddress(user.address);
    cp.accountInfoPage.enterAddress2(user.address2);
    cp.accountInfoPage.enterCountry(user.country);
    cp.accountInfoPage.enterState(user.state);
    cp.accountInfoPage.enterCity(user.city);
    cp.accountInfoPage.enterZipcode(user.zipcode);
    cp.accountInfoPage.enterMobile(user.mobile);
    cp.accountInfoPage.createAccount();
    cp.accountInfoPage.verifyAccount();
    cp.accountInfoPage.clickContinueBtn();
  });
});



//});

