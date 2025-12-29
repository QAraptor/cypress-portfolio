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

  it.only('Test Case 12: Add Products in Cart', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToProductPage();
    cp.productPage.clickFirstAddToCart();
    cp.cartPage.clickContinueShoppingBtn();
    cp.productPage.clickAddToCartByProductId('2');
    cp.productPage.clickViewCart();
    cp.cartPage.verifyProductExists(1);
    cp.cartPage.verifyProductExists(2);
    cp.cartPage.verifyProductPrice(1, '500');
    cp.cartPage.verifyProductQuantity(1, '1');
    cp.cartPage.verifyProductTotal(1, '500');
    cp.cartPage.verifyProductPrice(2, '400');
    cp.cartPage.verifyProductQuantity(2, '1');
    cp.cartPage.verifyProductTotal(2, '400');
  });

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
