import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL ?? 'https://www.w3schools.com',
    experimentalModifyObstructiveThirdPartyCode: true,
    fixturesFolder: 'fixtures',
    screenshotsFolder: 'build/test-results/screenshots',
    async setupNodeEvents(on, config) {
      return (await import('./plugins/index')).default(on, config);
    },
    specPattern: 'tests/**/*.cy.ts',
    supportFile: 'support/e2e.ts',
    video: false,
    viewportHeight: 720,
    viewportWidth: 1280,
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    mochawesomeReporterOptions: {
      charts: true,
      html: true,
      json: true,
      reportDir: 'build/test-results/mochawesome',
      reportFilename: 'mochawesome',
      timestamp: true,
    },
    reporterEnabled: 'mochawesome,./reporters/custom-reporter.cjs',
    reportersCustomReporterJsReporterOptions: {
      mochaFile: 'build/test-results/tests-[hash].xml',
      toConsole: true,
    },
  },
  // env: {
  //   otp_secret: process.env.OTP_SECRET
  // },
});
