/// <reference types="cypress" />

import { testUtils, TestUtils } from 'cypress/utils/testUtils';
interface CartPageElements {
  productRow: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  productPrice: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  productQuantity: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  productTotal: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  continueShoppingBtn: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

export class CartPage {
  elements: CartPageElements = {
    productRow: (productId: number) => cy.get(`#product-${productId}`),
    productPrice: (productId: number) => cy.get(`#product-${productId} .cart_price`),
    productQuantity: (productId: number) => cy.get(`#product-${productId} .cart_quantity`),
    productTotal: (productId: number) => cy.get(`#product-${productId} .cart_total`),
    continueShoppingBtn: () => cy.get('.btn.btn-success.close-modal.btn-block'),
  };

  verifyProductExists(productId: number): void {
    testUtils.verifyExistsAndVisible(this.elements.productRow(productId));
  }

  verifyProductPrice(productId: number, expectedPrice: string): void {
    testUtils.verifyContainsTextChainable(this.elements.productPrice(productId), expectedPrice);
  }

  verifyProductQuantity(productId: number, expectedQt: string): void {
    testUtils.verifyContainsTextChainable(this.elements.productQuantity(productId), expectedQt);
  }

  verifyProductTotal(productId: number, expectedTotal: string): void {
    testUtils.verifyContainsTextChainable(this.elements.productTotal(productId), expectedTotal);
  }

  clickContinueShoppingBtn(): void {
    testUtils.clickChainable(this.elements.continueShoppingBtn());
  }
}

export const cartPage = new CartPage();
