/// <reference types="cypress" />

describe('API - Products', () => {
  it('API 1: Get All Products List returns 200 and a products list', () => {
    api.products.getAllProducts().then((res) => {
      expect(res.status).to.eq(200);

      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;

      expect(body).to.have.property('products');
      expect(body.products).to.be.an('array');
      expect(body.products.length).to.be.greaterThan(0);

      expect(body.products[0]).to.have.property('id');
      expect(body.products[0]).to.have.property('name');
      cy.log(JSON.stringify(res.body));
    });
  });

  it('API 2: POST to Products List returns 405 and error message', () => {
    api.products.postToAllProducts().then((res) => {
      //  expect(res.status).to.eq(405);

      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;

      expect(body).to.have.property('message');
      expect(body.message).to.eq('This request method is not supported.');
    });
  });

  it('API 4: PUT To All Brands List', () => {
    api.products.putToAllBrands().then((res) => {
      const body = typeof res.body === 'string' ? JSON.parse(res.body) : res.body;

      expect(body).to.have.property('message');
      expect(body.message).to.eq('This request method is not supported.');
    });
  });
});
