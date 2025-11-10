export class HomePage {
  elements = {
    loginLink: () => cy.get("a[href='/login']"),
    deleteAccountBtn: () => cy.get("a[href='/delete_account']"),
  };

  verifyHomeTitle() {
    cy.title().should('eq', 'Automation Exercise');
  }

  goToSignup() {
    this.elements.loginLink().click();
  }
  deleteAccount(){
    this.elements.deleteAccountBtn().click()
  }
}
export const homePage = new HomePage();