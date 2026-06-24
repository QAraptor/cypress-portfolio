//---------Generic Helpers--------//

export class TestUtils {
  generateRandomEmail(): string {
    return `user_${Date.now()}@test.com`;
  }

  parseApiBody(body: any): any {
    return typeof body === 'string' ? JSON.parse(body) : body;
  }

  clickElement(locator: string): void {
    cy.get(locator, { timeout: 10000 }).click({ force: true });
  }
  enterText(locator: string, text: string): void {
    cy.get(locator, { timeout: 10000 }).clear().type(text);
  }

  verifyElementVisible(locator: string): void {
    cy.get(locator, { timeout: 10000 }).should('be.visible');
  }

  verifyText(locator: string, text: string): void {
    cy.get(locator, { timeout: 10000 }).should('contain.text', text);
  }

  verifyContainsText(text: string): void {
    cy.contains(text).should('be.visible');
  }

  verifyInputInvalid(locator: string): void {
    cy.get(locator).then(($el) => {
      const input = $el[0] as HTMLInputElement;
      expect(input.checkValidity()).to.be.false;
    });
  }
  checkElement(locator: string): void {
    cy.get(locator, { timeout: 10000 }).check();
  }

  selectDropdown(locator: string, value: string): void {
    cy.get(locator, { timeout: 10000 }).select(value);
  }

  selectDropdownAndVerifyValue(locator: string, value: string): void {
    cy.get(locator, { timeout: 10000 }).select(value).should('have.value', value);
  }

  selectDropdownAndVerifyContains(locator: string, value: string): void {
    cy.get(locator, { timeout: 10000 }).select(value).should('contain', value);
  }

  verifyTextNotEqual(locator: string, text: string): void {
    cy.get(locator, { timeout: 10000 }).should('not.have.text', text);
  }
  verifyVisible(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should('be.visible');
  }

  verifyExistsAndVisible(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should('exist').and('be.visible');
  }

  verifyContainsTextChainable(
    element: Cypress.Chainable<JQuery<HTMLElement | HTMLInputElement>>,
    text: string
  ): void {
    element.should('be.visible').and('contain.text', text);
  }

  clickChainable(element: Cypress.Chainable<JQuery<HTMLElement>>): void {
    element.should('be.visible').click();
  }
}

export const testUtils = new TestUtils();
