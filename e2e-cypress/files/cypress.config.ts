import { defineConfig } from 'cypress';

export default defineConfig({
  //projectId: '[Your project ID from Cypress cloud]',
  reporter: 'reporters/custom-reporter.js',
  reporterOptions: {
    mochaFile: 'build/test-results/tests-[hash].xml',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'https://www.w3schools.com',
    fixturesFolder: 'fixtures',
    specPattern: 'tests/**/*.cy.ts',
    supportFile: 'support/e2e.ts',
    viewportWidth: 1376,
    viewportHeight: 660,
    experimentalModifyObstructiveThirdPartyCode: true,
    video: true,
    async setupNodeEvents(on, config) {
      return (await import('./plugins/index')).default(on, config);
    },
  },
});
