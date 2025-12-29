export const productsApi = {
  getAllProducts() {
    return cy.request({
      method: 'GET',
      url: '/api/productsList',
    });
  },
};
