describe('Login Tests', () => {

  // Login Test 1
  it('Valid Login Test', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

  })



  // Login Test 2
  it('Invalid Password Test', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('wrongpassword')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]')
      .should('contain', 'Username and password do not match')

  })

})