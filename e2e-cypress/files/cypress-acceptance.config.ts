import { defineConfig } from 'cypress';
import CommonCypressConfig from './cypress.config';

export default defineConfig({
  ...CommonCypressConfig,
  e2e: {
    ...CommonCypressConfig.e2e,
    specPattern: 'tests/acceptance/*.cy.ts',
  },
  reporterOptions: {
    ...CommonCypressConfig.reporterOptions,
    mochaFile: 'build/test-results/acceptance-junit-[hash].xml',
  },
});
