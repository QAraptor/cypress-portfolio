/// <reference types="cypress" />
interface ProductsPageElements {
  titleTextHeader: () => Cypress.Chainable<JQuery<HTMLElement>>;
  productList: () => Cypress.Chainable<JQuery<HTMLElement>>;
  viewButton: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

export class ProductsPage {
  readonly pageTitle = 'All Products';
  private readonly filterLabels = ['Category', 'Brand', 'Condition', 'Availability', 'Rs'] as const;

  elements: ProductsPageElements = {
    titleTextHeader: () => cy.get('.title-text-center'),
    productList: () => cy.get('.product-image-wrapper'),
    viewButton: () => cy.get("a[href='/product_details/1']"),
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

  clickViewButton() {
    this.elements.viewButton().click();
  }
  viewProductLinks() {
    return cy.get('a[href^="/product_details"]');
  }

  clickFirstProduct() {
    this.viewProductLinks().first().click();
  }
}

export const productPage = new ProductsPage();
