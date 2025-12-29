export const createAccount = (user: any) => {
  return cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: user,
  });
};
