import { defineConfig } from 'cypress';
import baseConfig from './cypress.config';

export default defineConfig({
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    specPattern: 'tests/integration/**/*.cy.ts',
  },
  reporterOptions: {
    ...baseConfig.reporterOptions,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mochawesomeReporterOptions: {
      ...baseConfig.reporterOptions?.mochawesomeReporterOptions,
      reportFilename: 'integration-mochawesome',
    },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    reportersCustomReporterJsReporterOptions: {
      ...baseConfig.reporterOptions?.reportersCustomReporterJsReporterOptions,
      mochaFile: 'build/test-results/integration-junit-[hash].xml',
    },
  },
});
