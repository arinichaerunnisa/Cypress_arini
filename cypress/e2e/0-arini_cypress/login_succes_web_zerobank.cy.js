/// <reference types="cypress" /> 
describe('Login Zero Bank', () => {
    it('should load the login page and input valid credentials', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name=user_password]').clear()
        cy.get('input[name=user_password]').type('password')
        cy.get('input[name=user_remember_me').check()
        cy.get('input[name=user_remember_me').should('be.checked')
        cy.get('input[name=submit]').click() 
        cy.get('#online_statements_tab').should('contain.text', 'Online Statements')
    })
})