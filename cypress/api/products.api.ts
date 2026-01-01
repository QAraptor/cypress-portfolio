export const productsApi = {
  getAllProducts() {
    return cy.request({
      method: 'GET',
      url: '/api/productsList',
    });
  },
  postToAllProducts() {
    return cy.request({
      method: 'POST',
      url: '/api/productsList',
      failOnStatusCode: false,
    });
  },

  putToAllBrands() {
    return cy.request({
      method: 'PUT',
      url: '/api/brandsList',
      failOnStatusCode: false,
    });
  },
};
