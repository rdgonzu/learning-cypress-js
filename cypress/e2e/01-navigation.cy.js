Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test when the UI throws errors in console.
  return false
})

/*
  How to navigate to pages.
*/

describe('Navigate to ToolsQA', () => {
  it('should render home page', () => {
    // cy.visit(url) navigates to a given url.
    cy.visit('/') // Path from baseUrl if it is defined in config file.

    // Assertions will be explained later.
    cy.get('h5').should('have.length', 6)
  })

  it('should render Forms page', () => {
    /*
      Important: if another .visit method is not excecuted, this tests would continue using the browser
      with the state as it finished the last test.
    */
    cy.visit('/forms')
    cy.get('.main-header').should('contain', 'Form')
  })
})

/*
  Some other commands to navigate with Cypress:

  - Reload page:
  cy.reload()

  - Reload page withouth using cache:
  cy.reload(true)

  - Simulate browser's go back and go forward buttons:
  cy.go("back")
  cy.go("forward")

  Also and index can be passed how many times you want to "push" back or forward button:
  cy.go(-2)
  cy.go(2)
*/
