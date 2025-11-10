/// <reference types="cypress" />
import { loginPage } from '../pages/LoginPage';

 
export {};

Cypress.Commands.add('startSignup', (user: { name: string; email: string }) => {
  cp.homePage.verifyHomeTitle();
  cp.homePage.goToSignup();
  cp.loginPage.verifySignup();
  cp.loginPage.enterSignupName(user.name);
  cp.loginPage.enterSignupEmail(user.email);
  cp.loginPage.submitSignup();
});






//});

