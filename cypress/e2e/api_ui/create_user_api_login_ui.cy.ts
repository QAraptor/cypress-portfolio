/// <reference types="cypress" />

import { usersApi } from '../../api/users.api';

import { generateRandomEmail, parseApiBody } from '../../utils/testUtils';
const email = generateRandomEmail();

describe('API → UI User Flow', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('creates user via API and logs in via UI', function () {
    const baseUser = this.users.apiEntity_base;

    const password = baseUser.password;

    const user = {
      ...baseUser,
      email,
      password,
    };

    // -----------------------------
    // STEP 1: Create user via API
    // -----------------------------
    usersApi.createAccount(user).then((createRes) => {
      expect(createRes.status).to.eq(200);

      // -----------------------------
      // STEP 2: Login via UI
      // -----------------------------
      cy.visit('/login');

      cp.loginPage.enterLoginEmail(user.email);
      cp.loginPage.enterPassword(user.password);
      cp.loginPage.clickLogin();

      // -----------------------------
      // STEP 3: Assert logged in
      // -----------------------------
      cy.contains('Logged in as').should('contain', user.name);

      // -----------------------------
      // STEP 4: Cleanup via API
      // -----------------------------
      usersApi
        .deleteAccount({
          email: user.email,
          password: user.password,
        })
        .then((deleteRes) => {
          expect(deleteRes.status).to.eq(200);

          const body = parseApiBody(deleteRes.body);
          expect(body.message).to.eq('Account deleted!');
        });
    });
  });
});
