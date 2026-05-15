describe('Navigation Tests', () => {

  // Navigation Test 1
  it('Open Product Page', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('.inventory_item_name').first().click()

    cy.url().should('include', 'inventory-item')

  })



  // Navigation Test 2
  it('Visit Two Pages', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('.shopping_cart_link').click()

    cy.url().should('include', 'cart')

    cy.get('#continue-shopping').click()

    cy.url().should('include', 'inventory')

  })

})