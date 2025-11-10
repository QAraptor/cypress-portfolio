import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    viewportWidth: 1366,
    viewportHeight: 768,
    retries: { runMode: 2, openMode: 0 },
    video: true,
    screenshotOnRunFailure: true,
  },
});
