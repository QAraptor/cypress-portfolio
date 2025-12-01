/// <reference types="cypress" />

interface ProductsPageElements {
  titleTextHeader: () => Cypress.Chainable<JQuery<HTMLElement>>;
  productList: () => Cypress.Chainable<JQuery<HTMLElement>>;
  pageTitle: () => string;
}

export class ProductsPage {
  elements = {
    titleTextHeader: () => cy.get(".title.text-center"),
    productList: () => cy.get(".product-image-wrapper"),
    pageTitle: () => "All Products"


  }; 

  verifyPageTitle() {
    this.elements.titleTextHeader()
      .should('be.visible')
      .and('contain.text', this.elements.pageTitle());
  }
 verifyProductList() {
  this.elements.productList()
    .should('have.length.greaterThan', 0)
    .each(($el) => {
      cy.wrap($el).should('be.visible');
    });
}
}

  export const productPage = new ProductsPage();