/// <reference types="cypress" />

it('Navbar Test', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#onlineBankingMenu').click()
    cy.url().should('include', 'online-banking.html')
    cy.get('h1').should('be.visible')
    
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#homeMenu').click()
    cy.url().should('include', 'index.html')
    cy.get('h4').should('be.visible')

    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#feedback').click()
    cy.url().should('include', 'feedback.html')
    cy.get('h3').should('be.visible')
    cy.get('.brand').click()
    cy.url().should('include', 'index.html')
})
    
        
