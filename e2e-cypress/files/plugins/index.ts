// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

import type { ScreenshotEvidenceData } from './screenshot.types';
import { addEvidenceMetaToScreenshot } from './screenshot';

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const setupNodeEvents: NonNullable<Cypress.ConfigOptions['setupNodeEvents']> = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    async takeScreenshotEvidence(data: ScreenshotEvidenceData) {
      return await addEvidenceMetaToScreenshot(data);
    }
  });
  on('before:browser:launch', (browser: Cypress.Browser, launchOptions) => {
    if (browser.isHeadless && (browser.name === 'chrome' || browser.name === 'edge')) {
      launchOptions.args.push('--disable-gpu');
    }
    return launchOptions;
  });
};

export default setupNodeEvents;
