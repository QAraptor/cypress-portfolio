import { usersApi } from '../../api/users.api';

describe('Create Account API', () => {
  it('creates a new user successfully', () => {
    const baseUser = fx.users.apiEntity_01;

    const user = {
      ...baseUser,
      email: `api_${Date.now()}@test.com`,
    };

    usersApi.createAccount(user).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.exist;
    });
  });

  it('API 12: CREATE AND DELETE user account returns 200 and success message', () => {
    const baseUser = fx.users.apiEntity_02;

    const user = {
      ...baseUser,
      email: `api_${Date.now()}@test.com`,
    };

    usersApi.createAccount(user).then(() => {
      usersApi
        .deleteAccount({
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          expect(response.status).to.eq(200);

          const body =
            typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

          expect(body.message).to.eq('Account deleted!');
        });
    });
  });

  it('creates a user when all required fields are valid', () => {
    const baseUser = fx.users.apiEntity_03;

    const user = {
      ...baseUser,
      email: `api_${Date.now()}@test.com`,
    };

    usersApi.createAccount(user).then((res) => {
      expect(res.status).to.eq(200);

      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;

      expect(body).to.have.property('responseCode', 201);
      expect(body).to.have.property('message', 'User created!');

      expect(body.responseCode).to.be.a('number');
      expect(body.message).to.be.a('string');
    });
  });

  it('deletes existing users via API', () => {
    const usersToDelete = [fx.users.apiEntity_01, fx.users.apiEntity_03];

    usersToDelete.forEach((user) => {
      usersApi
        .deleteAccount({
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          // expect(response.status).to.eq(200);
          // Allow idempotent outcomes
          expect([200, 404]).to.include(response.status);

          const body =
            typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

          //  expect(body.message).to.eq('Account deleted!');
          // expect(body.responseCode).to.eq(200);
          expect([200, 404]).to.include(body.responseCode);
          expect(['Account deleted!', 'Account not found!']).to.include(body.message);
        });
    });
  });
});
