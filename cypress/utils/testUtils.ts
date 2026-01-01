//--------Generic Helpers------//

export const generateRandomEmail = () => {
  return `user_${Date.now()}@test.com`;
};

export const parseApiBody = (body: any) => {
  return typeof body === 'string' ? JSON.parse(body) : body;
};
