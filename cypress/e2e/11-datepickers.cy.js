Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with datepickers', () => {
  it('should type a date', () => {
    cy.visit('https://material.angular.io/components/datepicker/overview')

    /*
      If the datepicker has its input editable, you can just type on it.
    */
    const date = '22/03/1987'
    cy.get('datepicker-overview-example input').type(date)
    cy.get('datepicker-overview-example input').should('have.value', date)
  })

  it('should select the current date', () => {
    cy.get('datepicker-overview-example svg').click()
    cy.get('button[aria-current="date"]').eq(1).click()

    const date = new Date().toLocaleDateString()
    cy.get('datepicker-overview-example input').should('have.value', date)
  })
})
