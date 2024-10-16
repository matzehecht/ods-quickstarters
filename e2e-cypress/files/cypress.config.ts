import { defineConfig } from 'cypress';

export default defineConfig({
  //projectId: '[Your project ID from Cypress cloud]',
  e2e: {
    baseUrl: 'https://www.w3schools.com',
    experimentalModifyObstructiveThirdPartyCode: true,
    fixturesFolder: 'fixtures',
    async setupNodeEvents(on, config) {
      return (await import('./plugins/index')).default(on, config);
    },
    specPattern: 'tests/**/*.cy.ts',
    supportFile: 'support/e2e.ts',
    video: true,
    viewportHeight: 660,
    viewportWidth: 1376,
  },
  reporter: 'reporters/custom-reporter.js',
  reporterOptions: {
    mochaFile: 'build/test-results/tests-[hash].xml',
    toConsole: true,
  },
});
