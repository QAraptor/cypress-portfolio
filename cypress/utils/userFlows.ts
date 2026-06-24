import { UserFixture } from '../fixtures/types';

//-----Workflow Helpers-------//
export const registerAndDeleteUser = (user: UserFixture) => {
  cp.homePage.verifyHomeTitle();
  cp.homePage.goToSignup();

  cp.loginPage.verifySignup();
  cp.loginPage.enterSignupName(user.fullName);
  cp.loginPage.enterSignupEmail(user.email);
  cp.loginPage.submitSignup();

  cp.accountInfoPage.verifyAccountInfoHeader();
  cp.accountInfoPage.enterFullName(user.fullName);
  cp.accountInfoPage.enterTitle();
  cp.accountInfoPage.createPassword(user.password);

  cp.accountInfoPage.enterDay(user.day);
  cp.accountInfoPage.enterMonth(user.month);
  cp.accountInfoPage.enterYear(user.year);

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

  cp.homePage.deleteAccount();
  cp.accountInfoPage.verifyAccountDeleted();
  cp.accountInfoPage.clickContinueBtn();
};

export const registerNewUser = (users: UserFixture) => {
  cy.navigateSignup();
  cp.loginPage.enterSignupName(users.fullName);
  cp.loginPage.enterSignupEmail(users.email);
  cp.loginPage.submitSignup();
  cp.accountInfoPage.verifyAccountInfoHeader();
  cp.accountInfoPage.enterFullName(users.fullName);
  cp.accountInfoPage.enterTitle();
  cp.accountInfoPage.createPassword(users.password);
  cp.accountInfoPage.enterDay(users.day);
  cp.accountInfoPage.enterMonth(users.month);
  cp.accountInfoPage.enterYear(users.year);
  cp.accountInfoPage.receiveSpecialOffer();
  cp.accountInfoPage.signUpNewsletter();
  cp.accountInfoPage.enterFirstName(users.firstName);
  cp.accountInfoPage.enterLastName(users.lastName);
  cp.accountInfoPage.enterCompany(users.company);
  cp.accountInfoPage.enterAddress(users.address);
  cp.accountInfoPage.enterAddress2(users.address2);
  cp.accountInfoPage.enterCountry(users.country);
  cp.accountInfoPage.enterState(users.state);
  cp.accountInfoPage.enterCity(users.city);
  cp.accountInfoPage.enterZipcode(users.zipcode);
  cp.accountInfoPage.enterMobile(users.mobile);
  cp.accountInfoPage.createAccount();
  cp.accountInfoPage.verifyAccount();
  cp.accountInfoPage.clickContinueBtn();
};

export const signInAndDeleteUser = (users: UserFixture) => {
  cy.navigateSignup();
  cp.loginPage.verifyLoginHeader();
  cp.loginPage.enterLoginEmail(users.email);
  cp.loginPage.enterPassword(users.password);
  cp.loginPage.clickLogin();
  cp.homePage.verifyLoggedInAs(users.username);
  cp.homePage.deleteAccount();
  cp.accountInfoPage.verifyAccountDeleted();
};
