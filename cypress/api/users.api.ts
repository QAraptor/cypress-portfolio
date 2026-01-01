export const usersApi = {
  createAccount(user: Record<string, any>) {
    return cy.request({
      method: 'POST',
      url: '/api/createAccount',
      form: true,
      body: user,
      failOnStatusCode: false,
    });
  },

  deleteAccount(credentials: { email: string; password: string }) {
    return cy.request({
      method: 'DELETE',
      url: '/api/deleteAccount',
      form: true,
      body: credentials,
      failOnStatusCode: false,
    });
  },
};
