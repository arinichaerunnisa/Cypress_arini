/// <reference types="cypress" />

describe('Login/Logout test', () => {
    
})

it('Negative Scenario; Failed Login', () => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.url().should ('include', 'zero.webappsecurity.com')
    cy.get('#signin_button').click()
    cy.get('h3').contains('Log in to ZeroBank') 

    cy.get('#user_login').clear()
    cy.get('#user_login').type('invalid_username')
    cy.get('input[name=user_password]').clear()
    cy.get('input[name=user_password]').type('password_12345678')

    cy.get('input[name=user_remember_me').check()
    cy.get('input[name=user_remember_me').should('be.checked')

    cy.get('input[name="submit"]').click()
    cy.get('div[class="alert alert-error"]').should('be.visible').and( 'contain', 'Login and/or password are wrong.')
})
