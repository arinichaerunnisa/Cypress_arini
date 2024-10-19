/// <reference types="cypress" />

describe('Login/Logout test', () => {
    
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

    it('Positive Scenario; Succes Login', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should ('include', 'zero.webappsecurity.com')
        cy.get('#signin_button').click()
        cy.get('h3').contains('Log in to ZeroBank') 
    
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name=user_password]').clear()
        cy.get('input[name=user_password]').type('password')
    
        cy.get('input[name=user_remember_me').check()
        cy.get('input[name=user_remember_me').should('be.checked')
    
        cy.get('input[name="submit"]').click()
        cy.get('.brand').should('contain.text', 'Zero Bank')
    })
    
    it('Succes Login Logout', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should ('include', 'zero.webappsecurity.com')
        cy.get('#signin_button').click()
        cy.get('h3').contains('Log in to ZeroBank') 
    
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
        cy.get('input[name=user_password]').clear()
        cy.get('input[name=user_password]').type('password')
    
        cy.get('input[name=user_remember_me').check()
        cy.get('input[name=user_remember_me').should('be.checked')
    
        cy.get('input[name="submit"]').click()
        cy.get('.brand').should('contain.text', 'Zero Bank')
        cy.get('.dropdown-toggle').last().click()
        cy.get('#logout_link').click()
        cy.get('.brand').should('contain.text', 'Zero Bank')
        cy.get('#signin_button').should('have.class', 'signin btn btn-info')
        
        
    
    })
    
})



