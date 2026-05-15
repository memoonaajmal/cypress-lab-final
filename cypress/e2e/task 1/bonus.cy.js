describe('Bonus Practice Tests', () => {

  // Bonus Test 1
  // Check if button and text are visible

  it('Check Visibility of Button and Text', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="login-button"]')
      .should('be.visible')

    cy.contains('Swag Labs')
      .should('be.visible')

  })



  // Bonus Test 2
  // Dropdown selection test

  it('Select Dropdown Option', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="product-sort-container"]')
      .select('Price (low to high)')

    cy.get('[data-test="product-sort-container"]')
      .should('have.value', 'lohi')

  })



  // Bonus Test 3
  // Logout test

  it('Logout Test', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    // Open menu
    cy.get('#react-burger-menu-btn').click()

    // Click logout
    cy.get('#logout_sidebar_link').click()

    // Verify login page appears again
    cy.url().should('eq', 'https://www.saucedemo.com/')

  })

})