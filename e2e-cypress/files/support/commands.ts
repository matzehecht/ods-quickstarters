// ***********************************************
// This commands.js contains custom commands and
// overwrite existing commands.
//
// For more information about custom commands
// please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { addGenericLoginCommands } from './generic-login';
import { addGetTOTP, addLoginToAAD, addLoginToAADWithMFA, addSessionLoginWithMFA } from './login-functions';

addGenericLoginCommands();
addGetTOTP();
addSessionLoginWithMFA();
addLoginToAAD();
addLoginToAADWithMFA();

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- interface augmentation
    interface Chainable<> {
      addContextPath(title: string, screenshot: string): void;
      getTOTP(): Cypress.Chainable<string>;
      loginToAAD(username: string, password: string): void;
      loginToAADWithMFA(username: string, password: string): void;
      sessionLoginWithMFA(username: string, password: string): void;
    }
  }
}
