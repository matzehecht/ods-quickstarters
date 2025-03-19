import type { Context } from 'mocha';
import './commands';
// eslint-disable-next-line @typescript-eslint/no-require-imports
import addContext = require('mochawesome/addContext');

export const consoleLogs: string[] = [];

beforeEach(function () {
  consoleLogs.splice(0);
});

afterEach(function () {
  const testName = this.currentTest?.fullTitle().replace(/ /g, '_');
  const fileName = `system-output-${String(testName)}.txt`;
  const filePath = `cypress/results/${fileName}`;

  cy.writeFile(filePath, consoleLogs.join('\n'));

  consoleLogs.splice(0);
});

Cypress.Commands.add('addContextPath', (title: string, contextPath: string) => {
  cy.on('test:after:run', (attributes) => {
    // The context needs the path relative to the build/test-results/mochawesome folder
    addContext({ test: attributes } as Context, {
      title: title,
      value: contextPath,
    });
  });
});
