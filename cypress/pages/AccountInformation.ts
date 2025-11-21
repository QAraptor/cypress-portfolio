export class AccountInformationPage {
  elements = {
    accountInformationHeader: () => cy.get('h2.title.text-center'),
    titleRadioBtn: () => cy.get('#id_gender1'),
    fullName: () => cy.get('#name'),
    password: () => cy.get('#password'),
    firstName: () => cy.get('#first_name'),
    lastName: () => cy.get('#last_name'),
    day:  () => cy.get('#days'),
    month: () => cy.get('select[data-qa="months"]'),
    year: () => cy.get('select[data-qa="years"]'),
    newsletterCheckbox: () => cy.get('#newsletter'),
    specialOffersCheckbox: () => cy.get('#optin'),
    company: () => cy.get("input[data-qa='company']"),
    address: () => cy.get("input[data-qa='address']"),
    address_02: () => cy.get("input[data-qa='address2']"),
    country: () => cy.get('select[data-qa="country"]'),
    state: () => cy.get('#state'),
    city: () => cy.get('#city'),
    zipcode: () => cy.get('#zipcode'),
    mobileNumber: () => cy.get('#mobile_number'),
    createAccountBtn: () => cy.get("button[data-qa='create-account']"),
    accountCreatedHeader: () => cy.get("h2.title.text-center"),
    continueBtn: () => cy.get(".btn.btn-primary"),
    accountDeletedHeader: () => cy.get(".title.text-center"),
  };
  verifyAccountInfoHeader() {
    this.elements.accountInformationHeader().should('be.visible');
  }
  signUpNewsletter() {
    this.elements.newsletterCheckbox().check();
  }
  receiveSpecialOffer() {
    this.elements.specialOffersCheckbox().check();
  }

  enterFullName(fullName: string) {
    this.elements.fullName().clear().type(fullName);
  }

  enterTitle() {
    this.elements.titleRadioBtn().click();
  }

  createPassword(password: string) {
    this.elements.password().clear().type(password);
  }

  enterDay(dayValue: string) {
  this.elements.day().select(dayValue).should('contain', dayValue);
}
  
enterMonth(monthValue: string) {
  this.elements.month().select(monthValue).should('have.value', monthValue);
}
enterYear(yearValue: string) {
  this.elements.year().select(yearValue).should('have.value', yearValue);
}

  enterDateOfBirth(day: string, monthValue: string, year: string) {
  this.elements.day().select(day);
  this.elements.month().select(monthValue);
  this.elements.year().select(year);
}
  enterCompany(company: string) {
    this.elements.company().clear().type(company);
  }
  enterFirstName(firstName: string) {
    this.elements.firstName().clear().type(firstName);
  }
  enterLastName(lastName: string) {
    this.elements.lastName().clear().type(lastName);
  }

  enterAddress(address: string) {
    this.elements.address().clear().type(address);
  }
  enterAddress2(address2: string) {
    this.elements.address_02().clear().type(address2);
  }

  enterCountry(country: string) {
     this.elements.country()
    .should('be.visible')
    .select(country);             
  this.elements.country().should('have.value', country);
  }
  enterState(state: string) {
    this.elements.state().clear().type(state).type('{Enter}');
  }
  enterCity(city: string) {
    this.elements.city().clear().type(city);
  }

  enterZipcode(zipcode: string) {
    this.elements.zipcode().clear().type(zipcode);
  }

  enterMobile(mobile: string) {
    this.elements.mobileNumber().clear().type(mobile);
  }

  createAccount() {
    this.elements.createAccountBtn().click();
  }
  verifyAccount() {
    this.elements.accountCreatedHeader().should('have.text', 'Account Created!');
  }
  clickContinueBtn() {
    this.elements.continueBtn().click();
  }
  verifyAccountDeleted() {
    this.elements.accountDeletedHeader().should('have.text', 'Account Deleted!');
  }
}

export const accountInfoPage = new AccountInformationPage(); 