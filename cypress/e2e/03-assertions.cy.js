Cypress.on('uncaught:exception', () => {
  return false
})

describe('Assertions', () => {
  it('should navigate from Home to Forms page', () => {
    // Test starts in home page.
    cy.visit('/')

    // Click on menu option 'Forms'
    cy.get('.card').eq(1).click() // Actions will be explained later.

    // Browser's url should contain 'forms'
    cy.url().should('contain', 'forms')

    // Main title should contain 'Forms'.
    cy.get('.main-header').should('to.contain.html', 'Forms')
  })

  it('should check the number of fields displayed in Text Box page', () => {
    cy.visit('/text-box')

    // Getting elements by class 'form-control' results in an array. That array should contain 4 elements.
    cy.get('.form-control').should('have.length', 4)
  })

  it('should check that submit button is available', () => {
    // Submit button should be visible and enable.
    cy.get('button#submit').should('be.visible').and('be.enabled')
  })

  it('should check that email field is available', () => {
    cy.get('#userEmail').then((email) => {
      // 'expect' and 'assert' can also be used.
      expect(email).to.be.visible
      expect(email).to.be.enabled
      expect(email).to.have.attr('placeholder', 'name@example.com')
    })
  })
})

/*
  All the assertions available can be found in Cypress documentation:
  https://docs.cypress.io/guides/references/assertions
  https://docs.cypress.io/api/commands/should
*/
