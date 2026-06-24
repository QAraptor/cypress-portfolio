/// <reference types="cypress" />
import { registerAndDeleteUser, registerNewUser, signInAndDeleteUser } from '../../utils/userFlows';

//import { fx } from "cypress/fixtures";

describe('Teardown', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  xit(' Sign in with existing user and delete account', () => {
    signInAndDeleteUser(fx.users.entity_05);
    signInAndDeleteUser(fx.users.entity_02);
  });
});
