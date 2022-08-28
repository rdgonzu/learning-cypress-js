Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with inputs', () => {
  it('should type name and lastname', () => {
    cy.visit('/automation-practice-form')

    const firstName = 'John'
    const lastName = 'Doe'

    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)

    cy.get('#firstName').should('have.value', firstName)
    cy.get('#lastName').should('have.value', lastName)
  })

  it('should type another name and lastname', () => {
    const firstName = 'Gordon'
    const lastName = 'Norman'

    /*
      With {selectall} and {backspace} actions you select all the text typed in inputs in the last tests
      and then delete it before typing new text.
    */
    cy.get('#firstName').type(`{selectall}{backspace}${firstName}`)
    cy.get('#lastName').type(`{selectall}{backspace}${lastName}`)

    cy.get('#firstName').should('have.value', firstName)
    cy.get('#lastName').should('have.value', lastName)
  })
})
