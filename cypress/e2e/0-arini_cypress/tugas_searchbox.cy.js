/// <reference types="cypress"/>

describe('searchbox_test', ()=> {
    before( () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        })

    it('should type into searchbox and submit', () =>{
        cy.get('[id= searchTerm]').type('online{enter}')
        cy.get('h2').contains('Search Results:')

    }) 

    it('should show search result page', () =>{
        cy.get('#text').contains('The following pages were found for the query: online')


    })

})