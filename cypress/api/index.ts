import { productsApi } from './products.api';
import { createAccount } from './users.api';

export const api = {
  products: productsApi,
  newUser: createAccount,
};
