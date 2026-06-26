/// <reference types="cypress" />
import { registerAndDeleteUser, registerNewUser, signInAndDeleteUser } from '../../utils/userFlows';

describe('Teardown', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  // Teardown helper for removing leftover test accounts from failed or interrupted runs.
  // Prevents stale users from causing duplicate-email or login conflicts in later tests.
  xit(' Sign in with existing user and delete account', () => {
    signInAndDeleteUser(fx.users.entity_04);
  });
});
