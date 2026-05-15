describe('Assertion Practice Tests', () => {

  beforeEach(() => {

    cy.visit('https://www.saucedemo.com')

  })



  it('be.visible Assertion', () => {

    cy.get('[data-test="login-button"]')
      .should('be.visible')

  })



  it('have.text Assertion', () => {

    cy.get('.login_logo')
      .should('have.text', 'Swag Labs')

  })



  it('have.attr Assertion', () => {

    cy.get('[data-test="username"]')
      .should('have.attr', 'placeholder', 'Username')

  })



  it('Negative Assertion Test', () => {

    cy.get('[data-test="error"]')
      .should('not.exist')

  })

})