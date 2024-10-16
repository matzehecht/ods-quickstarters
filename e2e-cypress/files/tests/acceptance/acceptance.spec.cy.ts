import { printTestDOMEvidence, printTestPlainEvidence, takeScreenshotEvidence } from '../../support/test-evidence';

// describe('ADD login example test', () => {

//   beforeEach(() => {
//     // log into Azure Active Directory through our sample SPA using our custom command
//     cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
//   })

//   it('Verifies the user can be logged in', () => {
//     cy.contains('title')
//   })

// });

describe('W3 application test', () => {
  it('Application is reachable', function () {
    cy.visit('/html/tryit.asp?filename=tryhtml_basic_paragraphs');
    cy.title().should('include', 'Tryit Editor');
    printTestDOMEvidence(this.test?.fullTitle() ?? '', 1, '#textareaCode', 'code area');
    printTestDOMEvidence(this.test?.fullTitle() ?? '', 2, '#iframecontainer', 'rendered code area');
    takeScreenshotEvidence(this.test?.fullTitle() ?? '', 3, 1, 'screenshot');
    takeScreenshotEvidence(this.test?.fullTitle() ?? '', 3, 2, 'screenshot substep 2');
    cy.title().then((title) => {
      printTestPlainEvidence(
        this.test?.fullTitle() ?? '',
        4,
        title,
        'Tryit Editor',
        'Title should include Tryit Editor',
      );
    });
  });
});
