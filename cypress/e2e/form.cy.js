describe('Form Tests', () => {

  // Form Test 1
  it('Checkout Form Test', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.get('.btn_inventory').first().click()

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Memoona')

    cy.get('[data-test="lastName"]').type('Ajmal')

    cy.get('[data-test="postalCode"]').type('54000')

    cy.get('[data-test="continue"]').click()

    cy.url().should('include', 'checkout-step-two')

  })

})