/// <reference types="cypress" />

interface CartPageElements {
  productRow: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  productPrice: (productId: number) => Cypress.Chainable<JQuery<HTMLElement>>;
  productQuantity: (productId: number) => Cypress.Chainable<JQuery<HTMLInputElement>>;
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

  /* ============================
     ASSERTIONS
     ============================ */

  verifyProductExists(productId: number): void {
    this.elements.productRow(productId).should('exist').and('be.visible');
  }

  verifyProductPrice(productId: number, expectedPrice: string): void {
    this.elements.productPrice(productId).should('be.visible').and('contain.text', expectedPrice);
  }

  verifyProductQuantity(productId: number, expectedQt: string): void {
    this.elements.productQuantity(productId).should('be.visible').and('contain.text', expectedQt);
  }

  verifyProductTotal(productId: number, expectedTotal: string): void {
    this.elements.productTotal(productId).should('be.visible').and('contain.text', expectedTotal);
  }
  clickContinueShoppingBtn(): void {
    this.elements.continueShoppingBtn().should('be.visible').click();
  }
}

export const cartPage = new CartPage();
