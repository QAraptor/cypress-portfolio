/// <reference types="cypress" />
import { testUtils, TestUtils } from 'cypress/utils/testUtils';
export class AccountInformationPage {
  elements = {
    accountInformationHeader: 'h2.title.text-center',
    titleRadioBtn: '#id_gender1',
    fullName: '#name',
    password: '#password',
    firstName: '#first_name',
    lastName: '#last_name',
    day: '#days',
    month: 'select[data-qa="months"]',
    year: 'select[data-qa="years"]',
    newsletterCheckbox: '#newsletter',
    specialOffersCheckbox: '#optin',
    company: "input[data-qa='company']",
    address: "input[data-qa='address']",
    address_02: "input[data-qa='address2']",
    country: 'select[data-qa="country"]',
    state: '#state',
    city: '#city',
    zipcode: '#zipcode',
    mobileNumber: '#mobile_number',
    createAccountBtn: "button[data-qa='create-account']",
    accountCreatedHeader: 'h2.title.text-center',
    continueBtn: '.btn.btn-primary',
    accountDeletedHeader: '.title.text-center',
  };
  verifyAccountInfoHeader(): void {
    testUtils.verifyElementVisible(this.elements.accountInformationHeader);
  }

  signUpNewsletter(): void {
    testUtils.checkElement(this.elements.newsletterCheckbox);
  }

  receiveSpecialOffer(): void {
    testUtils.checkElement(this.elements.specialOffersCheckbox);
  }

  enterFullName(fullName: string): void {
    testUtils.enterText(this.elements.fullName, fullName);
  }

  enterTitle(): void {
    testUtils.clickElement(this.elements.titleRadioBtn);
  }

  createPassword(password: string): void {
    testUtils.enterText(this.elements.password, password);
  }

  enterDay(dayValue: string): void {
    testUtils.selectDropdownAndVerifyContains(this.elements.day, dayValue);
  }

  enterMonth(monthValue: string): void {
    testUtils.selectDropdownAndVerifyValue(this.elements.month, monthValue);
  }

  enterYear(yearValue: string): void {
    testUtils.selectDropdownAndVerifyValue(this.elements.year, yearValue);
  }

  enterDateOfBirth(day: string, monthValue: string, year: string): void {
    testUtils.selectDropdown(this.elements.day, day);
    testUtils.selectDropdown(this.elements.month, monthValue);
    testUtils.selectDropdown(this.elements.year, year);
  }

  enterCompany(company: string): void {
    testUtils.enterText(this.elements.company, company);
  }

  enterFirstName(firstName: string): void {
    testUtils.enterText(this.elements.firstName, firstName);
  }

  enterLastName(lastName: string): void {
    testUtils.enterText(this.elements.lastName, lastName);
  }

  enterAddress(address: string): void {
    testUtils.enterText(this.elements.address, address);
  }

  enterAddress2(address2: string): void {
    testUtils.enterText(this.elements.address_02, address2);
  }

  enterCountry(country: string): void {
    testUtils.verifyElementVisible(this.elements.country);
    testUtils.selectDropdownAndVerifyValue(this.elements.country, country);
  }

  enterState(state: string): void {
    testUtils.enterText(this.elements.state, state);
    cy.get(this.elements.state).type('{Enter}');
  }

  enterCity(city: string): void {
    testUtils.enterText(this.elements.city, city);
  }

  enterZipcode(zipcode: string): void {
    testUtils.enterText(this.elements.zipcode, zipcode);
  }

  enterMobile(mobile: string): void {
    testUtils.enterText(this.elements.mobileNumber, mobile);
  }

  createAccount(): void {
    testUtils.clickElement(this.elements.createAccountBtn);
  }

  verifyAccount(): void {
    testUtils.verifyText(this.elements.accountCreatedHeader, 'Account Created!');
  }

  verifyAccountDoesNotExist(): void {
    testUtils.verifyTextNotEqual(this.elements.accountCreatedHeader, 'Account Created!');
  }

  clickContinueBtn(): void {
    testUtils.clickElement(this.elements.continueBtn);
  }

  verifyAccountDeleted(): void {
    testUtils.verifyText(this.elements.accountDeletedHeader, 'Account Deleted!');
  }
}

export const accountInfoPage = new AccountInformationPage();
