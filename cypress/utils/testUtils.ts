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
}

export const testUtils = new TestUtils();
