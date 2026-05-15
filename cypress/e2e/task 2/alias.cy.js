describe('Alias Practice Test', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })



  it('Using Alias for Username Field', () => {

    cy.get('[data-test="username"]')
      .as('usernameField')

    cy.get('@usernameField')
      .type('standard_user')

    cy.get('@usernameField')
      .should('have.value', 'standard_user')

  })

})