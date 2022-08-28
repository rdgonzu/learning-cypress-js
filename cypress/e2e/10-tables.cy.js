Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with tables', () => {
  it('should check table header', () => {
    cy.visit('https://www.w3schools.com/html/html_tables.asp')

    const header = ['Company', 'Contact', 'Country']

    cy.get('table#customers th').each((tableHeader) => {
      expect(header).to.contain(tableHeader.html())
    })
  })

  it('should check number of rows', () => {
    cy.get('table#customers tr').should('have.length', 7)
  })
})
