Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with dropdowns', () => {
  it('should select an option from dropdown and check its value', () => {
    cy.visit('https://itera-qa.azurewebsites.net/home/automation')

    // .select method allows you to select an option by index, text or value in the dropdown
    cy.get('.custom-select').select('Finland').should('have.value', 10)
  })

  it('should verify dropdown options', () => {
    cy.visit('https://react-select.com/home')

    const options = ['Ocean', 'Blue', 'Purple', 'Red', 'Green', 'Forest', 'Slate', 'Silver']

    cy.get('#react-select-6-input').click()

    cy.get('#react-select-6-listbox')
      .children()
      .children()
      .each(($option) => {
        expect(options).to.contain($option.html())
      })
  })
})
