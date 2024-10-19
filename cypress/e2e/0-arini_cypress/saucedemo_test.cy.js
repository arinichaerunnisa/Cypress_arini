describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.url().should('include', 'saucedemo.com')
          cy.get('user-name').type("standard_user");
          cy.get('password').type("secret_sauce");
          cy.get('#login-button').click()
          cy.url().should('contains', 'inventory');
          cy.get('span[data-test=title]').should('have.text', 'product');
    })
  })