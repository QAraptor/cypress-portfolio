/// <reference types="cypress" />
import { createAccount } from '../../api/users.api';

describe('Create Account API', () => {
  it('creates a new user successfully', () => {
    const user = fx.users.apiEntity_01;

    createAccount(user).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
      // expect(response.body.message).to.eq('User created!');
    });
  });
});
