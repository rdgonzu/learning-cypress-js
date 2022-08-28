Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with checkboxes and radio buttons', () => {
  it('should select a gender', () => {
    cy.visit('/automation-practice-form')

    /*
      Mind that each radio button is covered by other element, so if you try to click on it, the test will fail.
      The solution is to 'force' the click action.
    */
    cy.get('#gender-radio-1').click({ force: true })
    cy.get('#gender-radio-1').should('be.checked')
  })

  it('should select gender Female', () => {
    /*
      This way you can choose a gender, according to the UI.
    */
    cy.get('label[for="gender-radio-2"]').click()
    cy.get('#gender-radio-2').should('be.checked')
  })

  it('should check Reading and Music checkboxes', () => {
    /*
      You can also use the 'check' method passing values of the inputs you want to check and 'force' if needed.
      This can be used in both radio buttons and checkboxes.
    */
    cy.get('input[type="checkbox"]').check(['2', '3'], { force: true })
    cy.get('#hobbies-checkbox-2').should('be.checked')
    cy.get('#hobbies-checkbox-3').should('be.checked')
  })
})
