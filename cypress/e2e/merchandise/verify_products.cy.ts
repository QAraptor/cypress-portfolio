/// <reference types="cypress" />

//import { fx } from "cypress/fixtures";

describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.automationexercise.com');
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToProductPage();
    cp.productPage.verifyPageTitle();
    cp.productPage.verifyProductList();
    cp.productPage.clickFirstProduct();
    cp.productPage.verifyDefaultFilters();
  });


  it('Test Case 12: Add Products in Cart', () =>{


    
  }

  /*
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Products' button
5. Hover over first product and click 'Add to cart'
6. Click 'Continue Shopping' button
7. Hover over second product and click 'Add to cart'
8. Click 'View Cart' button
9. Verify both products are added to Cart
10. Verify their prices, quantity and total price
  */
});
