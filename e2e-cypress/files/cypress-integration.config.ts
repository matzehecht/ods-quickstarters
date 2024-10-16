import { defineConfig } from 'cypress'
import CommonCypressConfig from './cypress.config'

export default defineConfig({
  ...CommonCypressConfig,
  reporterOptions: {
    ...CommonCypressConfig.reporterOptions,
    mochaFile: 'build/test-results/integration-junit-[hash].xml',
  },
  e2e: {
    ...CommonCypressConfig.e2e,
    specPattern: 'tests/integration/*.cy.ts',
  },
})
