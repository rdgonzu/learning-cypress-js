Cypress.on('uncaught:exception', () => {
  return false
})

describe("Working with modals and browser's alerts", () => {
  it('should check small modal dialog', () => {
    cy.visit('/modal-dialogs')

    cy.get('#showSmallModal').click()
    cy.get('div.modal-sm').should('be.visible')

    cy.get('#closeSmallModal').click()
    cy.get('div.modal-sm').should('not.exist')
  })

  it('should select OK in confirmation dialog', () => {
    cy.visit('/alerts')

    // stub allows you to spy in order to know that browser's confirm was called.
    const stub = cy.stub()
    cy.on('window:confirm', stub)

    // Mind that Cypress automatically accept browser's alerts and confirms.
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
      })

    cy.contains('You selected Ok').should('exist')
  })

  it('should select Cancel in confirmation dialog', () => {
    cy.visit('/alerts')

    cy.get('#confirmButton').click()

    cy.on('window:confirm', (confirm) => {
      expect(confirm).to.equal('Do you confirm action?')
      return false
    })

    cy.contains('You selected Cancel').should('exist')
  })
})
