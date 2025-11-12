/// <reference types="cypress" />
import { loginPage } from '../pages/LoginPage';

 
export {};



Cypress.Commands.add('navigateSignup', () => {
    cp.homePage.verifyHomeTitle()
    cp.homePage.goToSignup()
    cp.loginPage.verifySignup()

})






//});

