Cypress.on('uncaught:exception', () => {
  return false
})

/*
  How to get elements from the UI in order to test them.
*/

describe('Selectors', () => {
  // Hooks are going to be explained later.
  before(() => {
    cy.visit('/automation-practice-form')
  })

  it('should get elements by tag', () => {
    // Get element by tags, 'label' in this case.
    cy.get('label').should('have.length', 16)
  })

  it('should get element by ID', () => {
    // Get first name field by its ID (#firstName).
    cy.get('#firstName').should('have.attr', 'placeholder', 'First Name')
  })

  it('should get elements by class', () => {
    // Get elements by their class (.form-control).
    cy.get('.form-control').should('have.length', 6)
  })

  it('should get element by an attribute', () => {
    // Get element by an attribute, placeholder in this case.
    cy.get('input[placeholder="First Name"]').should('have.class', 'form-control')
  })

  it('should get element by its content', () => {
    // Get element that contains "Practice Form"
    cy.contains('Practice Form').should('have.class', 'main-header')
  })
})

/*
  In summary, the way you select elements from the UI in order to test them is by using css selectors:
  by tag, by ID, by class, etc.
*/
