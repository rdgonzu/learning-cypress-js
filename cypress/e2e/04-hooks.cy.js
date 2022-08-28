Cypress.on('uncaught:exception', () => {
  return false
})

describe('Hooks', () => {
  // All hooks as before, beforeEach, after and afterEach are available.
  beforeEach(() => {
    cy.visit('/text-box')
  })

  it('should type in name field', () => {
    const username = 'John Doe'
    cy.get('#userName').type(username)
    cy.get('#userName').should('have.value', username)
  })

  it('Name field should be empty', () => {
    // The page was visited again, because of the beforeEach hook.
    cy.get('#userName').should('be.empty')
  })
})
