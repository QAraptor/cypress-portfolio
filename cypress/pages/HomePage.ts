/// <reference types="cypress" />
export class HomePage {
  elements = {
    loginLink: () => cy.get("a[href='/login']"),
    deleteAccountBtn: () => cy.get("a[href='/delete_account']"),
    userStatus: () => cy.get('.shop-menu .nav.navbar-nav li a:has(i.fa-user)'),
    productsBtn: () => cy.get("a[href='/products']"),
    logoutBtn: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
  };

  verifyHomeTitle() {
    cy.title().should('eq', 'Automation Exercise');
  }

  goToSignup() {
    this.elements.loginLink().click();
  }
  deleteAccount() {
    this.elements.deleteAccountBtn().click();
  }
  verifyLoggedInAs(username: string) {
    this.elements
      .userStatus()
      .should('contain.text', 'Logged in as')
      .find('b')
      .should('have.text', username);
  }
  goToProductPage() {
    this.elements.productsBtn().click();
  }
  clickLogoutBtn() {
    this.elements.logoutBtn().click();
  }
}

export const homePage = new HomePage();
