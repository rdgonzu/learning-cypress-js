Cypress.on('uncaught:exception', () => {
  return false
})

describe('Working with drag and drop elements', () => {
  it('should mode the dragabble object to another position', () => {
    cy.visit('/dragabble')

    /*
      To perform a drag and drop you just need to trigger the 'mousedown' action, move the mouse to another
      position using the 'mousemove' action and then just trigger the mouseup action.
    */

    cy.get('#dragBox')
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mousemove', { which: 1, pageX: 900, pageY: 300 })
      .trigger('mouseup')

    cy.get('#dragBox').should('have.css', 'left', '300px').and('have.css', 'top', '200px')
  })
})
