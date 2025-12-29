/// <reference types="cypress" />
interface ProductsPageElements {
  titleTextHeader: () => Cypress.Chainable<JQuery<HTMLElement>>;
  productList: () => Cypress.Chainable<JQuery<HTMLElement>>;

  addToCartButtons: () => Cypress.Chainable<JQuery<HTMLElement>>;
  viewCartButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
  productLinks: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

export class ProductsPage {
  readonly pageTitle = 'All Products';
  private readonly filterLabels = ['Category', 'Brand', 'Condition', 'Availability', 'Rs'] as const;

  elements: ProductsPageElements = {
    titleTextHeader: () => cy.get('.title-text-center'),
    productList: () => cy.get('.product-image-wrapper'),
    addToCartButtons: () => cy.get('a.add-to-cart'),
    viewCartButton: () => cy.get('#cartModal a[href="/view_cart"]'),
    productLinks: () => cy.get('a[href^="/product_details"]'),
  };

  verifyPageTitle() {
    cy.contains(this.pageTitle).should('be.visible');
  }

  verifyProductList() {
    this.elements
      .productList()
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        cy.wrap($el).should('be.visible');
      });
  }

  verifyDefaultFilters(): void {
    this.filterLabels.forEach((label) => {
      cy.contains(label).should('be.visible');
    });
  }

  viewProductLinks() {
    return this.elements.productLinks();
  }

  clickFirstProduct() {
    this.viewProductLinks().first().click();
  }
  clickFirstAddToCart(): void {
    this.elements.addToCartButtons().first().should('be.visible').click();
  }
  clickViewCart(): void {
    this.elements.viewCartButton().should('be.visible').click();
  }
  /*
  clickAddToCartByProductId(id: string): void {
    cy.get(`a.add-to-cart[data-product-id="${id}"]`).should('be.visible').click();
  }
    */
  clickAddToCartByProductId(id: string): void {
    cy.get(`a.add-to-cart[data-product-id="${id}"]`)
      .filter(':visible')
      .should('have.length', 1)
      .click();
  }
}

export const productPage = new ProductsPage();
