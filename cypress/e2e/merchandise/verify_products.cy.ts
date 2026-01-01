/// <reference types="cypress" />

//import { fx } from "cypress/fixtures";

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    cp.homePage.verifyHomeTitle();
    cp.homePage.goToProductPage();
    cp.productPage.verifyPageTitle();
    cp.productPage.verifyProductList();
    cp.productPage.clickFirstProduct();
    cp.productPage.verifyDefaultFilters();
  });

  it('Test Case 12: Add Products in Cart', () => {
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
});
