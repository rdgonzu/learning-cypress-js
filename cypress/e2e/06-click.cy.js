Cypress.on('uncaught:exception', () => {
  return false
})

describe('Click action', () => {
  beforeEach(() => {
    cy.visit('/buttons')
  })

  it('should click on the "Click Me" button', () => {
    cy.get('button').eq(3).click()
    cy.get('#dynamicClickMessage').should('contain.html', 'You have done a dynamic click')
  })

  it('should double click on the "Double Click Me" button', () => {
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#doubleClickMessage').should('contain.html', 'You have done a double click')
  })

  it('should right click on the "Right Click Me" button', () => {
    cy.get('#rightClickBtn').rightclick()
    cy.get('#rightClickMessage').should('contain.html', 'You have done a right click')
  })
})

/*
  You can also spacify coordinates or position for the click in case you need it:
  cy.get('div.container').click('topRight')
  cy.get('div.container').click('bottonLeft')
  cy.get('div.container').click(50, 200) // passing coordinates 'x' and 'y'.
*/
