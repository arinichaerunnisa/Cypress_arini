/// <reference types="cypress"/>

describe('Searchbox Test', function() {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/login.html')
  })

it.only('should type into searchbox and submit', () => {
    cy.get('id=searchTerm').type('online{enter}')
   })

it('should show search result page', () => {
       cy.get('h2').contains('Search Results:')
   })

})