/// <reference types="cypress" />

//import { fx } from "cypress/fixtures";

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  })
  
   it('Test Case 8: Verify All Products and product detail page', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToProductPage();
    cp.productPage.verifyPageTitle();
    cp.productPage.verifyProductList();
    
   
  });
  
})